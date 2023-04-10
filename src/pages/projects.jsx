import React from "react"
import { motion } from "framer-motion"

import { ListProjects } from "../components/ListProjects"
import CardProject from "../components/CardProject"

const projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="overflow-auto scrollbar-hide p-3 h-[250px] mt-3 md:h-[380px]">
      {ListProjects.map((project, idx) => {
        let key = idx
        let projectName = project.projectName
        let techStack = project.techStack
        let description = project.description
        let url = project.url

        return (
          <>
            <CardProject
              key={key}
              projectName={projectName}
              techStack={techStack}
              description={description}
              url={url}
            />
          </>
        )
      })}
    </motion.div>
  )
}

export default projects
