'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.bg-blob-1', { x: 30, y: -20, duration: 4, repeat: -1, yoyo: true, ease: 'power2.inOut' })
      gsap.to('.bg-blob-2', { x: -20, y: 30, duration: 3, repeat: -1, yoyo: true, ease: 'power2.inOut' })
      if (imageRef.current) gsap.set(imageRef.current, { scale: 1 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const socials = [
    { icon: 'ri-github-line', href: 'https://github.com/mobinmiah' },
    { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/in/mobin-miah' },
    { icon: 'ri-twitter-x-line', href: 'https://x.com/MobinMiah12' },
  ]

  const skills = [
    { icon: 'ri-reactjs-line', color: 'text-blue-400', title: 'React.js', type: 'remix' },
    { icon: 'https://i.ibb.co.com/9H4xW9w8/node.png', color: 'text-green-500', title: 'Node.js', type: 'image' },
    { icon: 'ri-database-2-line', color: 'text-green-600', title: 'MongoDB', type: 'remix' },
    { icon: 'ri-javascript-line', color: 'text-yellow-400', title: 'JavaScript', type: 'remix' },
  ]

  return (
    <section
      ref={heroRef}
      className="flex-grow flex flex-col justify-center px-4 md:px-12 py-12 relative overflow-hidden pt-12 pb-16"
      id="home"
    >
      <div className="bg-blob-1 absolute top-0 left-0 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="bg-blob-2 absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          <motion.div className="space-y-2" variants={itemVariants}>
            <motion.p
              className="text-primary font-display font-medium tracking-[0.2em] text-sm uppercase mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Assalamu &apos;Alaikum
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              variants={itemVariants}
            >
              I&apos;m Mobin Miah <br />
              <motion.span className="text-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                MERN Stack Developer
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p className="text-text-muted-light dark:text-text-muted-dark text-base sm:text-lg leading-relaxed max-w-xl" variants={itemVariants}>
            Junior MERN Stack Developer building modern, scalable web applications with React.js, Node.js, Express.js, and MongoDB.
            Experienced in Firebase Authentication, JWT security, Stripe payments, and crafting responsive user interfaces using Tailwind CSS
            and DaisyUI — turning ideas into complete full-stack solutions.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 bg-primary text-surface-dark font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded shadow-neon hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1 duration-300 whitespace-normal"
              asChild
            >
              <motion.a
                href="https://drive.google.com/file/d/137LSiiiEYHQIAXZ0eLPmfFyJ3nQARdl4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                My Resume
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </Button>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-4 border-t border-gray-200/10" variants={itemVariants}>
            <div className="space-y-3">
              <span className="text-xs font-display tracking-widest uppercase text-text-muted-light dark:text-text-muted-dark">Find me on</span>
              <div className="flex gap-3 flex-wrap">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.icon}
                    className="w-12 h-12 flex items-center justify-center rounded bg-surface-light dark:bg-surface-dark shadow-lg shadow-gray-200/50 dark:shadow-none hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                    href={s.href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + i * 0.1 }}
                  >
                    <i className={`${s.icon} text-xl`} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-display tracking-widest uppercase text-text-muted-light dark:text-text-muted-dark">My Best Skill On</span>
              <div className="flex gap-3 flex-wrap">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.icon}
                    className="w-12 h-12 flex items-center justify-center rounded bg-surface-light dark:bg-surface-dark shadow-lg shadow-gray-200/50 dark:shadow-none group hover:bg-primary transition-all cursor-default"
                    title={skill.title}
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + i * 0.1 }}
                  >
                    {skill.type === 'image' ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={skill.icon} alt={skill.title} className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all" />
                    ) : (
                      <i className={`${skill.icon} text-xl ${skill.color} group-hover:text-white transition-colors`} />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0" variants={itemVariants}>
          <motion.div
            ref={imageRef}
            className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] max-h-[420px] sm:max-h-none bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none">
              <span className="text-4xl md:text-5xl font-display font-black uppercase text-outline tracking-widest opacity-30">Developer</span>
            </div>
            <motion.img
              alt="Portrait of Mobin Miah"
              className="absolute inset-0 w-full h-full object-cover object-center z-10 transition-transform duration-500 group-hover:scale-105"
              src="https://i.ibb.co.com/XZ48ChnC/hero.jpg"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[15]" />
            <div className="absolute bottom-6 left-0 right-0 text-center z-20">
              <motion.span
                className="block text-xl md:text-2xl font-display font-bold text-white tracking-widest uppercase drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Mobin Miah
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
