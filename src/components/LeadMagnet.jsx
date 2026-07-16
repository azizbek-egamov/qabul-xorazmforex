import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './LeadMagnet.module.css'

export default function LeadMagnet() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="section-wrap" style={{ paddingBottom: 60 }}>
      <hr className="section-divider" style={{ marginBottom: 0, marginLeft: -28, marginRight: -28, maxWidth: 'none' }} />
      <div style={{ paddingTop: 100 }}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative gradients */}
          <div className={styles.glow} />
          <div className={styles.gridOverlay} />

          <div className={styles.left}>
            <span className={styles.badge}>Bepul material 📥</span>
            <h3 className={styles.title}>
              Treydingni boshlashdan oldin yo'l qo'yiladigan <span className={styles.highlight}>5 ta halokatli xato</span>
            </h3>
            <p className={styles.desc}>
              Ko'plab yangi boshlovchilar birinchi haftadanoq butun depozitlarini yo'qotishlariga sabab bo'luvchi asosiy xatolarni o'rganing va ulardan saqlaning. Biz ushbu bepul qo'llanmani Telegram kanalimizda tayyorlab qo'ydik.
            </p>
          </div>

          <div className={styles.right}>
            <a
              href="https://t.me/thexorazmforex"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadBtn}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>Bepul qo'llanmani yuklab olish</span>
            </a>
            <span className={styles.subtext}>*Yuklab olish Telegram kanalimizda amalga oshiriladi</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
