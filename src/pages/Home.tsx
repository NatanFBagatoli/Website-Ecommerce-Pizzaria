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


    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white">
        <section className="h-[750px] bg-cover bg-center relative"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
            
          }}>
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="container mx-auto h-full flex items-center relative z-10">
            <div className="text-white max-w-2xl px-4">
              <h1 className="text-5xl font-bold mb-6">Tradição e sabor em uma experiência única</h1>
              <p className="text-xl mb-8">Ingredientes frescos e receitas que dão água na boca há mais de 26 anos.</p>
              <Link
                to="/pedido"
                className="bg-[#CE372D] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#B32D24] transition-colors shadow-lg hover:shadow-xl">
                Peça Agora
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-[#ECE5D7] flex items-center justify-center">
        <div className="w-[1400px] h-[450px] bg-cover bg-center relative rounded-3xl"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}>
            <div className="absolute rounded-3xl bg-black bg-opacity-30 inset-0 flex flex-col items-center justify-center  text-white">
            <h2 className="text-2xl rubik-dirt-regular font-bold mb-4 text-center">
            TRABALHE CONOSCO
            </h2>
            <p className="text-1xl mb-8 text-center">
            Se você é apaixonado por pizza e atendimento de qualidade, faça parte do nosso time! Na Bagatoli Pizzaria, valorizamos talentos que desejam crescer junto com a nossa marca.
            </p>
            <Link
              to="/seja-franqueado"
              className="bg-[#CE372D] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors"
            >
              ENVIE SEU CURRÍCULO
            </Link>
            </div>
            </div>
        </section>
        
        <section className="py-24 bg-[#ECE5D7] flex items-center justify-center">
        <div className="w-[1400px] h-[450px] bg-cover bg-center relative rounded-3xl"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}>
            <div className="absolute rounded-3xl bg-black bg-opacity-30 inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl rubik-dirt-regular font-bold mb-4 text-center">
            TRABALHE CONOSCO
            </h2>
            <p className="text-1xl mb-8 text-center">
            Se você é apaixonado por pizza e atendimento de qualidade, faça parte do nosso time! Na Bagatoli Pizzaria, valorizamos talentos que desejam crescer junto com a nossa marca.
            </p>
            <Link
              to="/seja-franqueado"
              className="bg-[#CE372D] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors"
            >
              ENVIE SEU CURRÍCULO
            </Link>
            </div>
            </div>
        </section>
        <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
                        <select
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className="flex-1 p-3 border rounded-md bg-white"
                        >
                            <option value="">Selecione um estado</option>
                            <option value="PR">Rio Grande do Sul</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">Paraná</option>
                        </select>
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="flex-1 p-3 border rounded-md bg-white"
                        >
                            <option value="">Selecione uma cidade</option>
                            <option value="CURITIBA">Santa Cruz do Sul</option>
                            <option value="FLORIPA">Blumenau</option>
                            <option value="SP">Curitiba</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {currentUnidades.map((unidade, index) => (
                            <div key={index} className="transform hover:scale-105 transition-all bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={unidade.image}
                                    alt={unidade.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl text-[#602A26] font-bold">{unidade.name}</h3>
                                    
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-8">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 text-[#602A26] hover:text-[#CE372D] disabled:opacity-50"
                        >
                            Anterior
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`w-8 h-8 rounded-full ${currentPage === index + 1
                                    ? 'bg-[#CE372D] text-white'
                                    : 'text-[#602A26] hover:text-[#CE372D]'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 text-[#602A26] hover:text-[#CE372D] disabled:opacity-60"
                        >
                            Próxima
                        </button>
                    </div>
                    
                </div>
        <section className=" bg-[#ECE5D7]">
        <div
          className="w-full h-[450px] bg-cover bg-center relative"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        >
          <div className="absolute bg-black bg-opacity-30 inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl rubik-dirt-regular font-bold mb-4 text-center">
            SEJA UM FRANQUIADO BAGATOLI
            </h2>
            <p className="text-1xl mb-8 text-center">
            Faça parte da família Bagatoli e abra a sua franquia com a confiança de uma marca consolidada e mais de 26 anos de experiência. Na Bagatoli, sabemos o que fazer e como fazer para garantir o sucesso do seu negócio.
            </p>
            <Link
              to="/seja-franqueado"
              className="bg-[#CE372D] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors"
            >
              CONHEÇA OS MODELOS DE NEGÓCIO
            </Link>
          </div>
        </div>
        </section>
        <section className="py-24">
                  <div className="container mx-auto px-4">
                    <div className="text-center">
                      <h1 className="luckiest-guy-regular text-4xl text-[#4A0C08] font-extrabold mb-4">Bagatoli<span className="text-[#CE372D]"> na mídia</span></h1>
                      <p className="text-[#4A0C08] mx-10 mb-4">Confira notícias e reportagens</p>
                      <div className="container mx-138 flex items-center justify-between">
                      <div className="flex space-x-6">
                      <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                        REDE1
                      </Link>
                      <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                        REDE2
                      </Link>
                      <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                        REDE3
                      </Link>
                      <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                        REDE4
                      </Link>
                      <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                        REDE5
                      </Link>
                      <Link to="/sobrenos" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors">
                        REDE6
                      </Link>
                      </div>
                      </div>
                      <Link to="/" className='hover:text-gray-200 flex items-center gap-2'>
                        <IoLogoInstagram size={18} />
                      </Link>
                     
                      <Link
                        to="/seja-franqueado"
                        className="bg-[#CE372D] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors"
                      >
                        BOTAO
                      </Link>
                    </div>
                  </div>
                </section>
        
      </div>
      <Footer />
    </div>
  )
};
export default Home;