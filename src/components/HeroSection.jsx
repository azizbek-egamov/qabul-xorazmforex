import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './HeroSection.module.css'

const CandlestickChart = () => {
  const candles = [
    { h: 65, body: 35, up: false, pos: 20 },
    { h: 80, body: 50, up: true, pos: 55 },
    { h: 55, body: 30, up: false, pos: 35 },
    { h: 95, body: 60, up: true, pos: 70 },
    { h: 72, body: 45, up: true, pos: 50 },
    { h: 110, body: 75, up: true, pos: 85 },
    { h: 60, body: 38, up: false, pos: 45 },
    { h: 130, body: 90, up: true, pos: 105 },
    { h: 85, body: 55, up: false, pos: 62 },
    { h: 145, body: 100, up: true, pos: 118 },
  ]
  return (
    <div className={styles.chartBg}>
      <svg viewBox="0 0 400 200" preserveAspectRatio="none" className={styles.chartSvg}>
        {/* Grid lines */}
        {[0, 50, 100, 150, 200].map(y => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {/* Candles */}
        {candles.map((c, i) => (
          <g key={i} transform={`translate(${i * 42 + 5}, 0)`}>
            {/* Wick */}
            <line
              x1="10" y1={200 - c.h - 20}
              x2="10" y2={200 - 15}
              stroke={c.up ? '#34d399' : '#E10600'}
              strokeWidth="1.5"
              opacity="0.6"
            />
            {/* Body */}
            <rect
              x="4"
              y={200 - c.pos - c.body / 2}
              width="12"
              height={c.body}
              fill={c.up ? 'rgba(52,211,153,0.35)' : 'rgba(225,6,0,0.35)'}
              stroke={c.up ? '#34d399' : '#E10600'}
              strokeWidth="1"
              rx="2"
            />
          </g>
        ))}
        {/* Trend line */}
        <polyline
          points="10,185 52,175 94,160 136,145 178,130 220,110 262,95 304,75 346,55 388,35"
          fill="none"
          stroke="rgba(52,211,153,0.4)"
          strokeWidth="2"
          strokeDasharray="6,3"
        />
      </svg>
    </div>
  )
}

const TradingCard = () => (
  <motion.div
    className={styles.tradingCard}
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className={styles.cardHeader}>
      <div className={styles.cardDot} />
      <span className={styles.cardTitle}>Live Trading Room</span>
      <span className={styles.cardBadge}>EST. 2005</span>
    </div>

    <CandlestickChart />

    <div className={styles.statsRow}>
      <div className={styles.stat}>
        <span className={styles.statLabel}>EURUSD, 1H</span>
        <span className={styles.statVal}>1.08742</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.statLabel}>Foyda</span>
        <span className={styles.statVal} style={{ color: '#34d399' }}>+$4,230</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.statLabel}>Daraja</span>
        <span className={styles.statVal} style={{ color: 'var(--brand-red)' }}>FUNDED</span>
      </div>
    </div>

    <div className={styles.cardItems}>
      {[
        { label: 'Prop Trading Kapital', val: '$5,000', green: true },
        { label: 'Kurs formati', val: 'Offline + Online' },
        { label: 'Mentor nazorati', val: 'Shaxsiy' },
        { label: 'Sertifikat', val: 'Premium ✓', green: true },
      ].map(({ label, val, green }) => (
        <div key={label} className={styles.cardItem}>
          <span className={styles.cardItemLabel}>{label}</span>
          <span className={`${styles.cardItemVal} ${green ? styles.green : ''}`}>{val}</span>
        </div>
      ))}
    </div>
  </motion.div>
)

export default function HeroSection({ onRegister }) {
  return (
    <section className={styles.hero}>
      {/* Red glow */}
      <div className={styles.redGlow} />

      <div className={styles.inner}>
        {/* Left content */}
        <div className={styles.left}>
          <motion.div
            className="tag tag-red"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="pulse-dot" style={{ width: 6, height: 6 }} />
            O'zbekistondagi yetakchi Forex akademiya
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Professional Trader bo'ling <br />
            va <span className={styles.titleAccent}>$5,000 real kapitalga</span> <br />
            ega bo'ling!
          </motion.h1>

          <motion.p
            className={styles.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Moliya bozorlarini professional darajada o'rganing. Haqiqiy mentorlar nazoratida to'g'ri amaliyot qiling va o'z shaxsiy pulingizni xavf ostiga qo'ymay, sovg'a qilingan Prop Trading kapitalini boshqaring.
          </motion.p>

          <motion.div
            className={styles.bullets}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              'Urganchda offline darslar',
              'Professional mentorlar',
              'Real jonli amaliyot',
              '$5,000 Prop Trading kapitali',
            ].map(item => (
              <div key={item} className={styles.bullet}>
                <span className={styles.bulletDot}>✦</span>
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.ctaWrapper}>
              <button className="btn-primary" onClick={() => onRegister('start')}>
                Qabulga yozilish ➔
              </button>
              <span className={styles.ctaSubtext}>Aksiya bo'yicha 50% chegirmada joy band qilish</span>
            </div>
            <a
              href="https://t.me/thexorazmforex"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ alignSelf: 'flex-start' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
              </svg>
              Telegram kanal
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className={styles.trust}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>1000+</span>
              <span className={styles.trustLabel}>Muvaffaqiyatli talaba</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>500+</span>
              <span className={styles.trustLabel}>Funded Trader</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>20+</span>
              <span className={styles.trustLabel}>Yillik tajriba</span>
            </div>
          </motion.div>
        </div>

        {/* Right card */}
        <div className={styles.right}>
          <TradingCard />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className={styles.scrollLine} />
        <span>Pastga aylantiring</span>
      </motion.div>
    </section>
  )
}
