import { motion } from 'framer-motion'
import styles from './HeroSection.module.css'

const GiftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <defs>
      <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#E10600" />
      </linearGradient>
    </defs>
    <polyline points="20 12 20 22 4 22 4 12" stroke="url(#redGrad)" />
    <rect x="2" y="7" width="20" height="5" rx="1" stroke="url(#redGrad)" fill="rgba(225, 6, 0, 0.15)" />
    <line x1="12" y1="22" x2="12" y2="7" stroke="url(#redGrad)" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" stroke="url(#redGrad)" fill="rgba(225, 6, 0, 0.12)" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" stroke="url(#redGrad)" fill="rgba(225, 6, 0, 0.12)" />
  </svg>
)

const DollarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <defs>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
    </defs>
    <rect x="2" y="6" width="20" height="12" rx="2" stroke="url(#greenGrad)" fill="rgba(52, 211, 153, 0.15)" />
    <circle cx="12" cy="12" r="3" stroke="url(#greenGrad)" />
    <path d="M6 12h.01M18 12h.01" stroke="url(#greenGrad)" strokeWidth="3" />
  </svg>
)

const LaptopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <defs>
      <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#A9A9A9" />
      </linearGradient>
    </defs>
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="url(#silverGrad)" fill="rgba(255, 255, 255, 0.05)" />
    <line x1="2" y1="20" x2="22" y2="20" stroke="url(#silverGrad)" />
    <line x1="12" y1="17" x2="12" y2="20" stroke="url(#silverGrad)" />
  </svg>
)

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <defs>
      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#E10600" />
      </linearGradient>
    </defs>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="url(#chartGrad)" />
    <polyline points="17 6 23 6 23 12" stroke="url(#chartGrad)" fill="rgba(225, 6, 0, 0.15)" />
  </svg>
)

const FireIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
)

const FerrariShowcaseCard = () => (
  <motion.div
    className={styles.ferrariCard}
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className={styles.ferrariImageWrap}>
      <img src="/ferrari_hero.png" alt="XORAZM FX Luxury Trading" className={styles.ferrariImg} />
      <div className={styles.ferrariOverlay} />
      
      {/* Badge Top Right */}
      <div className={styles.badgeTopRight}>
        <span className={styles.badgeFire}>
          <FireIcon />
          <span>100% AMALIY TA'LIM</span>
        </span>
      </div>

      {/* Floating Badges */}
      <div className={styles.floatingStats}>
        <div className={styles.statBox}>
          <GiftIcon />
          <div>
            <div className={styles.statBoxTitle}>$5,000 PROP</div>
            <div className={styles.statBoxSub}>Sovg'a Prop Balans</div>
          </div>
        </div>

        <div className={styles.statBoxGreen}>
          <DollarIcon />
          <div>
            <div className={styles.statBoxTitle}>$25 REAL</div>
            <div className={styles.statBoxSub}>Sovg'a Real Balans</div>
          </div>
        </div>
      </div>

      <div className={styles.ferrariFooter}>
        <div className={styles.ferrariFooterLeft}>
          <span className={styles.pulseDot} />
          <span>Shu hisoblarda real amaliyot olasiz</span>
        </div>
        <span className={styles.ferrariFooterBrand}>XORAZM FX</span>
      </div>
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
            Treydingni 0 dan o'rganing va <span className={styles.titleAccent}>$5,000 Prop + $25 Real</span> balansga ega bo'ling!
          </motion.h1>

          <motion.p
            className={styles.desc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Moliya bozorlarini 0 dan mukammal o'rganing (Onlayn & Offlayn).
            Sovg'a qilingan $5,000 Prop hamda $25 Real hisoblarda to'liq amaliyot o'ting!
          </motion.p>

          <motion.div
            className={styles.bullets}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.bulletHighlightRed}>
              <div className={styles.bulletIconRed}>
                <GiftIcon />
              </div>
              <div className={styles.bulletText}>
                <strong>$5,000 PROP BALANS</strong>
                <span className={styles.bulletSub}>Sovg'a boshqaruv kapitali</span>
              </div>
            </div>

            <div className={styles.bulletHighlightGreen}>
              <div className={styles.bulletIconGreen}>
                <DollarIcon />
              </div>
              <div className={styles.bulletText}>
                <strong>$25 REAL BALANS</strong>
                <span className={styles.bulletSub}>Sovg'a real savdo balansi</span>
              </div>
            </div>

            <div className={styles.bulletItem}>
              <div className={styles.bulletIconSilver}>
                <LaptopIcon />
              </div>
              <div className={styles.bulletText}>
                <strong>Onlayn & Offlayn</strong>
                <span className={styles.bulletSub}>Sizga mos o'quv formati</span>
              </div>
            </div>

            <div className={styles.bulletItem}>
              <div className={styles.bulletIconSilver}>
                <ChartIcon />
              </div>
              <div className={styles.bulletText}>
                <strong>Jonli Amaliyot</strong>
                <span className={styles.bulletSub}>Shu hisoblarda savdo qilasiz</span>
              </div>
            </div>
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
            >
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
              <span className={styles.trustNum}>2000+</span>
              <span className={styles.trustLabel}>Mamnun o'quvchilar</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>500+</span>
              <span className={styles.trustLabel}>Aktiv treyderlar</span>
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
          <FerrariShowcaseCard />
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
