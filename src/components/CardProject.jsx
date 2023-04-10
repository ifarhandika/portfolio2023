import React from "react"

const CardProject = ({ key, projectName, techStack, description, url }) => {
  return (
    <>
      <a href={url} target="_blank">
        <div className="flex flex-col text-right bg-[#202022] border-[#202022] rounded-xl p-5 mb-3 hover:scale-105 transition">
          <span className="text-[24px] font-inconsolata font-thin">
            {projectName}
          </span>
          <div>
            {techStack.map((tech) => {
              return (
                <>
                  <span className="ml-2 tracking-widest font-inconsolata">
                    {tech}
                  </span>
                </>
              )
            })}
          </div>
          <span className="text-[#808080]">{description}</span>
        </div>
      </a>
    </>
  )
}

export default CardProject
