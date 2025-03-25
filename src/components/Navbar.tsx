import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-[#CE372D] text-white py-3 px-4">
        <div className="container mx-auto flex justify-center space-x-6 items-center">
          <a href="https://www.linkedin.com/in/natan-bagatoli/" className="hover:text-gray-200 ">
            <IoLogoLinkedin size={18} />
          </a>
          <a href="https://www.instagram.com/_nayytan/" className="hover:text-gray-200 ">
            <IoLogoInstagram size={18} />
          </a>
          <a href="https://github.com/NatanFBagatoli" className="hover:text-gray-200 ">
            <IoLogoGithub size={18} />
          </a>
          <a href="https://wa.me/47991578819" className="hover:text-gray-200 ">
            <IoLogoWhatsapp size={18} />
          </a>
          <a href="mailto:natanfbagatoli@gmail.com" className="hover:text-gray-200 ">
            <Mail size={18} />
          </a>
        </div>
      </header>

      <nav className="bg-[#FFFAF0] shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between relative">
            <div className="hidden md:flex items-center space-x-6 flex-1 justify-start">
              <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                Nossa História
              </Link>
              <Link to="/unidades" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                Nossas Unidades
              </Link>
              <Link to="/cardapio" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                Nosso Cardápio
              </Link>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link 
                to="/" 
                className="luckiest-guy-regular hover:scale-105 transition-all text-[#CE372D] text-3xl font-bold whitespace-nowrap"
              >
                <span>PIZZARIA <span className="text-[#164615]">BAGATOLI</span></span>
              </Link>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden text-[#602A26] hover:text-[#CE372D] ml-auto"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
              <Link to="/pedido" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              Faça seu Pedido
              </Link>
              <Link to="/entreemcontato" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              Entre em Contato
              </Link>
              <Link 
                to="/franqueado" 
                className="bg-[#F4D03F] text-[#602A26] font-semibold px-6 py-2 rounded-full hover:bg-[#F1C40F] transition-colors transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Seja Franqueado
              </Link>
            </div>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
            <div className="flex items-center flex-col space-y-4">
              <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              Nossa História
              </Link>
              <Link to="/unidades" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              Nossas Unidades
              </Link>
              <Link to="/cardapio" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              Nosso Cardápio
              </Link>
              <Link to="/pedido" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              Faça seu Pedido
              </Link>
              <Link to="/entreemcontato" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              Entre em Contato
              </Link>
              <Link to="/trabalheconosco" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                Trabalhe Conosco
              </Link>
              <Link 
                to="/franqueado" 
                className="bg-[#F4D03F] text-[#602A26] font-semibold px-6 py-2 rounded-full hover:bg-[#F1C40F] transition-colors transform hover:scale-105 shadow-md hover:shadow-lg inline-block text-center"
              >
                Seja Franqueado
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;