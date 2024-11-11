import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Custom icon components remain the same
const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMessage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconSend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const Contact = () => {
  const [focused, setFocused] = useState('');

  const handleFocus = (field) => setFocused(field);
  const handleBlur = () => setFocused('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const formVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5
      }
    }
  };

  return (
    <section className="contact py-16 px-5 bg-gradient-to-b from-black via-purple-950/50 to-black overflow-hidden" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          Contact <span className="text-purple-400">Me</span>
        </motion.h2>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500 rounded-full blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-400 rounded-full blur-xl"
          />
          
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            action="https://api.web3forms.com/submit"
            method="POST"
            className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-500/20"
          >
            <input
              type="hidden"
              name="access_key"
              value="177d815e-751c-49c5-ad8e-e6c36e5ab62f"
            />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              <motion.div variants={itemVariants} className="relative group">
                <span className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focused === 'name' ? 'text-purple-400' : 'text-gray-500'}`}>
                  <IconUser />
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-400 outline-none transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative group">
                <span className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focused === 'email' ? 'text-purple-400' : 'text-gray-500'}`}>
                  <IconMail />
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-400 outline-none transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative group">
                <span className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focused === 'number' ? 'text-purple-400' : 'text-gray-500'}`}>
                  <IconPhone />
                </span>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Your Mobile Number"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-400 outline-none transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  onFocus={() => handleFocus('number')}
                  onBlur={handleBlur}
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative group">
                <span className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focused === 'subject' ? 'text-purple-400' : 'text-gray-500'}`}>
                  <IconMessage />
                </span>
                <input
                  type="text"
                  name="subject"
                  id="emailSubject"
                  placeholder="Email Subject"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-400 outline-none transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="relative group mb-8"
            >
              <textarea
                name="message"
                required
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-400 outline-none transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
              ></textarea>
            </motion.div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-purple-500/20 group"
            >
              <span>Send Message</span>
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <IconSend />
              </motion.span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;