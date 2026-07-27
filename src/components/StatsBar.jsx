import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './StatsBar.module.css'

const useCounter = (target, duration = 2000, isVisible) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, isVisible])
  return count
}

const StatItem = ({ num, suffix, label, isVisible }) => {
  const count = useCounter(num, 1800, isVisible)
  return (
    <div className={styles.stat}>
      <div className={styles.statNum}>
        {count}{suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

const stats = [
  { num: 2005, suffix: '', label: 'Yildan buyon faoliyat' },
  { num: 2000, suffix: '+', label: "Mamnun o'quvchilar" },
  { num: 500, suffix: '+', label: 'Aktiv treyderlar' },
  { num: 5, suffix: '★', label: 'Reyting (Google & Telegram)' },
]

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.wrap}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <StatItem {...s} isVisible={isInView} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
