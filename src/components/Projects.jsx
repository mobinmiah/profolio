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
      title: "Asset Management System",
      description: "A comprehensive asset management platform with role-based access control (HR/Employee roles), asset request & approval workflow, and company-based asset management with subscription system.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJjWV5KxSLIe7UfPXrEiiJRA-2Rt1RqZkTnfNGL_wku1onpx0DLCIFFC9jTksawVz30bXEG0ZJou7UOa-n9ueA2M_oG50El2ETRzjAZiXFeE0paxaquKfJc2k0cgdU_7zLDdO_SoEEvZvv6JlfVQ2K9IycH-lYpKONpO0ihBo0rDmhaCafDVdZSEK-vNqp_f6qEPg_anUslOS5unZSL3VGccj13zP58JZ2anzeSZxN-alPxXi4N2LLojGFGSh_0YPbF7_C57yOufM",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Firebase Auth", "JWT"],
      liveLink: "https://asset-management-demo.netlify.app",
      githubLink: "https://github.com/mobinmiah/asset-management-client",
      mainTech: "MERN Stack with Firebase Authentication, JWT, Stripe Payment Integration",
      challenges: "Implementing complex role-based access control system with HR and Employee roles, managing asset approval workflows, and integrating secure payment processing for subscription management.",
      improvements: "Planning to add real-time notifications for asset requests, advanced reporting dashboard, mobile app version, and integration with inventory management systems."
    },
    {
      id: 2,
      title: "Employee Management Portal",
      description: "A modern employee management system with authentication, role-based dashboards, asset tracking, and payment processing for company subscriptions using MERN stack.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIk5rn22nmQiy_a0r93TDL1HQQbtSUUApL-V-7anArlUsFPwfuutP1HKSaeSnVLWke3ygd_Uchde0aefj2rSd5mU6G89KLzL25lzBaQeqVUcGX6v2LXk_Y3uSoNRIhENhRLvfEBC_GLLmbWpHtfl735F8xbXMm6BSaRhf3-ACL7aJ5FZt_yd75kPOvzhe4d-nu7mvYDWafDFVFlZBoca4Ujetj0VkqNP5sYfMaRapit_9RNBjM4r_uhbiaMPWltvqCEv_pqhXUj0Q",
      category: "Web Application",
      technologies: ["React", "Tailwind CSS", "DaisyUI", "Express.js", "MongoDB"],
      liveLink: "https://employee-portal-demo.netlify.app",
      githubLink: "https://github.com/mobinmiah/employee-portal-client",
      mainTech: "React.js, Node.js, Express.js, MongoDB Atlas, Firebase Authentication",
      challenges: "Building secure authentication system with Firebase and JWT cookies, implementing TanStack React Query for efficient data fetching and caching, and creating responsive UI with Tailwind CSS and DaisyUI components.",
      improvements: "Adding advanced analytics dashboard, implementing real-time chat system, integrating with third-party HR tools, and developing progressive web app (PWA) capabilities."
    },
    {
      id: 3,
      title: "Personal Blog Platform",
      description: "A modern blogging platform with rich text editor, comment system, and social sharing features built for content creators.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwwHGrVwSd0VzXXQgEv63Qb-nCVFhrtP01vw2PCY2hyM1duWHUWtpoffZjb03segpO7YaynAYJVqpfA3L9znt0lczibFh8YCP3xaoo8wvFJkSFb6omLyayMztzwNSR14dt1DV2yq2wUuvrF6vFiarUmabeKsRNFnz-oZhXOzjfgg-inrjdrqZbjO1nzLXAAriwooJXR0GI6kYw9vttk9OxHA9rSfaXSNKXJoM0L8OJ-O-4eb7yM7zxtgOyac3ObznZI1cbolqlLLM",
      category: "Content Platform",
      technologies: ["React", "Express", "MongoDB", "JWT"],
      liveLink: "https://blogplatform-demo.netlify.app",
      githubLink: "https://github.com/mobinmiah/blog-client",
      mainTech: "MERN Stack with JWT Authentication and Rich Text Editor",
      challenges: "Creating a robust rich text editor with image upload functionality and implementing SEO-friendly URL structures for blog posts.",
      improvements: "Planning to add multi-language support, advanced SEO optimization, and integration with social media platforms for automatic post sharing."
    }
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
      className="flex-grow flex flex-col px-4 md:px-12 py-12 relative overflow-hidden"
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