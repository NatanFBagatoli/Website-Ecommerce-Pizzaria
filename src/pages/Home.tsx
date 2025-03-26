import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { IoLogoInstagram } from 'react-icons/io5';
import { unidades } from '../constants/unidades';
import { useState } from "react";

const Home = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const unidadesPerPage = 8;
  const totalPages = Math.ceil(unidades.length / unidadesPerPage);

  const indexOfLastUnidades = currentPage * unidadesPerPage;
  const indexOfFirstUnidades = indexOfLastUnidades - unidadesPerPage;
  const currentUnidades = unidades.slice(indexOfFirstUnidades, indexOfLastUnidades);

  const estadosCidades = {
    'RS': ['Santa Cruz do Sul'],
    'SC': ['Blumenau'],
    'PR': ['Curitiba'],
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <section className="h-screen max-h-[800px] bg-cover bg-center relative"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}>
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="container mx-auto h-full flex items-center relative z-10 px-4">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">Tradição e sabor em uma experiência única</h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8">Ingredientes frescos e receitas que dão água na boca há mais de 26 anos.</p>
              <Link
                to="/pedido"
                className="inline-block bg-[#CE372D] text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-[#B32D24] transition-colors shadow-lg hover:shadow-xl">
                Peça Agora
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-[#ECE5D7]">
          <div className="container mx-auto px-4">
            <div className="w-full h-[300px] md:h-[450px] bg-cover bg-center relative rounded-lg md:rounded-3xl"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
              }}>
              <div className="absolute rounded-lg md:rounded-3xl bg-black bg-opacity-30 inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <h2 className="text-xl md:text-2xl rubik-dirt-regular font-bold mb-3 md:mb-4">
                  TRABALHE CONOSCO
                </h2>
                <p className="text-sm md:text-base mb-6 md:mb-8 max-w-md">
                  Se você é apaixonado por pizza e atendimento de qualidade, faça parte do nosso time! Na Bagatoli Pizzaria, valorizamos talentos que desejam crescer junto com a nossa marca.
                </p>
                <Link
                  to="/seja-franqueado"
                  className="bg-[#CE372D] text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-sm md:text-base"
                >
                  ENVIE SEU CURRÍCULO
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-[#ECE5D7]">
          <div className="container mx-auto px-4">
            <div className="w-full h-[300px] md:h-[450px] bg-cover bg-center relative rounded-lg md:rounded-3xl"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
              }}>
              <div className="absolute rounded-lg md:rounded-3xl bg-black bg-opacity-30 inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <h2 className="text-xl md:text-2xl rubik-dirt-regular font-bold mb-3 md:mb-4">
                  TRABALHE CONOSCO
                </h2>
                <p className="text-sm md:text-base mb-6 md:mb-8 max-w-md">
                  Se você é apaixonado por pizza e atendimento de qualidade, faça parte do nosso time! Na Bagatoli Pizzaria, valorizamos talentos que desejam crescer junto com a nossa marca.
                </p>
                <Link
                  to="/seja-franqueado"
                  className="bg-[#CE372D] text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-sm md:text-base"
                >
                  ENVIE SEU CURRÍCULO
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8 md:mb-12">
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity('');
              }}
              className="flex-1 p-2 border rounded-md text-sm md:text-base"
            >
              <option value="">Selecione um Estado</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="SC">Santa Catarina</option>
              <option value="PR">Paraná</option>
            </select>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="flex-1 p-2 border rounded-md text-sm md:text-base"
              disabled={!selectedState}
            >
              <option value="">Selecione uma Cidade</option>
              {selectedState && estadosCidades[selectedState as keyof typeof estadosCidades].map((cidade, index) => (
                <option key={index} value={cidade}>{cidade}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12">
            {currentUnidades.map((unidade, index) => (
              <a
                key={index}
                href={unidade.url}
                className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] cursor-pointer"
              >
                <div className="w-full h-40 sm:h-48 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={unidade.image}
                    alt={unidade.name}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg md:text-xl text-[#602A26] mt-2 text-center font-bold">
                  {unidade.name}
                </h3>
              </a>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 md:px-4 md:py-2 text-[#602A26] hover:text-[#CE372D] disabled:opacity-50 text-sm md:text-base"
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`w-7 h-7 md:w-8 md:h-8 rounded-full ${currentPage === index + 1
                  ? 'bg-[#CE372D] text-white'
                  : 'text-[#602A26] hover:text-[#CE372D]'
                  } text-sm md:text-base`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 md:px-4 md:py-2 text-[#602A26] hover:text-[#CE372D] disabled:opacity-60 text-sm md:text-base"
            >
              Próxima
            </button>
          </div>
        </div>
        <section className="bg-[#ECE5D7]">
          <div
            className="w-full h-[300px] md:h-[450px] bg-cover bg-center relative"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
            }}
          >
            <div className="absolute bg-black bg-opacity-30 inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
              <h2 className="text-xl md:text-2xl rubik-dirt-regular font-bold mb-3 md:mb-4">
                SEJA UM FRANQUEADO BAGATOLI
              </h2>
              <p className="text-sm md:text-base mb-6 md:mb-8 max-w-md md:max-w-2xl">
                Faça parte da família Bagatoli e abra a sua franquia com a confiança de uma marca consolidada e mais de 26 anos de experiência. Na Bagatoli, sabemos o que fazer e como fazer para garantir o sucesso do seu negócio.
              </p>
              <Link
                to="/seja-franqueado"
                className="bg-[#CE372D] text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-sm md:text-base"
              >
                CONHEÇA OS MODELOS DE NEGÓCIO
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="luckiest-guy-regular text-3xl md:text-4xl text-[#4A0C08] font-extrabold mb-3 md:mb-4">
                Bagatoli<span className="text-[#CE372D]"> na mídia</span>
              </h1>
              <p className="text-[#4A0C08] mb-4 md:mb-6">Confira notícias e reportagens</p>

              <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4 md:mb-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Link 
                    key={item} 
                    to="/sobrenos" 
                    className="text-sm md:text-base text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors"
                  >
                    REDE{item}
                  </Link>
                ))}
              </div>
              
              <div className="flex justify-center items-center gap-4 mb-4 md:mb-6">
                <Link to="/" className="hover:text-gray-200 flex items-center gap-2">
                  <IoLogoInstagram size={18} />
                </Link>
              </div>

              <div className="flex justify-center">
                <Link
                  to="/seja-franqueado"
                  className="bg-[#CE372D] text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-sm md:text-base"
                >
                  BOTAO
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
};

export default Home;