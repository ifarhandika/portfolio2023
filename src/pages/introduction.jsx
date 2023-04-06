import React from "react"

import { motion } from "framer-motion"

const introduction = () => {
  return (
    <div className="h-screen w-screen absolute font-inconsolata text-4xl flex justify-center items-center">
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}>
        Hafizh Farhandika
      </motion.span>
      <span>&nbsp;&nbsp;</span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.25 }}
        className="font-thin">
        Portfolio
      </motion.span>
    </div>
  )
}

export default introduction
