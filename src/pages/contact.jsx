import React from "react"
import { motion } from "framer-motion"

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const contact = () => {
  return (
    <motion.div
      className="absolute bottom-16 right-16 w-[100px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}>
      <a href="https://www.instagram.com/ifarhandika/" target="_blank">
        <span className="social_media_class">
          <FaInstagram size={20} className="mr-2" />
          instagram
        </span>
      </a>
      <a href="https://www.linkedin.com/in/ifarhandika/" target="_blank">
        <span className="social_media_class">
          <FaLinkedin size={20} className="mr-2" />
          linkedin
        </span>
      </a>
      <a href="https://github.com/ifarhandika" target="_blank">
        <span className="social_media_class">
          <FaGithub size={20} className="mr-2" />
          github
        </span>
      </a>
    </motion.div>
  )
}

export default contact
