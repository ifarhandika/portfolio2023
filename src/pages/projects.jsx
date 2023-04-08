import React from "react"

import { ListProjects } from "../components/ListProjects"
import CardProject from "../components/CardProject"

const projects = () => {
  return (
    <div className="h-[400px] overflow-auto scrollbar-hide">
      {ListProjects.map((project, idx) => {
        let key = idx
        let projectName = project.projectName
        let techStack = project.techStack
        let description = project.description

        return (
          <>
            <CardProject
              key={key}
              projectName={projectName}
              techStack={techStack}
              description={description}
            />
          </>
        )
      })}
    </div>
  )
}

export default projects
