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
          <Link to="/" className="hover:text-gray-200 flex items-center gap-2">
            <IoLogoLinkedin size={18} />
          </Link>
          <Link to="/" className="hover:text-gray-200 flex items-center gap-2">
            <IoLogoInstagram size={18} />
          </Link>
          <Link to="/" className="hover:text-gray-200 flex items-center gap-2">
            <IoLogoGithub size={18} />
          </Link>
          <Link to="/" className="hover:text-gray-200 flex items-center gap-2">
            <IoLogoWhatsapp size={18} />
          </Link>
          <Link to="/" className="hover:text-gray-200 flex items-center gap-2">
            <Mail size={18} />
          </Link>
        </div>
      </header>

      <nav className="bg-[#FFFAF0] shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between relative">
            <Link 
              to="/" 
              className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 luckiest-guy-regular hover:scale-105 transition-all flex items-center gap-2 text-[#CE372D] text-2xl md:text-4xl font-bold"
            >
              <span>PIZZARIA <span className="text-[#164615]">BAGATOLI</span></span>
            </Link>

            <button
              onClick={toggleMenu}
              className="md:hidden text-[#602A26] hover:text-[#CE372D] ml-auto"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                NOSSA HISTÓRIA
              </Link>
              <Link to="/unidades" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                UNIDADES
              </Link>
              <Link to="/cardapio" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                CARDÁPIO
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link to="/pedido" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                PEDIR ONLINE
              </Link>
              <Link to="/entreemcontato" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                FALE CONOSCO
              </Link>
              <Link 
                to="/franqueado" 
                className="bg-[#F4D03F] text-[#602A26] font-semibold px-6 py-2 rounded-full hover:bg-[#F1C40F] transition-colors transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                SEJA FRANQUEADO
              </Link>
            </div>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
            <div className="flex flex-col space-y-4">
              <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                SOBRE NÓS
              </Link>
              <Link to="/unidades" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                UNIDADES
              </Link>
              <Link to="/cardapio" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                CARDÁPIO
              </Link>
              <Link to="/pedido" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                PEDIR ONLINE
              </Link>
              <Link to="/entreemcontato" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                FALE CONOSCO
              </Link>
              <Link 
                to="/franqueado" 
                className="bg-[#F4D03F] text-[#602A26] font-semibold px-6 py-2 rounded-full hover:bg-[#F1C40F] transition-colors transform hover:scale-105 shadow-md hover:shadow-lg inline-block text-center"
              >
                SEJA FRANQUEADO
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;