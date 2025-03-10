
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#0C250B] text-white">
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-xl text-[#FFD17B]">Institucional</h3>
            <ul className="space-y-2">
              <li><Link to="/sobrenos" className="text-white hover:text-gray-300 transition-colors">Sobre nós</Link></li>
              <li><Link to="/" className="text-white hover:text-gray-300 transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/" className="text-white hover:text-gray-300 transition-colors">Política de Cookies</Link></li>
              <li><Link to="/contato" className="text-white hover:text-gray-300 transition-colors">Entre em contato</Link></li>
              <li><Link to="/" className="text-white hover:text-gray-300 transition-colors">Trabalhe conosco</Link></li>


            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-xl text-[#FFD17B]">Nossas unidades</h3>
            <ul className="space-y-2">
              <li><Link to="/unidades" className="text-white hover:text-gray-300 transition-colors">Rio Grande Do Sul</Link></li>
              <li><Link to="/unidades" className="text-white hover:text-gray-300 transition-colors">Santa Catarina</Link></li>
              <li><Link to="/unidades" className="text-white hover:text-gray-300 transition-colors">Paraná</Link></li>

            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xl text-[#FFD17B]">Cardápio</h3>
            <ul className="space-y-2">
              <li><Link to="/cardapio" className="text-white hover:text-gray-300 transition-colors">Santa Cruz do Sul</Link></li>
              <li><Link to="/cardapio" className="text-white hover:text-gray-300 transition-colors">Blumenau</Link></li>
              <li><Link to="/cardapio" className="text-white hover:text-gray-300 transition-colors">Curitiba</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xl text-[#FFD17B]">Contatos</h3>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com/a/?locale2=pt_BR&_rdr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">Instagram</a></li>
              <li><a href="https://wa.me/9999999999" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">WhatsApp</a></li>
            </ul>

          </div>

        </div>
        <div className="max-w-8xl mx-auto mt-12 pt-8 border-t border-white"></div>
      </div>

      <div className="bg-[#CE372D] py-4 ">
        <p className="text-white text-center">
          © 2025 Bagatoli Pizzaria Ltda. Todos os direitos reservados.
        </p>
      </div>

    </footer>
  );
};

export default Footer;