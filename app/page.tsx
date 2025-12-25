import HeroSection from './components/hero-section'
import ServicePillars from './components/service-pillars'
import TerminalWindow from './components/terminal-window'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicePillars />
      <TerminalWindow />
    </div>
  )
}
