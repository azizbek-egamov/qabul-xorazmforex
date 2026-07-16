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
  const [active, setActive] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    if (!isInView) return
    const t = setInterval(() => {
      setActive(a => (a + 1) % results.length)
    }, 4500)
    return () => clearInterval(t)
  }, [isInView])

  return (
    <section id="results" className="section-wrap">
      <hr className="section-divider" style={{ marginBottom: 0, marginLeft: -28, marginRight: -28, maxWidth: 'none' }} />
      <div style={{ paddingTop: 100 }}>
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

        {/* Desktop grid */}
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

        {/* Mobile carousel */}
        <div className={styles.carousel}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(calc(-${active * 100}% - ${active * 16}px))` }}>
            {results.map((r, i) => (
              <div key={i} className={styles.carouselCard}>
                <div className={styles.cardHead}>
                  <span className={styles.status}>{r.status}</span>
                  <span className={`${styles.badge} ${r.badgeGreen ? styles.badgeGreen : styles.badgeRed}`}>
                    {r.badge}
                  </span>
                </div>
                <div className={styles.amount} style={r.green ? { color: '#34d399' } : {}}>{r.amount}</div>
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
              </div>
            ))}
          </div>
          <div className={styles.dots}>
            {results.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <motion.div
          className={styles.videoSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className={styles.videoTitle}>Talabalarimizning video sharhlari</h3>
          <div className={styles.videoGrid}>
            {[
              {
                title: "Kamronbek S. — $10,000 prop hisobni qanday oldi?",
                duration: "4:12",
                thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60",
                link: "https://youtube.com/@vaisovs",
              },
              {
                title: "Jasurbek O. — $50,000 kapitalni boshqarish sirlari",
                duration: "6:45",
                thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&auto=format&fit=crop&q=60",
                link: "https://youtube.com/@vaisovs",
              },
              {
                title: "Madinabonu R. — Birinchi dollar daromadi va taassurotlar",
                duration: "5:20",
                thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&auto=format&fit=crop&q=60",
                link: "https://youtube.com/@vaisovs",
              },
            ].map((v, i) => (
              <a
                key={i}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.videoCard}
              >
                <div className={styles.videoThumbWrap}>
                  <img src={v.thumbnail} alt={v.title} className={styles.videoThumb} />
                  <div className={styles.playBtn}>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor">
                      <path d="M17.3 9.4L1.7.2C1.1-.1.4 0 .2.6c-.1.2-.2.4-.2.6v17.6c0 .7.6 1.3 1.3 1.3.2 0 .4-.1.6-.2l15.6-9.2c.6-.3.8-1.1.5-1.7-.2-.2-.4-.4-.7-.5z"/>
                    </svg>
                  </div>
                  <span className={styles.duration}>{v.duration}</span>
                </div>
                <h4 className={styles.videoCardTitle}>{v.title}</h4>
                <span className={styles.videoLabel}>Videoni ko'rish ➔</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
