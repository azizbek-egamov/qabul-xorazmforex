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

const TickerItem = ({ pair, price, change, decimals }) => {
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
  const [data, setData] = useState(initialTickers)

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        // Randomly choose 2-3 pairs to update
        const countToUpdate = Math.floor(Math.random() * 3) + 1
        const updated = [...prevData]
        
        for (let i = 0; i < countToUpdate; i++) {
          const indexToUpdate = Math.floor(Math.random() * updated.length)
          const item = { ...updated[indexToUpdate] }
          
          // Calculate realistic small fluctuation based on decimal scale
          let fluctuation = 0
          if (item.decimals === 5) {
            fluctuation = (Math.random() - 0.5) * 0.00015
          } else if (item.decimals === 3) {
            fluctuation = (Math.random() - 0.5) * 0.025
          } else if (item.decimals === 2) {
            fluctuation = (Math.random() - 0.5) * 0.8
          } else {
            fluctuation = (Math.random() - 0.5) * 20
          }
          
          // Update price and change percentage slightly
          item.price = Math.max(0.00001, item.price + fluctuation)
          const changeShift = (Math.random() - 0.5) * 0.02
          item.change = item.change + changeShift
          
          updated[indexToUpdate] = item
        }
        
        return updated
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const doubled = [...data, ...data]

  return (
    <div className={styles.ticker}>
      <div className={styles.label}>LIVE</div>
      <div className={styles.track}>
        <div className={styles.scroll}>
          {doubled.map((t, i) => (
            <TickerItem
              key={`${t.pair}-${i}`}
              pair={t.pair}
              price={t.price}
              change={t.change}
              decimals={t.decimals}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
