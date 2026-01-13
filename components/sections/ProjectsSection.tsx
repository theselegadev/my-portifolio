"use client"

import { cn } from "@/lib/utils"
import { DotPattern } from "../ui/dot-pattern"
import CardProjects from "../CardProjects"
import { useState } from "react"
import { ArrowRight,ArrowLeft } from "lucide-react"

const ProjectsSection = () => {
    const listProjects = [
        {
            title: "Poly",
            description: "Poly é um micro framework para games em c, contribui com o projeto desenvolvendo uma página de documentação interativa e download para aprendizado dos usuários.",
            image: "",
            technologies: ["React", "Javascript", "Tailwind CSS"],
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            title: "Solidarize",
            description: "Solidarize é um protótipo web para conectar ongs com voluntários e doadores com base em objetivos, desenvolvi como TCC do curso técnico de desenvolvimento de sistemas.",
            image: "",
            technologies: ["HTML", "Javascript", "CSS", "PHP", "MySQL","Bootstrap"],
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            title: "SeuZé.IA",
            description: "SeuZé.IA é um agente de IA para agendamento para barbearias via Whatsapp, o projeto conta um agente de IA que interage com clientes e agenda horários e um painel de gerenciamento para os barbeiros. EM DESENVOLVIMENTO.",
            image: "",
            technologies: ["React","Javascript","Bootstrap","Node.js","Fastify","Typescript","OpenAI API","MySQL"],
            githubUrl: "#",
            demoUrl: "#"
        }
    ]

    const [projectsVisible, setProjectsVisible] = useState<number>(0);
  return (
    <section className="bg-background h-screen w-screen overflow-hidden relative flex flex-col items-center justify-center">
        <CardProjects image={listProjects[projectsVisible].image} title={listProjects[projectsVisible].title} description={listProjects[projectsVisible].description} technologies={listProjects[projectsVisible].technologies} githubUrl={listProjects[projectsVisible].githubUrl} demoUrl={listProjects[projectsVisible].demoUrl}/>
        <div className="md:absolute md:bottom-4 md:left-1/2 md:transform md:-translate-x-1/2 flex gap-4 mt-4">
            <button className="cursor-pointer" onClick={() => setProjectsVisible((prev) => (prev - 1 + listProjects.length) % listProjects.length)}>
                <ArrowLeft size={24} />
            </button>
            <button className="cursor-pointer" onClick={() => setProjectsVisible((prev) => (prev + 1) % listProjects.length)}><ArrowRight size={24} /></button>
        </div>
        <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />
    </section>
  )
}

export default ProjectsSection