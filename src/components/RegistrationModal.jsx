import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './RegistrationModal.module.css'

const courses = [
  { value: 'start-u25', label: 'START — 25 yoshgacha (3 000 000 so\'m)' },
  { value: 'start-o25', label: 'START — 25 yoshdan yuqori (4 000 000 so\'m)' },
  { value: 'pro', label: 'PRO COACHING (5 000 000 so\'m)' },
  { value: 'online', label: 'ONLINE ELITE (2 500 000 so\'m)' },
]

const regions = ['Xorazm', 'Toshkent', 'Buxoro', 'Samarqand', 'Qashqadaryo', 'Surxondaryo', 'Namangan', 'Andijon', 'Farg\'ona', 'Jizzax', 'Sirdaryo', 'Navoiy', "Qoraqalpog'iston", 'Boshqa viloyat']

const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, '')
  if (digits.length === 0) return '+998'
  
  let rest = ''
  if (digits.startsWith('998')) {
    rest = digits.substring(3)
  } else {
    rest = digits
  }
  
  rest = rest.substring(0, 9)
  
  let formatted = '+998'
  if (rest.length > 0) {
    formatted += ` (${rest.substring(0, 2)}`
  }
  if (rest.length > 2) {
    formatted += `) ${rest.substring(2, 5)}`
  }
  if (rest.length > 5) {
    formatted += `-${rest.substring(5, 7)}`
  }
  if (rest.length > 7) {
    formatted += `-${rest.substring(7, 9)}`
  }
  return formatted
}

const formatAge = (value) => {
  const digits = value.replace(/\D/g, '')
  return digits.substring(0, 2)
}

export default function RegistrationModal({ isOpen, onClose, selectedCourse, setSelectedCourse }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '+998',
    age: '',
    region: 'Xorazm',
    course: selectedCourse === 'start' ? 'start-u25' : selectedCourse === 'pro' ? 'pro' : 'online',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setForm(f => ({ ...f, phone: formatPhoneNumber(value) }))
    } else if (name === 'age') {
      setForm(f => ({ ...f, age: formatAge(value) }))
    } else {
      setForm(f => ({ ...f, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const botToken = import.meta.env.VITE_BOT_TOKEN
    const channelId = import.meta.env.VITE_CHANNEL_ID

    const text = `
🔔 <b>YANGI ARIZA QABUL QILINDI!</b>

👤 <b>Ism:</b> ${form.name}
📞 <b>Telefon:</b> ${form.phone}
🎂 <b>Yosh:</b> ${form.age} yosh
📍 <b>Viloyat:</b> ${form.region}
📚 <b>Kurs:</b> ${courses.find(c => c.value === form.course)?.label || form.course}
    `.trim()

    try {
      if (botToken && channelId) {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: channelId,
            text: text,
            parse_mode: 'HTML'
          })
        })
      }
    } catch (error) {
      console.error('Telegram bot submit error:', error)
    }

    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => setSubmitted(false), 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close */}
            <button className={styles.close} onClick={handleClose}>✕</button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className={styles.header}>
                    <span className={styles.badge}>XORAZM FX Qabul Tizimi</span>
                    <h3 className={styles.title}>Qabulga ro'yxatdan o'tish</h3>
                    <p className={styles.subtitle}>
                      Ma'lumotlaringizni to'ldiring va kafolatlangan imkoniyatni qo'lga kiriting.
                    </p>
                  </div>

                  {/* Gift reminder */}
                  <div className={styles.giftBar}>
                    <span>🎁</span>
                    <span>START kursida <strong>$5,000 Prop kapital</strong> sovg'a!</span>
                  </div>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                      <label className={styles.label}>To'liq ismingiz</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Masalan: Anvar Rahimov"
                        required
                        className={styles.input}
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label className={styles.label}>Telefon raqam</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+998 (97) 560-06-00"
                          required
                          className={styles.input}
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>Yoshingiz</label>
                        <input
                          type="text"
                          inputMode="numeric"
                          name="age"
                          placeholder="Masalan: 22"
                          required
                          className={styles.input}
                          value={form.age}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label className={styles.label}>Viloyatingiz</label>
                        <select
                          name="region"
                          required
                          className={styles.select}
                          value={form.region}
                          onChange={handleChange}
                        >
                          {regions.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>Tanlangan kurs</label>
                        <select
                          name="course"
                          required
                          className={`${styles.select} ${styles.selectRed}`}
                          value={form.course}
                          onChange={handleChange}
                        >
                          {courses.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                        </select>
                      </div>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <span>Ariza yuborish</span>
                      <span>➔</span>
                    </button>

                    <p className={styles.fine}>
                      24 soat ichida mas'ul mentorlarimiz siz bilan bog'lanishadi.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  className={styles.success}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className={styles.successIcon}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  >
                    ✓
                  </motion.div>
                  <h4 className={styles.successTitle}>Arizangiz qabul qilindi!</h4>
                  <p className={styles.successDesc}>
                    Joyingiz aksiya narxida muvaffaqiyatli band qilindi.
                    24 soat ichida mas'ul mentorlarimiz siz bilan bog'lanishadi.
                  </p>
                  <div className={styles.successContacts}>
                    <a href="https://t.me/thexorazmforex" target="_blank" rel="noopener noreferrer" className={styles.successLink}>
                      ✈ Telegram kanalimizga kiring
                    </a>
                  </div>
                  <button className="btn-primary" style={{ width: '100%' }} onClick={handleClose}>
                    Yopish
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
