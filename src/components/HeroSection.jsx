import { motion } from 'framer-motion'
import styles from './HeroSection.module.css'

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
        <span className={styles.badgeFire}>🔥 100% AMALIY TA'LIM</span>
      </div>

      {/* Floating Badges */}
      <div className={styles.floatingStats}>
        <div className={styles.statBox}>
          <span className={styles.statBoxIcon}>🎁</span>
          <div>
            <div className={styles.statBoxTitle}>$5,000 PROP</div>
            <div className={styles.statBoxSub}>Sovg'a Prop Balans</div>
          </div>
        </div>

        <div className={styles.statBoxGreen}>
          <span className={styles.statBoxIcon}>💵</span>
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
            Treydingni 0 dan o'rganing, <br />
            <span className={styles.titleAccent}>$5,000 Prop + $25 Real</span> <br />
            balansni sovg'aga oling!
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
              <div className={styles.bulletHead}>
                <span className={styles.bulletEmoji}>🎁</span>
                <strong>$5,000 PROP BALANS</strong>
              </div>
              <span className={styles.bulletSub}>Sovg'a boshqaruv kapitali</span>
            </div>

            <div className={styles.bulletHighlightGreen}>
              <div className={styles.bulletHead}>
                <span className={styles.bulletEmoji}>💵</span>
                <strong>$25 REAL BALANS</strong>
              </div>
              <span className={styles.bulletSub}>Sovg'a real savdo balansi</span>
            </div>

            <div className={styles.bulletItem}>
              <span className={styles.bulletDot}>✦</span>
              <div>
                <strong>Onlayn & Offlayn</strong>
                <div className={styles.bulletSubText}>Sizga mos o'quv formati</div>
              </div>
            </div>

            <div className={styles.bulletItem}>
              <span className={styles.bulletDot}>✦</span>
              <div>
                <strong>Jonli Amaliyot</strong>
                <div className={styles.bulletSubText}>Shu hisoblarda savdo qilasiz</div>
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
