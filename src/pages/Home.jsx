import { ThemeToggle } from '@/Components/ThemeToggle'
import { BackgroundAnimation } from '@/Components/Background'
import { Navbar } from '@/Components/Navbar'
import { MainSection } from "@/Components/MainSection"
import { AboutSection } from '@/Components/About'
import { Skills } from '@/Components/Skills'
import { Project } from '@/Components/Project'
import { Contact } from '@/Components/Contact'
import { Footer } from '@/Components/Footer'


export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effect */}
        <BackgroundAnimation />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
          <MainSection/>
          <AboutSection/>
          <Skills/>
          <Project/>
          <Contact/>
        </main>

        {/* Footer */}
        <Footer />
    </div>
  )
}


