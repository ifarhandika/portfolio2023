import React from "react"

import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Info from "../pages/Info"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import ErrorNotFound from "../pages/ErrorNotFound"

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </>
  )
}

export default Pages
