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
  { pair: 'XAU/USD', price: 2348.50, change: 0.52, decimals: 2 },
  { pair: 'BTC/USD', price: 67421.00, change: 1.24, decimals: 0 },
]

const TickerItem = ({ pair, initialPrice, initialChange, decimals }) => {
  const [price, setPrice] = useState(initialPrice)
  const [change, setChange] = useState(initialChange)

  useEffect(() => {
    // Each item fluctuates at its own random offset to make it look realistic
    const intervalTime = 1500 + Math.random() * 2000
    const interval = setInterval(() => {
      let fluctuation = 0
      if (decimals === 5) {
        fluctuation = (Math.random() - 0.5) * 0.00018
      } else if (decimals === 3) {
        fluctuation = (Math.random() - 0.5) * 0.03
      } else if (decimals === 2) {
        fluctuation = (Math.random() - 0.5) * 0.9
      } else {
        fluctuation = (Math.random() - 0.5) * 25
      }

      setPrice((prev) => Math.max(0.00001, prev + fluctuation))
      setChange((prev) => prev + (Math.random() - 0.5) * 0.03)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [decimals])

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

