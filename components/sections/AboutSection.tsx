import { FlickeringGrid } from "../ui/flickering-grid"
import Image from "next/image"
import img from '../../public/lampada-pixelart.png'

const AboutSection = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center relative gap-8 sm:gap-10 px-4 sm:px-8 py-16 sm:py-20 overflow-hidden">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 text-center z-10">Sobre Mim</h1>
      
      <article className="w-full max-w-7xl flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 lg:gap-16 z-10">
        
        <div className="flex flex-col justify-start items-start w-full lg:w-[65%] px-4 sm:px-6 lg:px-0">
          <p className="text-base sm:text-lg lg:text-lg text-gray-800 leading-relaxed mb-4 text-justify">
            Olá, sou o Matheus Seleghin, desenvolvedor full-stack apaixonado por tecnologia e movido pela curiosidade. Meu primeiro contato com programação foi em 2020, durante a pandemia, quando comecei a estudar lógica, portugol e pseudocódigo por pura curiosidade. Desde então, a vontade de entender como as coisas funcionam só cresceu.
          </p>
          
          <p className="text-base sm:text-lg lg:text-lg text-gray-800 leading-relaxed mb-4 text-justify">
            Em 2023, comecei a estudar programação com foco em web, HTML, CSS e JavaScript. Mesmo muito jovem, me apaixonei pela área e via programação como hobby. Já em 2024, fazia mini games web com javascript para meus colegas de escola jogarem, ficava alegre ao criar algo que pudesse ser usado por outras pessoas.
          </p>
          
          <p className="text-base sm:text-lg lg:text-lg text-gray-800 leading-relaxed mb-4 text-justify">
            Nesse mesmo ano comecei a fazer curso técnico em desenvolvimento de sistemas. No curso adquiri base sólida em desenvolvimento como modelagem de dados, banco de dados e programação orientada a objetos. Também abri um canal no youtube para compartilhar meus conhecimentos. No primeiro semestre de 2025, fui eleito aluno destaque da minha turma, uma conquista que me mostrou estar trilhando um bom caminho.
          </p>
          
          <p className="text-base sm:text-lg lg:text-lg text-gray-800 leading-relaxed text-justify">
            Atualmente, estou focado em aprimorar minhas habilidades em desenvolvimento full-stack e buscando oportunidades para aplicar meus conhecimentos em projetos que transformam pessoas. Estou animado com o futuro e as possibilidades que a tecnologia oferece para criar soluções que impactam positivamente a vida das pessoas.
          </p>
        </div>
        
        <div className="flex justify-center items-center w-full md:w-[35%] md:my-auto">
          <Image 
            src={img} 
            alt="Lâmpada Pixel Art" 
            width={300} 
            height={300}
            className="w-48 sm:w-64 lg:w-72 h-auto"
            priority
          />
        </div>
      </article>
      
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#888888"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={2000}
        width={2000}
      />
    </section>
  )
}

export default AboutSection