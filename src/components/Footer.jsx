import styles from './Footer.module.css'

const navLinks = [
  { href: '#promotion', label: 'Aksiya' },
  { href: '#why-us', label: 'Nega biz?' },
  { href: '#courses', label: 'Kurslar' },
  { href: '#results', label: 'Natijalar' },
  { href: '#workflow', label: 'Tizim' },
  { href: '#faq', label: 'Savollar' },
]

const socials = [
  { label: 'Telegram', href: 'https://t.me/thexorazmforex', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/></svg> },
  { label: 'Instagram', href: 'https://instagram.com/xorazmfx', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
  { label: 'YouTube', href: 'https://youtube.com/@vaisovs', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
]

export default function Footer({ onRegister }) {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.brandName}>
              XORAZM<span className={styles.fx}>FX</span>
            </div>
            <div className={styles.brandTag}>Est. 2005 • Urganch, O'zbekiston</div>
            <p className={styles.brandDesc}>
              O'zbekistondagi yetakchi professional Forex Trading Akademiyasi.
              2005-yildan buyon 2000+ mutaxassis tarbiyalab kelmoqdamiz.
            </p>
          </div>

          {/* Nav links */}
          <div className={styles.navCol}>
            <div className={styles.colTitle}>Navigatsiya</div>
            <nav className={styles.nav}>
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className={styles.navLink} onClick={(e) => scrollTo(e, l.href)}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.navCol}>
            <div className={styles.colTitle}>Aloqa</div>
            <div className={styles.contacts}>
              <a href="tel:+998975600600" className={styles.contactLink}>+998 97 560 06 00</a>
              <a href="tel:+998912695959" className={styles.contactLink}>+998 91 269 59 59</a>
              <a href="https://maps.app.goo.gl/UDQ3odzWeb4YrXN58" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                📍 Google Maps →
              </a>
            </div>
            <div className={styles.socials}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title={s.label}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className={styles.ctaStrip}>
          <div className={styles.ctaText}>
            <span className={styles.ctaLabel}>Hoziroq boshlang!</span>
            <span className={styles.ctaPrice}>3 000 000 so'm • $5,000 Prop kapital sovg'a</span>
          </div>
          <button className="btn-primary" onClick={onRegister}>
            Joyni band qilish ➔
          </button>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <span>© 2005–2026 XORAZM FX. Barcha huquqlar himoya qilingan.</span>
          <span className={styles.bottomRight}>Moliyaviy Ta'lim Markazi</span>
        </div>
      </div>
    </footer>
  )
}
