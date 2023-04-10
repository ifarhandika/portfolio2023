import React from "react"

import { FaDownload } from "react-icons/fa"

const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center">
          <h1 className="font-inconsolata text-4xl tracking-tighter">
            Hafizh Farhandika N.
          </h1>
          <a
            href="./assets/Resume (Hafizh Farhandika Nurwirasaputra).pdf"
            target="_blank">
            <div className="flex justify-center items-center bg-white px-3 py-1 text-black hover:bg-gray-400 hover:text-white transition">
              <span className="mr-1">resume</span>
              <FaDownload />
            </div>
          </a>
        </div>
        <p className="font-thin text-lg">Front End Developer</p>
      </header>
    </>
  )
}

export default Header
