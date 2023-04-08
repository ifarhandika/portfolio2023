import React from "react"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.div
      className="absolute bottom-16 right-16 w-[200px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}>
      Born in Jakarta 1998, my interest in web development started back in 2020
      after graduating college where my curiosity on how the webs are built.
      Fast-forward to today, I'm currently working in PT. Astra International
      Tbk. as a Full Stack Developer, where I'm contributing in some of their
      project, Belibareng and Astra E-Procurement.
    </motion.div>
  )
}

export default Home
