import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import TickerBar from './components/TickerBar'
import HeroSection from './components/HeroSection'
import StatsBar from './components/StatsBar'
import PromoBanner from './components/PromoBanner'
import WhyUsSection from './components/WhyUsSection'
import CoursesSection from './components/CoursesSection'
import ResultsSection from './components/ResultsSection'
import WorkflowSection from './components/WorkflowSection'
import LeadMagnet from './components/LeadMagnet'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import RegistrationModal from './components/RegistrationModal'
import FloatingCTA from './components/FloatingCTA'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('start')

  const openModal = (course = 'start') => {
    setSelectedCourse(course)
    setModalOpen(true)
  }

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  return (
    <>
      {/* Fixed background elements */}
      <div className="grid-bg" />
      <div className="ambient-glow" />

      {/* Navigation */}
      <Navbar onRegister={() => openModal('start')} />

      {/* Forex ticker */}
      <TickerBar />

      {/* Main content */}
      <main>
        <HeroSection onRegister={openModal} />
        <StatsBar />
        <PromoBanner onRegister={() => openModal('start')} />
        <WhyUsSection />
        <CoursesSection onRegister={openModal} />
        <ResultsSection />
        <WorkflowSection />
        <LeadMagnet />
        <FAQSection />
        <ContactSection onRegister={() => openModal('start')} />
      </main>

      <Footer onRegister={() => openModal('start')} />

      {/* Floating CTA (mobile) */}
      <FloatingCTA onRegister={() => openModal('start')} />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
      />
    </>
  )
}

export default App
