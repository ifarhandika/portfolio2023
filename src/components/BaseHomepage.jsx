import React from "react"
import { motion } from "framer-motion"

import Header from "./Header"
import Home from "../pages/home"
import Info from "../pages/info"
import Projects from "../pages/projects"
import Contact from "../pages/contact"
import { Link, Route, Routes } from "react-router-dom"

const BaseHomepage = () => {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.75 }}>
      <div className="border border-white text-white p-8">
        <Header />
        <ul className="mt-14 font-semibold tracking-tighter">
          <li className="my-2">
            <Link to="/">Home</Link>
          </li>
          <li className="my-2">
            <Link to="/info">Info</Link>
          </li>
          <li className="my-2">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="my-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </motion.div>
  )
}

export default BaseHomepage
