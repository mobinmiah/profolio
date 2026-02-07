import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, X, Eye } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AssetVerse",
      description:
        "A full-featured asset management platform built with the MERN stack, designed for companies to manage assets, handle requests and approvals, and control access through role-based dashboards.",
      image: "https://i.ibb.co.com/hx6jH12B/asset1.png",
      category: "Enterprise Asset Management",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Authentication",
        "JWT",
        "Stripe",
        "Tailwind CSS",
      ],
      liveLink: "https://asset-verse-mobin.pages.dev",
      githubLink: "https://github.com/mobinmiah/asset-verse-client",
      mainTech:
        "MERN Stack with Firebase Authentication, JWT Authorization, Role-Based Access Control, and Subscription Payment System with Stripe",
      challenges:
        "Designing a secure role-based system for Admin, HR and Employees, building asset request and approval workflows, managing company assets efficiently, and integrating Stripe for subscription-based payments.",
      improvements:
        "Planned features include real-time asset notifications, advanced reporting and analytics dashboard, performance optimization, and future mobile application support.",
    },

    {
      id: 2,
      title: "TravelEase",
      description:
        "A full-featured vehicle booking and trip management platform built with the MERN stack, offering secure authentication, dynamic booking workflows, and a smooth user experience.",
      image: "https://i.ibb.co.com/q3h7zJ5Z/travel-2-recent-light.png",
      category: "Travel & Vehicle Booking",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Authentication",
        "JWT",
        "Stripe",
        "Tailwind CSS",
      ],
      liveLink: "https://travel-ease-vehicles.netlify.app",
      githubLink: "https://github.com/mobinmiah/travel-ease-client",
      mainTech:
        "MERN Stack with Firebase Authentication, JWT Authorization, Secure Booking System, and Payment Integration",
      challenges:
        "Designing a complete vehicle booking flow, implementing secure user authentication, handling real-time availability, and building a responsive UI with advanced search and filtering features.",
      improvements:
        "Planned enhancements include real-time trip updates, live chat support, performance optimization, improved booking analytics, and progressive web app (PWA) features.",
    },

    {
      id: 3,
      title: "ZapShift",
      description:
        "A modern parcel and delivery management platform built with the MERN stack, featuring secure authentication, role-based dashboards, order tracking, and payment processing.",
      image: "https://i.ibb.co.com/39T3x08b/zap1.png",
      category: "Parcel & Delivery Management",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Authentication",
        "JWT",
        "Stripe",
      ],
      liveLink: "https://zap-shift-transportation.netlify.app",
      githubLink: "https://github.com/mobinmiah/zap-shift-client",
      mainTech:
        "MERN Stack with Firebase Authentication, Role-Based Access Control, and Stripe Integration",
      challenges:
        "Implementing secure authentication with Firebase and JWT, building role-based dashboards for Admin, Rider, and Customer, and managing parcel data efficiently using MongoDB.",
      improvements:
        "Planned features include real-time parcel tracking updates, notification system, performance optimization, advanced analytics dashboard, and future mobile application version.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-surface-light dark:bg-surface-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-display font-bold mb-2">{project.title}</h2>
            <Badge className="mb-4">{project.category}</Badge>
            <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-4">
                {project.mainTech}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Challenges Faced</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  {project.challenges}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Future Improvements</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  {project.improvements}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      className="flex-grow flex flex-col px-4 md:px-12 py-12 relative overflow-hidden pt-24"
      id="projects"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-blue-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display font-bold tracking-[0.2em] text-sm uppercase mb-2 block">
            My Projects
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            My <span className="text-primary">Development Work</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto leading-relaxed">
            Real-world applications built with React.js, Node.js, Express.js,
            MongoDB, Firebase Authentication, Stripe payments, and modern
            development tools showcasing full-stack expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-card hover:shadow-neon transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <Badge
                    className="absolute top-4 right-4 bg-surface-dark/90 backdrop-blur-sm text-primary border border-gray-700"
                    variant="outline"
                  >
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-gray-100 dark:bg-slate-700/50 text-text-muted-light dark:text-text-muted-dark"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sm font-medium hover:text-primary transition-colors"
                      asChild
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1" /> Code
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary font-semibold text-sm hover:gap-3 transition-all"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;