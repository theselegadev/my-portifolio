
import { cn } from '@/lib/utils'
import { AnimatedGridPattern } from '../ui/animated-grid-pattern'

const HeroSection = () => {
  return (
    <section className="h-screen w-screen overflow-hidden relative">
        <article>
            <div className="relative top-50 z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <a href="https://github.com/theselegadev"><img src="https://github.com/theselegadev.png" alt="Foto de perfil" className="w-40 h-40 rounded-full shadow-lg mb-4 cursor-pointer" /></a>
                <h1 className="text-4xl md:text-7xl font-bold mb-4">Bem-vindo ao Meu Portfólio</h1>
                <p className="text-xl md:text-2xl mb-8">Descubra meus projetos e habilidades como dev fullstack.</p>
                <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Ver Projetos</a>
            </div>
        </article>
        <AnimatedGridPattern numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1} className={cn(
              "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 overflow-hidden absolute",
        )}/>
    </section>
  )
}

export default HeroSection