import { Particles } from "../ui/particles"
import { ScrollVelocityRow } from "../ui/scroll-based-velocity";

const AboutSection = () => {
    
  return (
    <section className="h-screen w-screen overflow-hidden flex flex-col justify-center items-center p-8">
         <div className="text-center mb-5 md:mb-16">
          <h1 className="text-5xl sm:text-5xl font-bold text-gray-900 mb-5 md:mb-10 z-10">
            Sobre Mim
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto md:leading-relaxed">
            Sou o Matheus Seleghin dev apaixonado por tecnologia e
            muito curioso. Com experiência em desenvolvimento full-stack, e formação técnica em desenvolvimento de sistemas, estou sempre em busca de novos desafios e resolver problemas. Minha curiosidade me levou a paixão por desenvolver soluções inovadoras e eficientes.
          </p>
        </div>
        <div className="flex items-center justify-center gap-1.5 md:gap-4 z-10 flex-wrap mb-16">
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/2c838375-49a7-4b0c-a350-ed3e699c9d95" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/8c97132d-3766-41bd-b538-02edc9b50cab" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/7dfef7e5-edf8-4b3e-8c8e-53f98361196b" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/5e706e6b-8ba6-4764-8986-6755c73db066" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/0fe85940-06b0-40e3-a902-8ef9c9c5d888" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/75ff9dba-7653-44ee-bbbc-d7b3a653cd27" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/a2b76bf8-b908-4270-b5a5-50a49d1925a9" />
            <img width="60" height="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-plain.svg" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/561b61b9-2d3b-4901-a602-67e1b6ef3bbe" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/58ac1fdd-27a3-448a-ae1c-a6bac56906f0" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/e14dc8a8-59c3-48a3-aef6-5fd3fa19f2f0" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/a9dc3a29-3ce8-4371-8691-37cdecb5ebc1" />
            <img width="60" height="60" alt="image" src="https://github.com/user-attachments/assets/e6e6976e-d659-423c-a6b8-848fbb26c01e" />
            <img width="60" height="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" />
        </div>
        <Particles className="absolute inset-0 w-screen h-screen z-0 top-[100vh]"
        quantity={250}
        ease={100}
        color={"#888888"}
        refresh/>
    </section>
  )
}

export default AboutSection