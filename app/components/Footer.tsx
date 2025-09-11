import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./Animations";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              ResuMate
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered resume analysis that helps you land your dream job. 
              Get instant feedback and optimization suggestions.
            </p>
            <div className="flex space-x-4">
              {/* GitHub */}
              <motion.a
                href="https://github.com/Pavan-in-Git"
                aria-label="Pavan on GitHub"
                title="Pavan on GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.649.5.5 5.649.5 12c0 5.092 3.292 9.407 7.865 10.93.575.106.786-.25.786-.555 0-.274-.01-1.16-.016-2.104-3.199.695-3.873-1.359-3.873-1.359-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.079-.699.079-.699 1.155.081 1.763 1.186 1.763 1.186 1.027 1.76 2.695 1.252 3.351.957.104-.744.402-1.253.731-1.541-2.555-.291-5.243-1.277-5.243-5.683 0-1.255.448-2.281 1.183-3.086-.119-.29-.513-1.462.113-3.048 0 0 .965-.309 3.165 1.178a10.98 10.98 0 0 1 2.881-.387c.977.005 1.962.132 2.88.387 2.2-1.487 3.164-1.178 3.164-1.178.626 1.586.232 2.758.114 3.048.737.805 1.183 1.831 1.183 3.086 0 4.417-2.693 5.387-5.257 5.673.413.355.78 1.053.78 2.122 0 1.531-.014 2.764-.014 3.141 0 .307.208.667.793.553C20.213 21.402 23.5 17.089 23.5 12c0-6.351-5.149-11.5-11.5-11.5Z" />
                </svg>
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/pavansaib/"
                aria-label="Pavan on LinkedIn"
                title="Pavan on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/pavan.saiiii/"
                aria-label="Pavan on Instagram"
                title="Pavan on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3.5A5.507 5.507 0 0 0 6.5 13c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5S15.033 7.5 12 7.5zm0 2A3.505 3.505 0 0 1 15.5 13 3.505 3.505 0 0 1 12 16.5 3.505 3.505 0 0 1 8.5 13 3.505 3.505 0 0 1 12 9.5zM17.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/upload" className="text-gray-400 hover:text-white transition-colors">
                  Upload Resume
                </a>
              </li>
              <li>
                <a href="/features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 ResuMate. All rights reserved. Built with ❤️ for job seekers.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
