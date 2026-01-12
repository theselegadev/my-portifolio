
const Header = () => {
  return (
    <header className="flex justify-around p-4 bg-transparent fixed w-full top-0 left-0 z-10">
        <nav>
            <ul className="flex gap-4">
                <li className="text-xl hover:text-gray-800"><a href="#home">Inicio</a></li>
                <li className="text-xl hover:text-gray-800"><a href="#projects">Projetos</a></li>
                <li className="text-xl hover:text-gray-800"><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header