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
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
                          required
                          className={styles.input}
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>Yoshingiz</label>
                        <input
                          type="number"
                          name="age"
                          placeholder="Yoshingiz"
                          min="15"
                          max="70"
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
