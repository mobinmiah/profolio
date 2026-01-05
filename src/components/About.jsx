import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from './ui/card';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".about-blob-1", {
        x: 20,
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".about-blob-2", {
        x: -30,
        y: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="flex-grow flex flex-col justify-start px-4 md:px-12 py-12 relative overflow-hidden"
      id="about"
    >
      {/* Background Blobs */}
      <div className="about-blob-1 absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="about-blob-2 absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div 
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main About Section - Image and Content Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Profile Image */}
          <motion.div className="w-full order-2 lg:order-1" variants={itemVariants}>
            <motion.div
              className="relative w-full max-w-md lg:max-w-lg mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                alt="Mobin Miah Profile"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                src="https://i.ibb.co.com/5hNLYbt9/about.jpg"
              />
              
              {/* Optional subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div className="w-full order-1 lg:order-2 space-y-6" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <span className="text-primary font-display font-bold tracking-[0.2em] text-sm uppercase mb-2 block">
                About Me
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                I build modern <span className="text-primary">MERN stack applications</span> with cutting-edge technology.
              </h1>
            </motion.div>

            <motion.div 
              className="prose dark:prose-invert prose-lg max-w-none text-text-muted-light dark:text-text-muted-dark space-y-4"
              variants={itemVariants}
            >
              <p>
                Hello! I'm Mobin Miah, a dedicated MERN stack developer from Bangladesh. My programming journey began in mid 2025 
                during my university years when I first discovered the power of JavaScript and React.js. What started as 
                curiosity about web development quickly evolved into building full-stack applications with 
                modern technologies like Firebase Authentication and Stripe payment systems.
              </p>
              <p>
                I specialize in creating <span className="text-primary font-medium">complete web solutions</span> using 
                React.js for dynamic frontends, Node.js and Express.js for robust backends, and MongoDB for scalable 
                databases. My skills include implementing secure authentication with Firebase and JWT, integrating 
                payment processing with Stripe, and building responsive UIs with Tailwind CSS and DaisyUI components.
              </p>
              <p>
                My recent projects showcase advanced features like role-based access control (HR/Employee systems), 
                asset management workflows, and subscription-based platforms. When I'm not coding, you'll find me on 
                the badminton court, which helps me maintain focus and brings fresh energy to tackle complex development challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;