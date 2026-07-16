import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './WorkflowSection.module.css'

const steps = [
  {
    num: '01',
    title: "Ro'yxatdan o'tasiz",
    desc: "Saytda ariza qoldirasiz, mutaxassislarimiz sizga mos formatni tasdiqlashadi.",
    color: 'red',
  },
  {
    num: '02',
    title: 'Dars boshlanadi',
    desc: "Eng sodda va tushunarli tilda tuzilgan professional darsliklar boshlanadi.",
    color: 'default',
  },
  {
    num: '03',
    title: 'Real amaliyot',
    desc: "Mentorlar bilan birgalikda jonli bozor holatida bitimlar ochib tajriba yig'asiz.",
    color: 'default',
  },
  {
    num: '04',
    title: 'Challenge topshirasiz',
    desc: "Akademiyada olingan bilimlar yordamida maxsus test sinovlaridan oson o'tasiz.",
    color: 'default',
  },
  {
    num: '05',
    title: 'Funded hisob olasiz',
    desc: "Savdo qilish uchun yirik investorlarning haqiqiy kapital boshqaruvini qo'lga kiritasiz.",
    color: 'default',
  },
  {
    num: '06',
    title: 'Daromad ishlaysiz',
    desc: "Topgan sof foydangizning katta qismini har oy o'z bank kartangizga yechib olasiz.",
    color: 'green',
  },
]

export default function WorkflowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="workflow" className="section-wrap">
      <div className={styles.header}>
        <span className="section-label">Muvaffaqiyat Tizimi</span>
        <h2 className="section-title">O'qish jarayoni qanday ishlaydi?</h2>
        <p className={styles.subtitle}>
          Ro'yxatdan o'tishdan boshlab real dollar daromadiga chiqishgacha bo'lgan yo'l.
        </p>
      </div>

      <div ref={ref} className={styles.steps}>
        {/* Vertical line */}
        <div className={styles.line}>
          <motion.div
            className={styles.lineProgress}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
          />
        </div>

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className={styles.step}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`${styles.num} ${step.color === 'red' ? styles.numRed : step.color === 'green' ? styles.numGreen : ''}`}>
              {step.num}
            </div>
            <div className={styles.content}>
              <h3 className={`${styles.title} ${step.color === 'green' ? styles.titleGreen : ''}`}>
                {step.title}
              </h3>
              <p className={styles.desc}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
