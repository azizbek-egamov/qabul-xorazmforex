import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './PromoBanner.module.css'

const useCountdown = (targetDate) => {
  const calc = () => {
    const diff = new Date(targetDate) - new Date()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const timer = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(timer)
  }, [])
  return time
}

const Digit = ({ val, label }) => (
  <div className={styles.digit}>
    <div className={styles.digitNum}>{String(val).padStart(2, '0')}</div>
    <div className={styles.digitLabel}>{label}</div>
  </div>
)

export default function PromoBanner({ onRegister }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  // Countdown: 3 days from now
  const target = new Date(Date.now() + 3 * 24 * 3600 * 1000)
  const time = useCountdown(target)

  // Live viewers simulation
  const [viewers, setViewers] = useState(14)
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1
        const next = prev + delta
        return next >= 11 && next <= 19 ? next : prev
      })
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="promotion" ref={ref} className={styles.wrap}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background elements */}
        <div className={styles.bgGlow1} />
        <div className={styles.bgGlow2} />
        <div className={styles.bgGrid} />

        <div className={styles.inner}>
          {/* Badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            🔥 MAXSUS TAKLIF — CHEKLANGAN
          </motion.div>

          {/* Title */}
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            START kursiga yoziling va{' '}
            <span className={styles.highlight}>50% chegirmaga</span>{' '}
            ega bo'ling!
          </motion.h2>

          {/* Price block */}
          <motion.div
            className={styles.priceBlock}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.priceOld}>
              <span className={styles.priceOldLabel}>Eski narx</span>
              <span className={styles.priceOldVal}>6 000 000 so'm</span>
            </div>
            <div className={styles.priceArrow}>➔</div>
            <div className={styles.priceNew}>
              <div className={styles.priceMainRow}>
                <span className={styles.priceNewVal}>3 000 000 so'm</span>
                <span className={styles.priceAgeLabel}>Talabalar va 25 yoshgacha bo'lganlar uchun</span>
              </div>
              <div className={styles.priceExtra}>
                *25 yoshdan kattalarga 4 000 000 so'm (maxsus yengilliklar mavjud)
              </div>
            </div>
          </motion.div>

          {/* Gift box */}
          <motion.div
            className={styles.gift}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className={styles.giftIcon}>🎁</div>
            <div className={styles.giftContent}>
              <h3 className={styles.giftTitle}>Har bir o'quvchiga kafolatlangan sovg'a</h3>
              <p className={styles.giftDesc}>
                START kursini tamomlagan har bir bitiruvchiga{' '}
                <strong>$5,000</strong> qiymatidagi haqiqiy{' '}
                <strong>Prop Trading kapitali</strong> mutlaqo sovg'a qilinadi!
                O'z pulingizni xavf ostiga qo'ymay, tayyor kapitalda ishlaysiz.
              </p>
            </div>
          </motion.div>

          {/* Countdown + scarcity */}
          <motion.div
            className={styles.bottom}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            {/* Countdown */}
            <div className={styles.countdown}>
              <div className={styles.countdownLabel}>Aksiya tugashiga:</div>
              <div className={styles.digits}>
                <Digit val={time.d} label="KUN" />
                <span className={styles.colon}>:</span>
                <Digit val={time.h} label="SOAT" />
                <span className={styles.colon}>:</span>
                <Digit val={time.m} label="DAQIQA" />
                <span className={styles.colon}>:</span>
                <Digit val={time.s} label="SONIYA" />
              </div>
            </div>

            {/* Scarcity & Live Viewers */}
            <div className={styles.metaRow}>
              <div className={styles.scarcity}>
                <span className={styles.scarcityIcon}>⚡</span>
                Bugungi qabuldan faqat{' '}
                <strong className={styles.scarcityNum}>7 ta joy</strong>{' '}
                qoldi!
              </div>
              <div className={styles.liveViewers}>
                <span className={styles.viewerDot} />
                Hozir saytda: <strong className={styles.viewerNum}>{viewers} kishi</strong> kuzatmoqda
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <button className={styles.cta} onClick={onRegister}>
              Cheklangan joylardan birini band qilish ➔
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
