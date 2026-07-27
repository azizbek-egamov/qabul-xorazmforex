import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './WhyUsSection.module.css'

const TargetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="16" />
    <line x1="15" y1="22" x2="15" y2="16" />
    <line x1="9" y1="16" x2="15" y2="16" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M12 6h.01M12 10h.01" />
  </svg>
)

const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const SupportIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const items = [
  { iconType: 'num', num: '20+', title: '20+ yillik tajriba', desc: '2005-yildan buyon moliya bozorlarida faoliyat yuritib kelayotgan professionallar jamoasi.' },
  { iconType: 'num', num: '2K+', title: "2000+ o'quvchi", desc: "Akademiyamizda trading asoslarini mukammal o'zlashtirgan muvaffaqiyatli bitiruvchilar." },
  { iconType: 'num', num: '500+', title: '500+ Aktiv treyderlar', desc: "Akademiyamizda olingan bilimlar orqali bozorda barqaror savdo qilayotgan talabalarimiz." },
  { iconType: 'target', num: '', title: 'Professional mentorlar', desc: "Har bir talabaga shaxsan yo'l ko'rsatadigan tajribali mutaxassislar guruhi." },
  { iconType: 'building', num: '', title: 'Zamonaviy offline ofis', desc: "Urganch shahrining markazida joylashgan barcha sharoitlarga ega trading akademiyasi." },
  { iconType: 'chart', num: '', title: 'Real amaliyot', desc: "Quruq nazariyasiz, jonli grafiklar va real bozor sharoitida savdo qilish tizimi." },
  { iconType: 'users', num: '', title: "Kuchli Community", desc: "Hamfikr treyderlar bilan tajriba almashish uchun yopiq va faol guruh." },
  { iconType: 'support', num: '', title: 'Doimiy Support', desc: "Darslardan tashqari vaqtlarda ham savollaringizga tezkor javob berish xizmati." },
]

const renderIcon = (type, num) => {
  switch (type) {
    case 'num':
      return <span className={styles.iconNum}>{num}</span>
    case 'target':
      return <TargetIcon />
    case 'building':
      return <BuildingIcon />
    case 'chart':
      return <ChartIcon />
    case 'users':
      return <UsersIcon />
    case 'support':
      return <SupportIcon />
    default:
      return null
  }
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

export default function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why-us" className="section-wrap">
      <div className={styles.header}>
        <span className="section-label">Nega aynan biz?</span>
        <h2 className="section-title">Sizga eng kerakli ustunliklar</h2>
        <p className={styles.subtitle}>Bozorda shunchaki nazariya emas, aniq natija beradigan tizim bilan ishlang.</p>
      </div>

      <motion.div
        ref={ref}
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {items.map((item) => (
          <motion.div key={item.title} className={styles.card} variants={itemVariants}>
            <div className={styles.iconWrap}>
              {renderIcon(item.iconType, item.num)}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
            <div className={styles.cardLine} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
