'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { lockScroll, unlockScroll } from '@/lib/scroll-lock'

interface HeaderProps {
  darkMode: boolean
  toggleTheme: () => void
}

export default function Header({ darkMode, toggleTheme }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (isMobileMenuOpen) {
      lockScroll()
      return () => unlockScroll()
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'skills', 'process', 'contact']
      const scrollPosition = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Skills', 'Process', 'Contact']

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="sticky top-0 w-full py-4 sm:py-5 px-4 sm:px-6 lg:px-12 flex justify-between items-center gap-3 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20"
      >
        <motion.a
          href="#home"
          className="flex min-w-0 flex-shrink-0 items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-neon">
            M
          </div>
          <span className="font-display font-bold text-lg sm:text-xl tracking-wide uppercase">Mobin</span>
        </motion.a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.toLowerCase()
            return (
              <motion.a
                key={item}
                className={`${isActive ? 'text-primary font-bold relative' : 'hover:text-primary'} transition-all duration-300 cursor-pointer`}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {item}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            )
          })}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="p-2 rounded-full bg-surface-light dark:bg-surface-dark shadow-sm hover:text-primary transition-colors"
            onClick={toggleTheme}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <i className={darkMode ? 'ri-sun-line' : 'ri-moon-line'} />
            </motion.div>
          </Button>

          <div className="hidden md:flex gap-3">
            {[
              { icon: 'ri-github-fill', href: 'https://github.com/mobinmiah' },
              { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/in/mobin-miah' },
              { icon: 'ri-twitter-x-line', href: 'https://x.com/MobinMiah12' },
            ].map((social, index) => (
              <motion.a
                key={social.icon}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark shadow-sm hover:text-primary hover:-translate-y-1 transition-all"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <i className={social.icon} />
              </motion.a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden p-2 text-2xl relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <i className={isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-4-line'} />
            </motion.div>
          </Button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[min(20rem,100vw)] bg-background-light dark:bg-background-dark z-40 lg:hidden shadow-2xl overflow-y-auto modal-scroll"
              data-lenis-prevent
            >
              <div className="flex min-h-full flex-col pt-24 px-5 sm:px-6">
                <nav className="flex flex-col space-y-6 mb-8">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.toLowerCase()
                    return (
                      <motion.a
                        key={item}
                        className={`${isActive ? 'text-primary font-bold border-l-4 border-primary pl-4' : 'text-text-main-light dark:text-text-main-dark hover:text-primary pl-4'} transition-all duration-300 cursor-pointer text-lg font-medium py-2 border-b border-gray-200/20 dark:border-gray-700/20 relative`}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item}
                        {isActive && (
                          <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.a>
                    )
                  })}
                </nav>
                <div className="mt-auto pb-8">
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4 uppercase tracking-wider font-bold">
                    Connect with me
                  </p>
                  <div className="flex gap-4">
                    {[
                      { icon: 'ri-github-fill', href: 'https://github.com/mobinmiah', label: 'GitHub' },
                      { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/in/mobin-miah', label: 'LinkedIn' },
                      { icon: 'ri-twitter-x-line', href: 'https://x.com/MobinMiah12', label: 'Twitter' },
                    ].map((social, index) => (
                      <motion.a
                        key={social.icon}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm hover:text-primary hover:bg-primary/10 transition-all"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.label}
                      >
                        <i className={`${social.icon} text-xl`} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
