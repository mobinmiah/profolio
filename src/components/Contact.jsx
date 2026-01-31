import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using your Formspree Form ID: mlgdaqrk
      const response = await fetch('https://formspree.io/f/mlgdaqrk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      className="flex-grow flex flex-col justify-start px-4 md:px-12 py-12 relative overflow-hidden pt-36"
      id="contact"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto w-full text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-display font-bold tracking-[0.2em] text-sm uppercase mb-2 block">
          Get In Touch
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
          Let's Build Something Amazing Together
        </h1>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-3 gap-8 items-start"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Profile Card */}
        <motion.div variants={itemVariants}>
          <Card className="w-full bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card hover:shadow-neon transition-shadow duration-300 border-0">
            <CardContent className="p-6 md:p-8">
              <motion.div
                className="w-full aspect-square rounded-xl overflow-hidden mb-6 relative group"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  alt="Mobin Miah"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://i.ibb.co.com/hFK6jy7s/contact.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-display font-bold tracking-wider">
                    AVAILABLE FOR HIRE
                  </span>
                </div>
              </motion.div>

              <h2 className="text-2xl font-display font-bold mb-1">
                Mobin Miah
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-6">
                MERN Stack Developer
              </p>


              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+8801878014535",
                    href: "tel:+8801878014535",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "mdmobinmiah1998@gmail.com",
                    href: "mailto:mdmobinmiah1998@gmail.com",
                  },
                  {
                    icon: MessageSquare,
                    label: "WhatsApp",
                    value: "+8801878014535",
                    href: "https://wa.me/8801878014535",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="text-xs uppercase font-bold text-text-muted-light dark:text-text-muted-dark tracking-widest block mb-1">
                      {contact.label}
                    </span>
                    <a
                      className="text-base font-medium group-hover:text-primary transition-colors flex items-center gap-2"
                      href={contact.href}
                    >
                      <contact.icon className="w-4 h-4 text-primary" />
                      {contact.value}
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                <span className="text-xs font-display tracking-widest uppercase text-text-muted-light dark:text-text-muted-dark block mb-4">
                  Find me on
                </span>
                <div className="flex gap-3">
                  {[
                    {
                      icon: "ri-github-line",
                      href: "https://github.com/mobinmiah",
                    },
                    {
                      icon: "ri-linkedin-fill",
                      href: "https://www.linkedin.com/in/mobin-miah",
                    },
                    {
                      icon: "ri-twitter-x-line",
                      href: "https://x.com/MobinMiah12",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.icon}
                      className="w-10 h-10 flex items-center justify-center rounded bg-background-light dark:bg-background-dark shadow-sm hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="lg:col-span-2 w-full" variants={itemVariants}>
          <Card className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card border-0">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again or contact me directly.</span>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="text-xs uppercase font-bold text-text-muted-light dark:text-text-muted-dark tracking-widest"
                      htmlFor="name"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-xs uppercase font-bold text-text-muted-light dark:text-text-muted-dark tracking-widest"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+123 456 7890"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-xs uppercase font-bold text-text-muted-light dark:text-text-muted-dark tracking-widest"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-xs uppercase font-bold text-text-muted-light dark:text-text-muted-dark tracking-widest"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-xs uppercase font-bold text-text-muted-light dark:text-text-muted-dark tracking-widest"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary h-40 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white font-bold uppercase tracking-widest shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  asChild={false}
                >
                  <motion.button
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className="flex items-center justify-center gap-2 w-full"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;