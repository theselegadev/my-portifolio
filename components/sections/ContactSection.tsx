"use client"

import { Github, Mail, Linkedin, MessageCircle, Youtube } from "lucide-react"
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern"
import { cn } from "@/lib/utils"

const ContactSection = () => {
  const contacts: { name: string; icon: React.ComponentType<{ size?: number, className: string }>; href: string; color: string }[] = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/theselegadev",
      color: "hover:text-gray-900",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:matheus.seleghin7@gmail.com",
      color: "hover:text-red-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/matheus-seleghin-4148052b3/",
      color: "hover:text-blue-600",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/14991981998",
      color: "hover:text-green-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@Seleghin",
      color: "hover:text-red-600",
    },
  ]

  return (
    <section className="min-h-screen w-screen relative flex flex-col items-center justify-center px-4 py-16 gap-12 overflow-hidden">
      <div className="z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Vamos Trabalhar Juntos?
        </h1>
        <p className="text-lg sm:text-xl text-gray-900 max-w-2xl mx-auto">
          Tenho interesse em oportunidades de trabalho, colaborações e novos desafios. Sinta-se livre para entrar em contato comigo através de qualquer um dos canais abaixo.
        </p>
      </div>

      <div className="z-10 flex flex-wrap justify-center items-center gap-6 sm:gap-8">
        {contacts.map((contact) => {
          const Icon = contact.icon
          return (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 sm:p-5 rounded-lg bg-white shadow-md transition-all duration-300 ease-out ${contact.color} hover:shadow-xl hover:scale-110`}
              title={contact.name}
            >
              <Icon size={32} className="transition-colors duration-300" />
              <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {contact.name}
              </span>
            </a>
          )
        })}
      </div>

      <InteractiveGridPattern className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}/>
    </section>
  )
}

export default ContactSection