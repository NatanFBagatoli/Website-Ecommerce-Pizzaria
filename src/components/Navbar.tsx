import { Link } from 'react-router-dom';
import { Search, Mail, Pizza } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <header className="bg-[#CE372D] text-white py-2 px-4">
        <div className="container mx-auto flex justify-end space-x-6 items-center">
          <Link to="/buscar" className="hover:text-gray-200 flex items-center gap-2">
            <Search size={18} />
            <span>BUSCAR</span>
          </Link>
          <Link to="/email" className="hover:text-gray-200 flex items-center gap-2">
            <Mail size={18} />
            <span>E-MAIL</span>
          </Link>
        </div>
      </header>
      <nav className="bg-[#FFFAF0] shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex space-x-6">
            <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              SOBRE NÓS
            </Link>
            <Link to="/unidades" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              NOSSAS UNIDADES
            </Link>
            <Link to="/cardapio" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              CARDÁPIO
            </Link>
          </div>
          
          <Link to="/" className="flex items-center gap-2 text-[#692823] text-2xl font-bold">
            <Pizza size={32} className="text-[#CE372D]" />
            <span>PIZZARIA BAGATOLI</span>
          </Link>
          
          <div className="flex space-x-6 items-center">
            <Link to="/pedido" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              PEDIR ONLINE
            </Link>
            <Link to="/contato" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
              FALE CONOSCO
            </Link>
            <Link 
              to="/franquiado" 
              className="bg-[#F4D03F] text-[#602A26] font-semibold px-6 py-2 rounded-full hover:bg-[#F1C40F] transition-colors shadow-md hover:shadow-lg"
            >
              SEJA FRANQUEADO
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;