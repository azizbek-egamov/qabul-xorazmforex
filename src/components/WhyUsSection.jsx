import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './WhyUsSection.module.css'

const items = [
  { icon: '🏆', num: '20+', title: '20+ yillik tajriba', desc: '2005-yildan buyon moliya bozorlarida faoliyat yuritib kelayotgan professionallar jamoasi.' },
  { icon: '👥', num: '1K+', title: "1000+ o'quvchi", desc: "Akademiyamizda trading asoslarini mukammal o'zlashtirgan muvaffaqiyatli bitiruvchilar." },
  { icon: '💼', num: '500+', title: '500+ Funded Trader', desc: "Xalqaro investorlar mablag'larini real boshqaruvga olgan talabalarimiz." },
  { icon: '🎯', num: '', title: 'Professional mentorlar', desc: "Har bir talabaga shaxsan yo'l ko'rsatadigan tajribali mutaxassislar guruhi." },
  { icon: '🏢', num: '', title: 'Zamonaviy offline ofis', desc: "Urganch shahrining markazida joylashgan barcha sharoitlarga ega trading akademiyasi." },
  { icon: '📈', num: '', title: 'Real amaliyot', desc: "Quruq nazariyasiz, jonli grafiklar va real bozor sharoitida savdo qilish tizimi." },
  { icon: '🤝', num: '', title: "Kuchli Community", desc: "Hamfikr treyderlar bilan tajriba almashish uchun yopiq va faol guruh." },
  { icon: '⚡', num: '', title: 'Doimiy Support', desc: "Darslardan tashqari vaqtlarda ham savollaringizga tezkor javob berish xizmati." },
]

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
      <hr className="section-divider" style={{ marginBottom: 0, marginLeft: -28, marginRight: -28, maxWidth: 'none' }} />
      <div style={{ paddingTop: 100 }}>
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
                {item.num ? (
                  <span className={styles.iconNum}>{item.num}</span>
                ) : (
                  <span className={styles.iconEmoji}>{item.icon}</span>
                )}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <div className={styles.cardLine} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
