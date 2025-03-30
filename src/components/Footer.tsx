import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0C250B] text-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 landscape:py-4">
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
                        gap-4 md:gap-6 landscape:gap-3 landscape:md:gap-6">
          <div className="mb-3 landscape:mb-2">
            <h3 className="font-semibold mb-2 landscape:mb-1 text-base md:text-lg lg:text-xl text-[#FFD17B] 
                          landscape:text-sm landscape:md:text-base landscape:lg:text-lg">
              Institucional
            </h3>
            <ul className="space-y-1 landscape:space-y-0.5">
              <li><Link to="/sobrenos" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Sobre nós</Link></li>
              <li><Link to="/" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Política de Privacidade</Link></li>
              <li><Link to="/" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Política de Cookies</Link></li>
              <li><Link to="/contato" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Entre em contato</Link></li>
              <li><Link to="/" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Trabalhe conosco</Link></li>
            </ul>
          </div>
          
          <div className="mb-3 landscape:mb-2">
            <h3 className="font-bold mb-2 landscape:mb-1 text-base md:text-lg lg:text-xl text-[#FFD17B] 
                          landscape:text-sm landscape:md:text-base landscape:lg:text-lg">
              Nossas unidades
            </h3>
            <ul className="space-y-1 landscape:space-y-0.5">
              <li><Link to="/unidades" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Rio Grande Do Sul</Link></li>
              <li><Link to="/unidades" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Santa Catarina</Link></li>
              <li><Link to="/unidades" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Paraná</Link></li>
            </ul>
          </div>
          
          <div className="mb-3 landscape:mb-2">
            <h3 className="font-semibold mb-2 landscape:mb-1 text-base md:text-lg lg:text-xl text-[#FFD17B] 
                          landscape:text-sm landscape:md:text-base landscape:lg:text-lg">
              Cardápio
            </h3>
            <ul className="space-y-1 landscape:space-y-0.5">
              <li><Link to="/cardapio" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Santa Cruz do Sul</Link></li>
              <li><Link to="/cardapio" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Blumenau</Link></li>
              <li><Link to="/cardapio" className="text-white hover:text-gray-300 transition-colors 
                text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Curitiba</Link></li>
            </ul>
          </div>
          
          <div className="mb-3 landscape:mb-2">
            <h3 className="font-semibold mb-2 landscape:mb-1 text-base md:text-lg lg:text-xl text-[#FFD17B] 
                          landscape:text-sm landscape:md:text-base landscape:lg:text-lg">
              Contatos
            </h3>
            <ul className="space-y-1 landscape:space-y-0.5">
              <li><a href="https://www.facebook.com/a/?locale2=pt_BR&_rdr" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Facebook</a></li>
              <li><a href="https://www.instagram.com/a/" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">Instagram</a></li>
              <li><a href="https://wa.me/9999999999" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm md:text-base landscape:text-xs landscape:md:text-sm">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-8xl mx-auto mt-6 md:mt-8 landscape:mt-4 pt-4 md:pt-6 landscape:pt-3 border-t border-white"></div>
      </div>

      <div className="bg-[#CE372D] py-2 md:py-3 landscape:py-1.5">
        <p className="text-white text-center text-xxs xs:text-xs sm:text-sm md:text-base 
                     landscape:text-xxs landscape:xs:text-xs landscape:sm:text-xs">
                      
          © 2025 Bagatoli Pizzaria Ltda. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;