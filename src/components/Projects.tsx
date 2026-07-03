'use client'

import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Github, ExternalLink, X, Eye } from 'lucide-react'
import { lockScroll, unlockScroll } from '@/lib/scroll-lock'

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  liveLink: string
  githubLink: string
  mainTech: string
  challenges: string
  improvements: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AssetVerse',
    description: 'A full-featured asset management platform built with the MERN stack, designed for companies to manage assets, handle requests and approvals, and control access through role-based dashboards.',
    image: 'https://i.ibb.co.com/0VQkJdzd/Banner.png',
    category: 'Enterprise Asset Management',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Authentication', 'JWT', 'Stripe', 'Tailwind CSS'],
    liveLink: 'https://asset-verse-mobin.pages.dev',
    githubLink: 'https://github.com/mobinmiah/asset-verse-client',
    mainTech: 'MERN Stack with Firebase Authentication, JWT Authorization, Role-Based Access Control, and Subscription Payment System with Stripe',
    challenges: 'Designing a secure role-based system for Admin, HR and Employees, building asset request and approval workflows, managing company assets efficiently, and integrating Stripe for subscription-based payments.',
    improvements: 'Planned features include real-time asset notifications, advanced reporting and analytics dashboard, performance optimization, and future mobile application support.',
  },
  {
    id: 2,
    title: 'TravelEase',
    description: 'A full-featured vehicle booking and trip management platform built with the MERN stack, offering secure authentication, dynamic booking workflows, and a smooth user experience.',
    image: 'https://i.ibb.co.com/q3h7zJ5Z/travel-2-recent-light.png',
    category: 'Travel & Vehicle Booking',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Authentication', 'JWT', 'Stripe', 'Tailwind CSS'],
    liveLink: 'https://travelease-e5v.pages.dev',
    githubLink: 'https://github.com/mobinmiah/travel-ease-client',
    mainTech: 'MERN Stack with Firebase Authentication, JWT Authorization, Secure Booking System, and Payment Integration',
    challenges: 'Designing a complete vehicle booking flow, implementing secure user authentication, handling real-time availability, and building a responsive UI with advanced search and filtering features.',
    improvements: 'Planned enhancements include real-time trip updates, live chat support, performance optimization, improved booking analytics, and progressive web app (PWA) features.',
  },
  {
    id: 3,
    title: 'ZapShift',
    description: 'A modern parcel and delivery management platform built with the MERN stack, featuring secure authentication, role-based dashboards, order tracking, and payment processing.',
    image: 'https://i.ibb.co.com/39T3x08b/zap1.png',
    category: 'Parcel & Delivery Management',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Authentication', 'JWT', 'Stripe'],
    liveLink: 'https://zap-shift-9fw.pages.dev',
    githubLink: 'https://github.com/mobinmiah/zap-shift-client',
    mainTech: 'MERN Stack with Firebase Authentication, Role-Based Access Control, and Stripe Integration',
    challenges: 'Implementing secure authentication with Firebase and JWT, building role-based dashboards for Admin, Rider, and Customer, and managing parcel data efficiently using MongoDB.',
    improvements: 'Planned features include real-time parcel tracking updates, notification system, performance optimization, advanced analytics dashboard, and future mobile application version.',
  },
  {
    id: 4,
    title: 'Influencer Gear',
    description: 'A modern e-commerce landing page for influencer products, featuring responsive layouts, product showcases, and a clean user interface optimized for desktop and mobile devices.',
    image: 'https://i.ibb.co.com/zHbQcnss/header.png',
    category: 'E-Commerce',
    technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Google Fonts'],
    liveLink: 'https://mobinmiah.github.io/influencer-practice/',
    githubLink: 'https://github.com/mobinmiah/influencer-gear',
    mainTech: 'HTML5, CSS3, Responsive Web Design, and Modern UI Layout Techniques',
    challenges: 'Creating a fully responsive layout, maintaining consistent spacing and typography, and designing visually appealing product showcase sections.',
    improvements: 'Future improvements include adding product filtering, shopping cart functionality, animations, and backend integration for a complete e-commerce experience.',
  },
  {
    id: 5,
    title: 'Flower Shop',
    description: 'A responsive flower shop landing page with elegant product sections, promotional banners, and a modern design focused on providing an engaging shopping experience.',
    image: 'https://i.ibb.co.com/B53QkSGH/header.png',
    category: 'E-Commerce',
    technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Google Fonts'],
    liveLink: 'https://mobinmiah.github.io/flower-shop/',
    githubLink: 'https://github.com/mobinmiah/flower-shop',
    mainTech: 'HTML5, CSS3, Responsive Web Design, and Modern Landing Page Development',
    challenges: 'Designing an attractive and responsive UI while maintaining visual consistency across different screen sizes.',
    improvements: 'Planned features include product search, shopping cart, online ordering, customer reviews, and backend integration.',
  },
  {
    id: 6,
    title: 'Payoo Mobile Bank',
    description: 'A mobile banking simulation application that allows users to perform essential banking operations such as adding money, cash out, transferring funds, and viewing transaction history.',
    image: 'https://i.ibb.co.com/hRD5mvHw/home-add-money.png',
    category: 'FinTech Application',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
    liveLink: 'https://mobinmiah.github.io/payoo-mobile-bank/',
    githubLink: 'https://github.com/mobinmiah/payoo-mobile-bank',
    mainTech: 'JavaScript, DOM Manipulation, Event Handling, and Client-Side Banking Simulation',
    challenges: 'Managing application state, validating user inputs, implementing transaction workflows, and updating the interface dynamically.',
    improvements: 'Future enhancements include user authentication, persistent data storage, transaction analytics, and backend API integration.',
  },
  {
    id: 7,
    title: 'English Janala',
    description: 'An interactive English vocabulary learning platform that helps users explore words, meanings, pronunciations, and language concepts through a clean and responsive interface.',
    image: 'https://i.ibb.co.com/Q3N57SDb/header.png',
    category: 'Educational Platform',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST API'],
    liveLink: 'https://mobinmiah.github.io/english-janala/',
    githubLink: 'https://github.com/mobinmiah/english-janala',
    mainTech: 'JavaScript, REST API Integration, DOM Manipulation, and Responsive Design',
    challenges: 'Fetching and displaying API data dynamically, handling asynchronous requests, and creating a smooth learning experience.',
    improvements: 'Planned features include quizzes, user progress tracking, bookmarking favorite words, and pronunciation audio support.',
  },
  {
    id: 8,
    title: 'Green Earth',
    description: 'An environmental awareness platform focused on promoting sustainability, eco-friendly practices, and community engagement through a modern responsive web interface.',
    image: 'https://i.ibb.co.com/C3Q4M3mN/header.png',
    category: 'Environmental Awareness',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Cloudflare Workers'],
    liveLink: 'https://greenearth.mdmobinmiah1998.workers.dev/',
    githubLink: 'https://github.com/mobinmiah/green-earth',
    mainTech: 'React, Tailwind CSS, Cloudflare Workers, and Responsive Web Development',
    challenges: 'Building a responsive interface, organizing environmental content effectively, and optimizing deployment using Cloudflare Workers.',
    improvements: 'Future plans include user authentication, volunteer registration, event management, donation integration, and environmental impact tracking.',
  },
  {
    id: 9,
    title: 'Ticket System',
    description: 'A customer support ticket management platform that enables users to create, manage, and monitor support tickets through an organized and user-friendly interface.',
    image: 'https://i.ibb.co.com/rfsC57cP/header.png',
    category: 'Customer Support System',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Cloudflare Workers'],
    liveLink: 'https://cs-ticket-system.mdmobinmiah1998.workers.dev/',
    githubLink: 'https://github.com/mobinmiah/cs-ticket-system',
    mainTech: 'React, Tailwind CSS, Client-Side State Management, and Cloudflare Workers Deployment',
    challenges: 'Designing an organized ticket workflow, managing ticket status updates, and creating an intuitive user interface.',
    improvements: 'Future improvements include authentication, role-based dashboards, email notifications, ticket assignment, and analytics reporting.',
  },
  {
    id: 10,
    title: 'Toy Topia',
    description: 'A responsive toy marketplace where users can explore toy collections, browse categories, and enjoy an engaging shopping experience with a modern user interface.',
    image: 'https://i.ibb.co.com/ztLytvY/header.png',
    category: 'Toy Marketplace',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Authentication', 'Tailwind CSS'],
    liveLink: 'https://toy-topia-by-mobin.netlify.app/',
    githubLink: 'https://github.com/mobinmiah/toy-topia',
    mainTech: 'MERN Stack with Firebase Authentication and Responsive Marketplace Design',
    challenges: 'Implementing authentication, managing toy listings, building responsive layouts, and handling CRUD operations efficiently.',
    improvements: 'Planned enhancements include advanced search, product reviews, wishlist functionality, payment integration, and real-time inventory updates.',
  },
]

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    lockScroll()
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      unlockScroll()
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return createPortal(
    <>
      <div className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div
        className="fixed inset-0 z-[9999] modal-scroll p-3 sm:p-6 py-4 sm:py-8"
        style={{ maxHeight: '100dvh' }}
        data-lenis-prevent
        onClick={onClose}
      >
        <div
          className="flex min-h-full items-start sm:items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            className="bg-surface-light dark:bg-surface-dark rounded-2xl max-w-4xl w-full shadow-2xl max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] flex flex-col overflow-hidden"
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="relative flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className="w-full h-40 sm:h-52 md:h-64 object-cover" />
              <button
                className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto modal-scroll flex-1 min-h-0">
              <div className="mb-5">
                <h2 id="project-modal-title" className="text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-display font-bold mb-2 break-words">
                  {project.title}
                </h2>
                <Badge className="mb-3 max-w-full whitespace-normal text-left">{project.category}</Badge>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl font-bold mb-3">Technology Stack</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark mb-4 text-sm leading-relaxed break-words">
                    {project.mainTech}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-gray-800 dark:text-gray-200 text-xs">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="sm" className="whitespace-normal">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 shrink-0" />Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="whitespace-normal text-gray-800 dark:text-gray-200">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 shrink-0 " />GitHub
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl font-bold mb-2">Challenges Faced</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-sm break-words">
                      {project.challenges}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-gray-200 sm:text-lg md:text-xl font-bold mb-2">Future Improvements</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-sm break-words">
                      {project.improvements}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>,
    document.body
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showAll, setShowAll] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const displayed = showAll ? projects : projects.slice(0, 4)

  return (
    <section
      ref={sectionRef}
      className="flex-grow flex flex-col px-4 md:px-12 py-12 relative overflow-hidden pt-24"
      id="projects"
    >
      <div className="absolute top-0 left-1/4 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-blue-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display font-bold tracking-[0.2em] text-sm uppercase mb-2 block">My Projects</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            My <span className="text-primary">Development Work</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto leading-relaxed">
            Real-world applications built with React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Stripe payments, and modern development tools showcasing full-stack expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {displayed.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-card hover:shadow-neon transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={project.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <Badge className="absolute top-4 right-4 max-w-[calc(100%-2rem)] bg-surface-dark/90 backdrop-blur-sm text-primary border border-gray-700 truncate" variant="outline">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow gap-4">
                  <div className="flex-shrink-0">
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm line-clamp-3">{project.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 dark:bg-slate-700/50 text-text-muted-light dark:text-text-muted-dark">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex-grow" />
                  <div className="flex-shrink-0 flex flex-wrap justify-between items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Button variant="ghost" size="sm" className="font-medium text-sm hover:text-primary transition-colors whitespace-normal" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1 shrink-0" /> Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="font-semibold text-sm hover:text-primary transition-colors whitespace-normal" onClick={() => setSelectedProject(project)}>
                      <Eye className="w-4 h-4 mr-2 shrink-0" />View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-display font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? (<>Show Less <i className="ri-arrow-up-line text-base" /></>) : (<>See All Projects <i className="ri-arrow-down-line text-base" /></>)}
          </motion.button>
        </motion.div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
