import React from "react"

import { ListProjects } from "../components/ListProjects"
import CardProject from "../components/CardProject"

const projects = () => {
  return (
    <div className="overflow-auto scrollbar-hide p-3 h-[250px] mt-3 md:h-[380px]">
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
    </div>
  )
}

export default projects
