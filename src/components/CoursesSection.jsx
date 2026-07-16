import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './CoursesSection.module.css'

const courses = [
  {
    id: 'online',
    label: 'ONLINE ELITE',
    sub: "Istalgan joydan masofaviy ta'lim",
    price: '2 500 000',
    currency: "so'm",
    oldPrice: null,
    hot: false,
    features: [
      { text: 'Jonli onlayn darslar va yozuvlar', hi: false },
      { text: "Yopiq guruhga a'zolik", hi: false },
      { text: 'Mentorlik yordami', hi: false },
      { text: 'Sertifikat', hi: false },
    ],
    ctaText: "Masofaviy o'qishni boshlash ➔",
  },
  {
    id: 'start',
    label: 'START KURSI',
    sub: "Oflayn ta'lim + Katta bonus",
    price: '3 000 000',
    currency: "so'm",
    oldPrice: '6 000 000',
    ageNote: "25 yoshdan yuqori: 4 000 000 so'm",
    hot: true,
    hotLabel: "ENG KO'P TANLANGAN 🔥",
    features: [
      { text: "$5,000 Prop Trading kapitali sovg'a!", hi: true },
      { text: 'Urganchdagi zamonaviy ofisda darslar', hi: false },
      { text: 'Mentorlar bilan yuzma-yuz amaliyot', hi: false },
      { text: 'Tayyor amaliy savdo strategiyalari', hi: false },
      { text: 'Sertifikat + Amaliyot natijalar', hi: false },
    ],
    ctaText: 'Kafolatlangan $5000 lik hisobni band qilish ➔',
  },
  {
    id: 'pro',
    label: 'PRO COACHING',
    sub: "Shaxsiy individual yondashuv",
    price: '5 000 000',
    currency: "so'm",
    oldPrice: null,
    hot: false,
    features: [
      { text: "Mentor bilan 1-ga-1 ishlash tizimi", hi: false },
      { text: "Maxsus yuqori darajali darslik", hi: false },
      { text: "Cheksiz muddatli qo'llab-quvvatlash", hi: false },
      { text: 'Sertifikat', hi: false },
    ],
    ctaText: "Individual o'qishni boshlash ➔",
  },
]

export default function CoursesSection({ onRegister }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="courses" className="section-wrap">
      <div className={styles.header}>
        <span className="section-label">Sizga mos format</span>
        <h2 className="section-title">Ta'lim yo'nalishlari va narxlar</h2>
        <p className={styles.subtitle}>Maqsadingiz va sharoitingizga mos kursni tanlang va tizimga qo'shiling.</p>
      </div>

      <motion.div
        ref={ref}
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            className={`${styles.card} ${course.hot ? styles.hot : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {course.hot && (
              <div className={styles.hotBadge}>{course.hotLabel}</div>
            )}

            <div className={styles.cardTop}>
              <div>
                <h3 className={styles.cardLabel}>{course.label}</h3>
                <p className={`${styles.cardSub} ${course.hot ? styles.cardSubHot : ''}`}>{course.sub}</p>
              </div>
            </div>

            <div className={styles.priceArea}>
              {course.oldPrice && (
                <span className={styles.oldPrice}>{course.oldPrice} so'm</span>
              )}
              <div className={styles.price}>
                <span className={styles.priceNum}>{course.price}</span>
                <span className={styles.priceCur}>{course.currency}</span>
              </div>
              {course.ageNote && (
                <div className={styles.ageNote}>
                  <span>ℹ️</span> {course.ageNote}
                </div>
              )}
            </div>

            <ul className={styles.features}>
              {course.features.map((f) => (
                <li key={f.text} className={`${styles.feature} ${f.hi ? styles.featureHi : ''}`}>
                  <span className={styles.featureCheck}>{f.hi ? '🎁' : '✓'}</span>
                  {f.text}
                </li>
              ))}
            </ul>

            <button
              className={`${styles.cta} ${course.hot ? styles.ctaHot : ''}`}
              onClick={() => onRegister(course.id)}
            >
              {course.ctaText}
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Tariflar Taqqoslovi (Comparison Table) */}
      <motion.div
        className={styles.comparisonSection}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className={styles.compTitle}>Tariflar taqqoslovi</h3>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Imkoniyatlar</th>
                <th>ONLINE ELITE</th>
                <th className={styles.highlightHeader}>START KURSI</th>
                <th>PRO COACHING</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "$5,000 Real Kapital", online: "✗", start: "✓ $5,000", pro: "✓ $10,000+", highlight: true },
                { name: "O'qish shakli", online: "Masofaviy (Online)", start: "Oflayn (Urganch)", pro: "Shaxsiy Oflayn (Urganch)" },
                { name: "Mentor yordami", online: "Haftalik online", start: "Yuzma-yuz darslar", pro: "VIP 1-ga-1 cheksiz" },
                { name: "Jonli amaliyot", online: "✓", start: "✓ (Ofisda)", pro: "✓ (Shaxsiy bitimlar)" },
                { name: "Yopiq guruhga kirish", online: "✓ (1 oy)", start: "✓ (Umrbod)", pro: "✓ (Umrbod VIP)" },
                { name: "Premium Sertifikat", online: "✓", start: "✓", pro: "✓" },
                { name: "Qo'llab-quvvatlash", online: "3 oy", start: "6 oy", pro: "Cheksiz (Umrbod)" },
              ].map((row, idx) => (
                <tr key={idx} className={row.highlight ? styles.highlightRow : ''}>
                  <td className={styles.featureName}>{row.name}</td>
                  <td className={row.online === '✗' ? styles.cross : styles.check}>{row.online}</td>
                  <td className={`${styles.check} ${styles.highlightCol}`}>{row.start}</td>
                  <td className={styles.check}>{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Bottom note */}
      <motion.div
        className={styles.note}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        <span>📞 Qaysi kursni tanlashni bilmaysizmi?</span>
        <a href="tel:+998975600600" className={styles.noteLink}>Maslahatchi bilan bog'laning →</a>
      </motion.div>
    </section>
  )
}
