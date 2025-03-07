import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="bg-[#CE372D] h-11"></div>
      <nav className="bg-[#FFFAF0] p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-[#692823] hover:text-[#d3443a] text-lg font-bold">
            Pizzaria Bagatoli
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-[#692823] hover:text-[#d3443a] text-lg">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="text-[#692823] hover:text-[#d3443a] text-lg">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="text-[#692823] hover:text-[#d3443a] text-lg">
                Unidades
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-[#692823] hover:text-[#d3443a] text-lg">
                Cardápio
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-[#692823] hover:text-[#d3443a] text-lg">
                Pedido Online
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-[#692823] hover:text-[#d3443a] text-lg">
                Entre em contato
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-[#692823] hover:text-[#d3443a] text-lg">
                Seja Franquiado
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;