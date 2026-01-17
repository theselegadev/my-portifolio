import { Github, ExternalLink } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CardShowProject from './CardShowProject';

interface CardProjectsProps {
  title: string;
  description?: string;
  image: StaticImageData | string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const CardProjects = ({ 
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl
}: CardProjectsProps) => {
  const [showProject, setShowProject] = useState<boolean>(false);
  
  useEffect(() => {
    if (showProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.overflowX = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.overflowX = 'hidden';
    };
  }, [showProject]);
  
  return (
    <>
      <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg z-11 hover:shadow-2xl transition-all duration-300 border border-gray-100 w-[95%] md:w-[430px] h-[595px]">
        {/* Imagem do Projeto */}
        <div className="relative h-64 overflow-hidden bg-gray-200 cursor-pointer" onClick={() => setShowProject(true)}>
          <Image
            src={image}  
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Conteúdo do Card */}
        <div className="p-6 bg-white flex flex-col justify-between h-[calc(100%-16rem)]">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 md:w-94">
            {description}
          </p>

          {/* Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-4 w-94 w-full">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-sm"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
            >
              <ExternalLink size={18} />
              <span>Ver</span>
            </a>)}
            {!demoUrl && (
              <button onClick={()=>setShowProject(true)} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm cursor-pointer"><ExternalLink size={18} />
              <span>Saiba mais</span></button>
            )}
          </div>
        </div>
      </div>

      <CardShowProject
        isOpen={showProject}
        onClose={() => setShowProject(false)}
        title={title}
        description={description}
        image={image}
        technologies={technologies}
      />
    </>
  );
};

export default CardProjects;