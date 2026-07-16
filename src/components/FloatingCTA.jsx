import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './FloatingCTA.module.css'

export default function FloatingCTA({ onRegister }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.wrap}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.inner}>
            <div className={styles.text}>
              <span className={styles.label}>Aksiya</span>
              <span className={styles.price}>3 mln so'm • $5000 kapital</span>
            </div>
            <button className={styles.btn} onClick={onRegister}>
              Qabul ➔
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
