import React, { useState } from "react"
import { Link, NavLink, Route, Routes } from "react-router-dom"

import { motion } from "framer-motion"

import Header from "./Header"
import Home from "../pages/Home"
import Info from "../pages/Info"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import ErrorNotFound from "../pages/ErrorNotFound"

const PageOptions = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Info",
    url: "/info",
  },
  {
    id: 3,
    name: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
  },
]

const BaseHomepage = () => {

  const activeNavLink = "text-gray-400 cursor-auto"
  const inactiveNavLink =
    "text-white hover:text-gray-700 transition duration-300"

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.75 }}>
      <div className="border border-white text-white p-8">
        <Header />
        <ul className="mt-14 font-semibold tracking-tighter">
          {PageOptions.map((page) => {
            let pageName = page.name
            let pageURL = page.url
            return (
              <>
                <li className="my-2">
                  <NavLink
                    key={page.id}
                    className={({ isActive }) =>
                      isActive ? activeNavLink : inactiveNavLink
                    }
                    to={pageURL}>
                    {pageName}
                  </NavLink>
                </li>
              </>
            )
          })}
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </div>
    </motion.div>
  )
}

export default BaseHomepage
