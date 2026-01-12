
const Header = () => {
  return (
    <header className="flex justify-around p-3 backdrop-blur-sm border-b border-white/10 fixed w-full top-0 left-0 z-50">
        <nav>
            <ul className="flex gap-4">
                <li className="text-xl hover:text-gray-800"><a href="#home">Inicio</a></li>
                <li className="text-xl hover:text-gray-800"><a href="#about">Sobre</a></li>
                <li className="text-xl hover:text-gray-800"><a href="#projects">Projetos</a></li>
                <li className="text-xl hover:text-gray-800"><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header