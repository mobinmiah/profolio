'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Skills from './Skills'
import Process from './Process'
import Contact from './Contact'
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger)

export default function ClientRoot() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    ;(window as Window & { __lenis?: Lenis }).__lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.lagSmoothing(0)

    const savedTheme = localStorage.getItem('theme')
    if (
      savedTheme === 'light' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)
    ) {
      setDarkMode(false)
    }

    return () => {
      lenis.destroy()
      ;(window as Window & { __lenis?: Lenis }).__lenis = undefined
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-body transition-colors duration-300 min-h-screen flex flex-col bg-pattern-dots overflow-x-clip">
      <Header darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
