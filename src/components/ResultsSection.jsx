import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './ResultsSection.module.css'

const results = [
  {
    status: 'Passed Challenge',
    badge: 'TASDIQLANDI',
    badgeGreen: true,
    amount: '$10,000',
    label: 'Hisob hajmi',
    student: 'Kamronbek S.',
    detail: '1-bosqich muvaffaqiyatli yakunlandi',
    quote: 'Mentorlar ko\'rsatgan risk-menejment qoidasi tufayli testdan hech qanday qiyinchiliksiz o\'tdim.',
    verifyUrl: 'https://proptrading.uz',
  },
  {
    status: 'Funded Trader',
    badge: 'FAOL BOSHQARUV',
    badgeGreen: false,
    amount: '$50,000',
    label: 'Real kapital',
    student: 'Jasurbek O.',
    detail: 'Haqiqiy investor puli bilan ishlayapti',
    quote: 'O\'z pulimni yo\'qotish qo\'rquvisiz, professional sharoitda katta hisobni boshqarish ajoyib his ekan.',
    verifyUrl: 'https://proptrading.uz',
  },
  {
    status: 'Verified Withdrawal',
    badge: 'PUL YECHILDI',
    badgeGreen: true,
    amount: '+$4,230',
    label: 'Sof foyda',
    student: 'Madinabonu R.',
    detail: 'Bank kartasiga o\'tkazildi',
    quote: 'Birinchi marta dollar hisobida real foyda oldim. Akademiya jamoasiga katta rahmat!',
    green: true,
    verifyUrl: 'https://proptrading.uz',
  },
  {
    status: 'Passed Challenge',
    badge: 'TASDIQLANDI',
    badgeGreen: true,
    amount: '$15,000',
    label: 'Challenge o\'tildi',
    student: 'Asilbek T.',
    detail: '2-bosqich Challenge topshirildi',
    quote: 'Akademiyada olgan bilimlarim bilan challenge\'ni ikkinchi urinishda osongina topshirdim.',
    verifyUrl: 'https://proptrading.uz',
  },
  {
    status: 'Verified Withdrawal',
    badge: 'PUL YECHILDI',
    badgeGreen: true,
    amount: '+$1,860',
    label: 'To\'lov olindi',
    student: 'Jahongir M.',
    detail: 'Birinchi payout muvaffaqiyatli',
    quote: 'Akademiya kafolat berdi, shu kafolat bilan ishlaganim uchun bu natijaga erishdim.',
    green: true,
    verifyUrl: 'https://proptrading.uz',
  },
]

export default function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="results" className="section-wrap">
      <div className={styles.topRow}>
        <div>
          <span className="section-label">Kafolatlangan dalillar</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Talabalarimiz erishgan natijalar
          </h2>
        </div>
        <p className={styles.note}>
          Barcha ma'lumotlar proptrading.uz tizimidan olingan real tasdiqlangan ko'rsatkichlardir.
        </p>
      </div>

      {/* Grid container: acts as a 3-column layout on desktop, and a horizontal swipe container on mobile! */}
      <motion.div
        ref={ref}
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {results.map((r, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.cardHead}>
              <span className={styles.status}>{r.status}</span>
              <span className={`${styles.badge} ${r.badgeGreen ? styles.badgeGreen : styles.badgeRed}`}>
                {r.badge}
              </span>
            </div>
            <div className={styles.amount} style={r.green ? { color: '#34d399' } : {}}>
              {r.amount}
            </div>
            <div className={styles.amountLabel}>{r.label}</div>
            
            <div className={styles.studentInfo}>
              <span className={styles.studentName}>{r.student}</span>
              <span className={styles.studentDetail}>{r.detail}</span>
            </div>
            
            <div className={styles.verifyArea}>
              <a href={r.verifyUrl} target="_blank" rel="noopener noreferrer" className={styles.verifyLink}>
                Hisobotni tekshirish (proptrading.uz) ↗
              </a>
            </div>
            
            <blockquote className={styles.quote}>"{r.quote}"</blockquote>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
