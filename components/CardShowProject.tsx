import { X } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface CardShowProjectProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  image: StaticImageData | string;
  technologies: string[];
}

const CardShowProject = ({
  isOpen,
  onClose,
  title,
  description,
  image,
  technologies
}: CardShowProjectProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Cabeçalho com botão de fechar */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-200 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-6">
          {/* Imagem do Projeto */}
          <div className="mb-6 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Descrição */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Sobre o Projeto</h3>
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tecnologias */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShowProject;
