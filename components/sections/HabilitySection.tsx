"use client"

import { Particles } from "../ui/particles"

const HabilitySection = () => {
  const skills: string[] = [
    "https://github.com/user-attachments/assets/2c838375-49a7-4b0c-a350-ed3e699c9d95",
    "https://github.com/user-attachments/assets/8c97132d-3766-41bd-b538-02edc9b50cab",
    "https://github.com/user-attachments/assets/7dfef7e5-edf8-4b3e-8c8e-53f98361196b",
    "https://github.com/user-attachments/assets/5e706e6b-8ba6-4764-8986-6755c73db066",
    "https://github.com/user-attachments/assets/0fe85940-06b0-40e3-a902-8ef9c9c5d888",
    "https://github.com/user-attachments/assets/75ff9dba-7653-44ee-bbbc-d7b3a653cd27",
    "https://github.com/user-attachments/assets/a2b76bf8-b908-4270-b5a5-50a49d1925a9",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-plain.svg",
    "https://github.com/user-attachments/assets/561b61b9-2d3b-4901-a602-67e1b6ef3bbe",
    "https://github.com/user-attachments/assets/58ac1fdd-27a3-448a-ae1c-a6bac56906f0",
    "https://github.com/user-attachments/assets/e14dc8a8-59c3-48a3-aef6-5fd3fa19f2f0",
    "https://github.com/user-attachments/assets/a9dc3a29-3ce8-4371-8691-37cdecb5ebc1",
    "https://github.com/user-attachments/assets/e6e6976e-d659-423c-a6b8-848fbb26c01e",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
  ]
    
  return (
    <section className="min-h-screen w-screen overflow-hidden flex flex-col justify-center items-center px-4 sm:px-8 py-16 sm:py-20 relative">
      <div className="text-center mb-10 sm:mb-16 lg:mb-20 z-10 max-w-4xl">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-8">
          Habilidades
        </h1>
        <p className="text-medium sm:text-base lg:text-xl text-gray-700 leading-relaxed lg:leading-relaxed">
          Aqui estão algumas das tecnologias e ferramentas que utilizo no meu dia a dia como desenvolvedor fullstack. Atuo com o desenvolvimento de aplicações web, REST APIs e integração com modelos de IA. Com experiência em desenvolvimento de interfaces visuais intuitivas e back-ends com autenticação segura e performance eficiente.
        </p>
      </div>

      <div className="z-10 w-full flex justify-center px-2">
        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-8 max-w-6xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-2 sm:p-3 lg:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 ease-out hover:bg-white/10 hover:shadow-lg"
            >
              <img
                width="55"
                height="55"
                alt="skill-icon"
                src={skill}
                className="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
              />
            </div>
          ))}
        </div>
      </div>

      <Particles
        className="absolute inset-0 w-screen h-screen z-0"
        quantity={250}
        ease={100}
        color={"#888888"}
        refresh
      />
    </section>
  )
}

export default HabilitySection