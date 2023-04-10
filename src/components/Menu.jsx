import React from "react"
import { NavLink } from "react-router-dom"

import { PageOptions } from "../components/PageOptions"

const Menu = () => {
  const activeNavLink = "text-gray-400 cursor-auto"
  const inactiveNavLink =
    "text-white hover:text-gray-700 transition duration-300"
  return (
    <>
      <ul className="font-semibold tracking-tighter">
        {PageOptions.map((page) => {
          let pageName = page.name
          let pageURL = page.url
          return (
            <li className="my-2" key={page.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeNavLink : inactiveNavLink
                }
                to={pageURL}>
                {pageName}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
