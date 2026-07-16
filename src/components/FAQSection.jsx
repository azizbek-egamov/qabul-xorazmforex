import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './FAQSection.module.css'

const faqs = [
  {
    q: 'Forex bilmasam bo\'ladimi?',
    a: 'Albatta bo\'ladi. Bizning barcha ta\'lim dasturlarimiz bozorga endi kirib kelgan yangi boshlovchilar uchun noldan boshlab, eng sodda tilda tushuntirib beriladi.',
  },
  {
    q: 'Necha yoshdan qabul qilasiz?',
    a: 'Bizning akademiyamizga asosan 16 yoshdan oshgan, moliya va trading sohasida mustaqil professional daromadga chiqishni maqsad qilgan shaxslar qabul qilinadi.',
  },
  {
    q: '$5000 prop trading kapitali qanday olinadi?',
    a: 'START aksiyali kursimizni muvaffaqiyatli tamomlagan har bir bitiruvchiga real bozorlarda savdo qilib tajriba oshirishi uchun $5,000 lik maxsus sinov kapitali sovg\'a tariqasida taqdim etiladi.',
  },
  {
    q: '25 yoshgacha chegirma qanday ishlaydi?',
    a: '25 yoshgacha bo\'lganlar START kursini 3 000 000 so\'mga olishadi. 25 yoshdan kattalar uchun narx 4 000 000 so\'m. Ikkala holda ham $5,000 prop kapital sovg\'a beriladi.',
  },
  {
    q: 'Offline va Online formatning farqi nima?',
    a: 'Offline kurslarimiz Urganch shahridagi markazimizda bevosita mentorlar nazoratida olib boriladi. Online kurs esa uydan chiqmagan holda internet orqali xuddi shu tizimda masofadan o\'rganish imkonini beradi.',
  },
  {
    q: 'To\'lovni bo\'lib to\'lash mumkinmi?',
    a: 'Ha, talabalarimizga qo\'shimcha qulaylik yaratish maqsadida o\'zaro kelishilgan holda shartnoma asosida bo\'lib to\'lash imkoniyatlari ko\'rib chiqiladi.',
  },
  {
    q: 'Sertifikat beriladimi?',
    a: 'Ha, akademiyamiz bitiruvchilariga o\'quv dasturini muvaffaqiyatli yakunlaganliklarini tasdiqlovchi rasmiy professional premium sertifikat topshiriladi.',
  },
  {
    q: 'Kurs qancha davom etadi?',
    a: "Yo'nalish va formatga qarab kurslarimiz o'rtacha 1 oydan 3 oygacha davom etadi. Asosiy maqsad muddat emas, talabaning mustaqil natijaga chiqishidir.",
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" className="section-wrap">
      <div className={styles.header}>
        <span className="section-label">Savollaringiz bormi?</span>
        <h2 className="section-title">Ko'p beriladigan savollar</h2>
      </div>

      <div ref={ref} className={styles.list}>
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className={styles.question}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{faq.q}</span>
              <motion.span
                className={styles.arrow}
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.25 }}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  className={styles.answer}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
