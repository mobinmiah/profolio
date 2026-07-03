'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'

interface ProcessStep {
  step: string
  title: string
  description: string
  icon: string
  color: string
  bgColor: string
}

const processSteps: ProcessStep[] = [
  { step: '01', title: 'Discovery', description: 'Understanding your requirements, goals, and target audience to create the perfect solution.', icon: 'ri-search-line', color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { step: '02', title: 'Planning', description: 'Designing the architecture, choosing the right technologies, and creating a development roadmap.', icon: 'ri-draft-line', color: 'text-green-500', bgColor: 'bg-green-500/10' },
  { step: '03', title: 'Development', description: 'Building your application with clean, maintainable code following best practices and modern standards.', icon: 'ri-code-s-slash-line', color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
  { step: '04', title: 'Deployment', description: 'Testing, optimizing, and deploying your application to production with ongoing support.', icon: 'ri-rocket-line', color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.process-blob-1', { x: 20, y: -30, duration: 5, repeat: -1, yoyo: true, ease: 'power2.inOut' })
      gsap.to('.process-blob-2', { x: -30, y: 20, duration: 4, repeat: -1, yoyo: true, ease: 'power2.inOut' })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section ref={sectionRef} className="flex-grow flex flex-col justify-start px-4 md:px-12 py-12 relative overflow-hidden pt-24" id="process">
      <div className="process-blob-1 absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="process-blob-2 absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <motion.div className="max-w-7xl mx-auto w-full" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <span className="text-primary font-display font-bold tracking-[0.2em] text-sm uppercase mb-2 block">Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            How I <span className="text-primary">Work</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed max-w-2xl mx-auto">
            My systematic approach to delivering high-quality web applications from initial concept to final deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div key={step.step} className="relative text-center group" variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all">
                  {step.step}
                </div>
                <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center ${step.color} text-2xl mx-auto -mt-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={step.icon} />
                </div>
              </div>
              <h3 className="font-bold text-2xl mb-4">{step.title}</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden xl:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-primary/30 to-transparent pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 sm:p-8 border border-transparent hover:border-primary/20 transition-all">
            <h3 className="text-2xl font-display font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and create something amazing together. I&apos;m committed to delivering high-quality solutions that meet your business goals and exceed your expectations.
            </p>
            <motion.a
              href="mailto:mdmobinmiah1998@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <i className="ri-arrow-right-line" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
