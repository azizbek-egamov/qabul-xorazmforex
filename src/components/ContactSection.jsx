import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './ContactSection.module.css'

const socialLinks = [
  { label: 'Telegram', icon: '✈', href: 'https://t.me/thexorazmforex', color: '#2CA5E0' },
  { label: 'Instagram', icon: '📷', href: 'https://instagram.com/xorazmfx', color: '#E1306C' },
  { label: 'YouTube', icon: '▶', href: 'https://youtube.com/@vaisovs', color: '#FF0000' },
]

export default function ContactSection({ onRegister }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="section-wrap">
      <div className={styles.grid}>
        {/* Left: Contact info */}
        <motion.div
          className={styles.infoCard}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="section-label">Bizning manzil</span>
            <h3 className={styles.cardTitle}>Kelib ofisimiz bilan tanishing</h3>
            <p className={styles.cardDesc}>
              Urganch shahridagi eng zamonaviy sharoitlarga ega professional trading
              akademiyasiga tashrif buyuring.
            </p>
          </div>

          <div className={styles.contacts}>
            <div className={styles.contactRow}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                <div className={styles.contactLabel}>Manzil</div>
                <div className={styles.contactVal}>Urganch sh., Al-Xorazmiy ko'chasi, Asosiy Markaz</div>
              </div>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <div className={styles.contactLabel}>Telefon</div>
                <a href="tel:+998975600600" className={styles.contactLink}>+998 97 560 06 00</a>
                <a href="tel:+998912695959" className={styles.contactLink}>+998 91 269 59 59</a>
              </div>
            </div>
          </div>

          <div className={styles.socials}>
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                style={{ '--accent': s.color }}
              >
                <span>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>

          <button className="btn-primary" style={{ width: '100%' }} onClick={onRegister}>
            Hoziroq ro'yxatdan o'tish ➔
          </button>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          className={styles.mapWrap}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.mapOverlay}>
            <a
              href="https://maps.app.goo.gl/UDQ3odzWeb4YrXN58"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBtn}
            >
              📍 Google Maps da ko'rish ➔
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3402773289066!2d60.6358241!3d41.5498747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc91f3161d24d%3A0x8e2c995863977411!2sXORAZM+FOREX+-+TREYDING+AKADEMIYASI!5e0!3m2!1suz!2suz!4v1710000000000!5m2!1suz!2suz"
            className={styles.iframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="XORAZM FX Manzil"
          />
        </motion.div>
      </div>
    </section>
  )
}
