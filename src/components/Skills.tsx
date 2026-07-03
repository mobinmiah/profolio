'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { Card, CardContent } from './ui/card'

interface Skill { name: string; icon: string; color?: string; type?: string }
interface Tool  { name: string; type: string; icon: string; color?: string; iconType?: string }

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.skills-blob-1', { x: 20, y: -30, duration: 5, repeat: -1, yoyo: true, ease: 'power2.inOut' })
      gsap.to('.skills-blob-2', { x: -30, y: 20, duration: 4, repeat: -1, yoyo: true, ease: 'power2.inOut' })
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

  const frontendSkills: Skill[] = [
    { name: 'JavaScript (ES6+)', icon: 'ri-javascript-fill', color: 'text-yellow-500', type: 'remix' },
    { name: 'React.js', icon: 'ri-reactjs-line', color: 'text-blue-500', type: 'remix' },
    { name: 'HTML5 / CSS3', icon: 'ri-html5-fill', color: 'text-orange-500', type: 'remix' },
    { name: 'Tailwind CSS', icon: 'https://i.ibb.co.com/jkHCwtzW/tailwind.png', color: 'text-teal-500', type: 'image' },
  ]
  const backendSkills: Skill[] = [
    { name: 'Node.js', icon: 'https://i.ibb.co.com/9H4xW9w8/node.png', color: 'text-green-500', type: 'image' },
    { name: 'Express.js', icon: 'ri-server-line', color: 'text-gray-600', type: 'remix' },
    { name: 'JWT Authentication', icon: 'ri-key-2-fill', color: 'text-purple-500', type: 'remix' },
    { name: 'REST APIs', icon: 'ri-code-s-slash-line', color: 'text-indigo-500', type: 'remix' },
  ]
  const databaseSkills: Skill[] = [
    { name: 'MongoDB Atlas', icon: 'ri-database-fill', color: 'text-green-600' },
    { name: 'Firebase', icon: 'ri-fire-line', color: 'text-orange-500' },
  ]
  const authSkills: Skill[] = [
    { name: 'JWT Authentication', icon: 'ri-key-2-fill', color: 'text-purple-500' },
    { name: 'Firebase Auth', icon: 'ri-shield-check-line', color: 'text-orange-500' },
    { name: 'Role-based Access', icon: 'ri-admin-line', color: 'text-blue-500' },
  ]
  const frontendTools: Tool[] = [
    { name: 'Vite', type: 'Build Tool', icon: 'ri-flashlight-line', color: 'text-yellow-500' },
    { name: 'React Router', type: 'Routing', icon: 'ri-route-line', color: 'text-blue-500' },
    { name: 'Axios', type: 'HTTP Client', icon: 'ri-global-line', color: 'text-green-500' },
    { name: 'TanStack Query', type: 'Data Fetching', icon: 'ri-database-2-line', color: 'text-red-500' },
    { name: 'DaisyUI', type: 'UI Components', icon: 'ri-palette-line', color: 'text-purple-500' },
    { name: 'Formspree', type: 'Form Handling', icon: 'ri-mail-send-line', color: 'text-purple-600' },
    { name: 'Firebase Auth', type: 'Authentication', icon: 'ri-shield-check-line', color: 'text-orange-500' },
  ]
  const backendTools: Tool[] = [
    { name: 'MongoDB Atlas', type: 'Database', icon: 'ri-database-fill', color: 'text-green-600' },
    { name: 'Stripe', type: 'Payments', icon: 'ri-bank-card-line', color: 'text-blue-600' },
    { name: 'Firebase Admin', type: 'Server Auth', icon: 'ri-admin-line', color: 'text-orange-600' },
    { name: 'JWT Cookies', type: 'Security', icon: 'ri-cookie-line', color: 'text-yellow-600' },
    { name: 'CORS', type: 'Security', icon: 'ri-shield-line', color: 'text-red-600' },
    { name: 'dotenv', type: 'Config', icon: 'ri-settings-3-line', color: 'text-gray-600' },
  ]
  const deploymentTools: Tool[] = [
    { name: 'Git & GitHub', type: 'Version Control', icon: 'ri-git-branch-line', color: 'text-orange-600' },
    { name: 'Hostinger', type: 'Production Hosting', icon: 'ri-global-line', color: 'text-purple-600' },
    { name: 'Netlify', type: 'Frontend Deploy', icon: 'ri-cloud-line', color: 'text-teal-500' },
    { name: 'Vercel', type: 'Backend Deploy', icon: 'ri-rocket-line', color: 'text-black dark:text-white' },
    { name: 'VS Code', type: 'IDE', icon: 'ri-code-box-line', color: 'text-blue-600' },
  ]
  const aiTools: Tool[] = [
    { name: 'ChatGPT', type: 'AI Research & Problem Solving', icon: 'ri-chat-3-line', color: 'text-green-600' },
    { name: 'Kiro', type: 'Agentic AI IDE', icon: 'ri-robot-line', color: 'text-purple-600' },
    { name: 'Cursor', type: 'AI Code Editor', icon: 'https://www.cursor.com/favicon.ico', iconType: 'image' },
    { name: 'AI-Assisted Coding', type: 'Development Enhancement', icon: 'ri-magic-line', color: 'text-pink-600' },
  ]

  return (
    <section ref={sectionRef} className="flex-grow flex flex-col justify-start px-4 md:px-12 py-12 relative overflow-hidden pt-24" id="skills">
      <div className="skills-blob-1 absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="skills-blob-2 absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <motion.div className="max-w-7xl mx-auto w-full" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <span className="text-primary font-display font-bold tracking-[0.2em] text-sm uppercase mb-2 block">My Skills</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            My <span className="text-primary">Technology Arsenal</span> for modern web development.
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed max-w-2xl mx-auto">
            My skills in modern web development technologies including React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Stripe payments, and responsive UI frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Frontend Skills */}
          <motion.div variants={itemVariants}>
            <Card className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card border border-transparent hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <i className="ri-code-s-slash-line text-2xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold break-words">Frontend Skills</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {frontendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-4 rounded-xl bg-background-light dark:bg-background-dark/50 hover:bg-primary/10 transition-all duration-300 group cursor-default"
                      whileHover={{ scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill.type === 'image'
                        // eslint-disable-next-line @next/next/no-img-element
                        ? <img src={skill.icon} alt={skill.name} className="w-8 h-8 group-hover:scale-110 transition-transform" />
                        : <i className={`${skill.icon} text-2xl ${skill.color} group-hover:scale-110 transition-transform`} />}
                      <span className="font-medium text-sm break-words">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Backend Skills */}
          <motion.div variants={itemVariants}>
            <Card className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card border border-transparent hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                    <i className="ri-server-line text-2xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold break-words">Backend Skills</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {backendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-4 rounded-xl bg-background-light dark:bg-background-dark/50 hover:bg-primary/10 transition-all duration-300 group cursor-default"
                      whileHover={{ scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {skill.type === 'image'
                        // eslint-disable-next-line @next/next/no-img-element
                        ? <img src={skill.icon} alt={skill.name} className="w-8 h-8 group-hover:scale-110 transition-transform" />
                        : <i className={`${skill.icon} text-2xl ${skill.color} group-hover:scale-110 transition-transform`} />}
                      <span className="font-medium text-sm break-words">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Database & Cloud */}
          <motion.div variants={itemVariants}>
            <Card className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card border border-transparent hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-5 sm:p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <i className="ri-database-2-line text-2xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold break-words">Database & Cloud</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {databaseSkills.map((skill, index) => (
                    <motion.div key={skill.name} className="flex items-center gap-3 p-4 rounded-xl bg-background-light dark:bg-background-dark/50 hover:bg-primary/10 transition-all duration-300 group cursor-default" whileHover={{ scale: 1.02, y: -2 }} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: index * 0.1 + 0.4 }}>
                      <i className={`${skill.icon} text-2xl ${skill.color} group-hover:scale-110 transition-transform`} />
                      <span className="font-medium text-sm break-words">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Auth & Security */}
          <motion.div variants={itemVariants}>
            <Card className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card border border-transparent hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-5 sm:p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <i className="ri-shield-check-line text-2xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold break-words">Authentication & Security</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {authSkills.map((skill, index) => (
                    <motion.div key={skill.name} className="flex items-center gap-3 p-4 rounded-xl bg-background-light dark:bg-background-dark/50 hover:bg-primary/10 transition-all duration-300 group cursor-default" whileHover={{ scale: 1.02, y: -2 }} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: index * 0.1 + 0.6 }}>
                      <i className={`${skill.icon} text-2xl ${skill.color} group-hover:scale-110 transition-transform`} />
                      <span className="font-medium text-sm break-words">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tools Card */}
        <motion.div variants={itemVariants}>
          <Card className="bg-surface-light dark:bg-surface-dark border-transparent hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5 sm:p-8">
              <div className="text-center mb-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    <i className="ri-tools-line text-2xl" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-xl sm:text-3xl">Development Tools & Frameworks</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">Complete toolkit for modern web development</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: 'Frontend Tools', icon: 'ri-reactjs-line text-blue-500', tools: frontendTools, delay: 0.3 },
                  { label: 'Backend Tools', icon: 'ri-server-line text-green-500', tools: backendTools, delay: 0.5 },
                  { label: 'Dev & Deploy', icon: 'ri-cloud-line text-teal-500', tools: deploymentTools, delay: 0.7 },
                  { label: 'AI Tools', icon: 'ri-sparkling-line text-purple-500', tools: aiTools, delay: 0.9 },
                ].map(({ label, icon, tools, delay }) => (
                  <div key={label}>
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <i className={icon} />{label}
                    </h4>
                    <div className="space-y-3">
                      {tools.map((tool, index) => (
                        <motion.div
                          key={tool.name}
                          className="flex items-center gap-3 p-3 rounded-lg bg-background-light dark:bg-background-dark/50 hover:bg-primary/10 transition-colors group cursor-default"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: delay + index * 0.1 }}
                        >
                          {tool.iconType === 'image'
                            // eslint-disable-next-line @next/next/no-img-element
                            ? <img src={tool.icon} alt={tool.name} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            : <i className={`${tool.icon} text-lg ${tool.color} group-hover:scale-110 transition-transform`} />}
                          <div>
                            <h5 className="font-semibold text-sm">{tool.name}</h5>
                            <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{tool.type}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
