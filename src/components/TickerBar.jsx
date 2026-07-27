import { useState, useEffect } from 'react'
import styles from './TickerBar.module.css'

const initialTickers = [
  { pair: 'EUR/USD', price: 1.08742, change: 0.15, decimals: 5 },
  { pair: 'GBP/USD', price: 1.26514, change: 0.22, decimals: 5 },
  { pair: 'USD/JPY', price: 157.834, change: -0.08, decimals: 3 },
  { pair: 'USD/CHF', price: 0.90123, change: 0.11, decimals: 5 },
  { pair: 'AUD/USD', price: 0.64788, change: -0.19, decimals: 5 },
  { pair: 'NZD/USD', price: 0.59234, change: 0.07, decimals: 5 },
  { pair: 'USD/CAD', price: 1.36421, change: -0.13, decimals: 5 },
  { pair: 'EUR/GBP', price: 0.85912, change: 0.04, decimals: 5 },
  { pair: 'EUR/JPY', price: 171.234, change: 0.31, decimals: 3 },
  { pair: 'GBP/JPY', price: 199.872, change: 0.18, decimals: 3 },
  { pair: 'XAU/USD', price: 2385.50, change: 0.52, decimals: 2 },
  { pair: 'BTC/USD', price: 67421.00, change: 1.24, decimals: 0 },
]

// Pub/sub registry to broadcast live API price updates to items without re-rendering parent
const priceRegistry = {
  listeners: {},
  subscribe(pair, callback) {
    if (!this.listeners[pair]) this.listeners[pair] = []
    this.listeners[pair].push(callback)
    return () => {
      this.listeners[pair] = this.listeners[pair].filter(cb => cb !== callback)
    }
  },
  broadcast(pair, newPrice, newChange) {
    if (this.listeners[pair]) {
      this.listeners[pair].forEach(cb => cb(newPrice, newChange))
    }
  }
}

const TickerItem = ({ pair, initialPrice, initialChange, decimals }) => {
  const [price, setPrice] = useState(initialPrice)
  const [change, setChange] = useState(initialChange)

  // Subscribe to real-world live API updates
  useEffect(() => {
    const unsubscribe = priceRegistry.subscribe(pair, (realPrice, realChange) => {
      if (realPrice !== undefined) setPrice(realPrice)
      if (realChange !== undefined) setChange(realChange)
    })
    return unsubscribe
  }, [pair])

  const isUp = change >= 0
  const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  const formattedChange = (isUp ? '+' : '') + change.toFixed(2) + '%'

  return (
    <div className={styles.item}>
      <span className={styles.pair}>{pair}</span>
      <span className={styles.price}>{formattedPrice}</span>
      <span className={`${styles.change} ${isUp ? styles.up : styles.down}`}>
        {isUp ? '▲' : '▼'} {formattedChange}
      </span>
      <span className={styles.dot}>•</span>
    </div>
  )
}

export default function TickerBar() {
  const doubled = [...initialTickers, ...initialTickers]

  // Periodically fetch live rates from free public APIs
  useEffect(() => {
    const fetchForex = async () => {
      // Fetch live Forex rates (free Frankfurter API)
      try {
        const res = await fetch('https://api.frankfurter.app/latest?from=USD')
        if (res.ok) {
          const data = await res.json()
          const r = data.rates
          priceRegistry.broadcast('EUR/USD', 1 / r.EUR)
          priceRegistry.broadcast('GBP/USD', 1 / r.GBP)
          priceRegistry.broadcast('USD/JPY', r.JPY)
          priceRegistry.broadcast('USD/CHF', r.CHF)
          priceRegistry.broadcast('USD/CAD', r.CAD)
          priceRegistry.broadcast('AUD/USD', 1 / r.AUD)
          priceRegistry.broadcast('NZD/USD', 1 / r.NZD)
          priceRegistry.broadcast('EUR/GBP', r.GBP / r.EUR)
          priceRegistry.broadcast('EUR/JPY', r.JPY / r.EUR)
          priceRegistry.broadcast('GBP/JPY', r.JPY / r.GBP)
        }
      } catch (e) {
        console.error('Forex live sync error:', e)
      }
    }

    const fetchCryptoAndGold = async () => {
      // Fetch live Crypto (BTC) and Gold (PAXG - tracks Gold spot price 1:1) from Binance
      try {
        const [btcRes, paxgRes] = await Promise.all([
          fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT'),
          fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=PAXGUSDT')
        ])

        if (btcRes.ok) {
          const data = await btcRes.json()
          const price = parseFloat(data.lastPrice)
          const change = parseFloat(data.priceChangePercent)
          priceRegistry.broadcast('BTC/USD', price, change)
        }

        if (paxgRes.ok) {
          const data = await paxgRes.json()
          const price = parseFloat(data.lastPrice)
          const change = parseFloat(data.priceChangePercent)
          priceRegistry.broadcast('XAU/USD', price, change)
        }
      } catch (e) {
        console.error('Crypto/Gold live sync error:', e)
      }
    }

    fetchForex()
    fetchCryptoAndGold()

    const forexInterval = setInterval(fetchForex, 20000) // sync forex every 20s
    const cryptoInterval = setInterval(fetchCryptoAndGold, 5000) // sync crypto/gold every 5s

    return () => {
      clearInterval(forexInterval)
      clearInterval(cryptoInterval)
    }
  }, [])

  return (
    <div className={styles.ticker}>
      <div className={styles.label}>LIVE</div>
      <div className={styles.track}>
        <div className={styles.scroll}>
          {doubled.map((t, i) => (
            <TickerItem
              key={`${t.pair}-${i}`}
              pair={t.pair}
              initialPrice={t.price}
              initialChange={t.change}
              decimals={t.decimals}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

