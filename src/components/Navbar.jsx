import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/logo.png'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#promotion', label: 'Aksiya' },
  { href: '#why-us', label: 'Nega biz?' },
  { href: '#courses', label: 'Kurslar' },
  { href: '#results', label: 'Natijalar' },
  { href: '#workflow', label: 'Tizim' },
  { href: '#faq', label: 'Savollar' },
]

export default function Navbar({ onRegister }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#" className={styles.logo}>
            <img src={logoImg} alt="XORAZM FX" className={styles.logoImg} />
            <div className={styles.logoText}>
              <span className={styles.logoName}>XORAZM<span className={styles.logoFx}>FX</span></span>
              <span className={styles.logoEst}>EST. 2005</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className={styles.right}>
            <a href="tel:+998975600600" className={styles.phoneLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.43h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              97 560 06 00
            </a>
            <button className={styles.ctaBtn} onClick={onRegister}>
              Joyni band qilish
            </button>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`${styles.ham} ${menuOpen ? styles.hamOpen : ''}`} />
              <span className={`${styles.ham} ${menuOpen ? styles.hamOpen : ''}`} />
              <span className={`${styles.ham} ${menuOpen ? styles.hamOpen : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              className={`btn-primary ${styles.mobileCta}`}
              onClick={() => { setMenuOpen(false); onRegister() }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Joyni band qilish ➔
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
