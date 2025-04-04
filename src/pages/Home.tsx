import { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { IoLogoLinkedin, IoLogoApple, IoLogoGooglePlaystore, IoLogoInstagram, IoLogoGithub, IoLogoWhatsapp, IoPlay } from 'react-icons/io5';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { unidades } from '../constants/unidades';

const Home = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
              <h1 className="text-3xl text-[#ECB76C] md:text-5xl font-bold mb-4 md:mb-6">Tradição e sabor</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">em uma experiência única</h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8">Ingredientes frescos e receitas que dão água na boca há mais de 24 anos.</p>
              <Link
                to="/pedido"
                className="inline-block bg-[#CE372D] text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-[#B32D24] transition-colors shadow-lg hover:shadow-xl">
                Faça seu pedido agora!
              </Link>
            </div>
          </div>
        </section>
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-[#ECE5D7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div
              className="w-full h-[300px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] bg-cover bg-center relative rounded-lg md:rounded-2xl lg:rounded-3xl"
              style={{
                backgroundImage: 'url("/src/assets/pizzaback.png")',
              }}
            >
              <div className="absolute rounded-lg md:rounded-2xl lg:rounded-3xl bg-black bg-opacity-30 inset-0 flex flex-col items-start justify-center text-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl rubik-dirt-regular font-bold mb-2 sm:mb-3 md:mb-4">
                  Nossos Sabores
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-7 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  Confira nossa seleção de mais de 60 sabores!
                </p>
                <Link
                  to="/cardapio"
                  className="bg-[#CE372D] text-white px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 lg:px-7 lg:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-xs sm:text-sm md:text-base"
                >
                  ACESSE O CARDÁPIO
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-[#ECE5D7] relative overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="w-full h-[650px] xs:h-[400px] sm:h-[300px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-cover bg-center relative rounded-lg md:rounded-2xl lg:rounded-3xl"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
              }}>
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] xs:w-[170px] sm:w-[200px] md:w-[350px] lg:w-[450px] xl:w-[500px] transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${isHovered ? 'rotate-0' : 'rotate-[15deg]'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  filter: 'drop-shadow(0 15px 10px rgba(0,0,0,0.3))',
                  zIndex: 10,
                  transformOrigin: 'center center'
                }}
              >
                <img
                  src="src/assets/celular.png"
                  alt="App Pizzaria Bagatoli"
                  className={`w-full h-auto object-contain transition-transform duration-300 ${isHovered ? 'scale-100' : 'scale-90'}`}
                />
              </div>

              <div className="absolute rounded-lg md:rounded-2xl lg:rounded-3xl bg-black bg-opacity-30 inset-0 flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="text-white text-center md:text-left mb-4 md:mb-0 z-20">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl rubik-dirt-regular font-bold mb-2 sm:mb-3">
                    Peça <span className="text-[#ECB76C]">pelo App</span>
                  </h2>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl rubik-dirt-regular font-bold">
                    Pizzaria Bagatoli
                  </h1>
                </div>
                <div className="text-white text-center md:text-right w-full md:w-auto z-20">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-3 sm:mb-4 mx-auto md:mx-0">
                    Baixe nosso aplicativo e faça seus pedidos de forma rápida e prática, onde estiver.
                    Da tela do seu celular para a sua mesa!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center md:justify-end">
                    <a href="#" className="bg-white hover:bg-gray-100 transition-all rounded-lg px-3 py-2 flex items-center justify-center gap-2 min-w-[140px]">
                      <IoLogoApple className="text-black text-2xl" />
                      <div className="text-left">
                        <div className="text-[8px] text-black xs:text-[10px]">Download on the</div>
                        <div className="text-xs xs:text-sm text-black font-medium">App Store</div>
                      </div>
                    </a>

                    <a href="#" className="bg-white hover:bg-gray-100 transition-all rounded-lg px-3 py-2 flex items-center justify-center gap-2 min-w-[140px]">
                      <IoLogoGooglePlaystore className="text-black text-xl" />
                      <div className="text-left">
                        <div className="text-[8px] text-black xs:text-[10px]">Get it on</div>
                        <div className="text-xs xs:text-sm text-black font-medium">Play Store</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-4xl font-bold text-[#CE372D]">Encontre uma Bagatoli</h1>
            <h2 className="text-xl md:text-4xl font-bold text-[#602A26] mb-8">perto de você</h2>
            <p className="text-sm md:text-base text-[#4A0C08]">Temos diversas unidades no Paraná, em Santa Catarina e em São Paulo.</p>
            <p className="text-sm md:text-base text-[#4A0C08]">Encontre a Baggio mais próxima de você!</p>
          </div>
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
        <section className="py-12 md:py-16 lg:py-10 bg-[#ECE5D7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 items-center">
              <div
                className="relative"
                onMouseEnter={() => setIsRotating(true)}
                onMouseLeave={() => setIsRotating(false)}
              >
                <img
                  src="/src/assets/pizza2.webp"
                  alt="Pizza background"
                  className="w-full h-full object-cover rounded-xl lg:rounded-3xl transition-transform duration-1000"
                  style={{
                    transform: isRotating ? "rotate(30deg)" : "rotate(0deg)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 aspect-video w-3/4 lg:w-2/2 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-2xl">
                    <video
                      ref={videoRef}
                      src="/src/assets/video.mp4"
                      className="w-full h-full object-cover"
                      poster="/src/assets/pizzaback.png"
                      loop
                      onClick={togglePlay}
                    />
                    {!isPlaying && (
                      <div className="absolute inset-0 bg-[#4A0C08]/60 flex items-center justify-center">
                        <button
                          onClick={togglePlay}
                          className="w-12 h-12 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md lg:shadow-lg"
                          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                        >
                          <IoPlay className="w-6 h-6 text-[#4A0C08]" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 lg:pl-8">
                <p className="text-[#CE372D] font-medium uppercase tracking-wide text-sm md:text-base">
                  Mais de 30 anos de história
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-[#602A26]">
                  Bagatoli Pizzaria
                </h2>

                <div className="space-y-3 md:space-y-4 text-[#4A0C08] text-sm sm:text-base">
                  <p>
                    Fundada em 1995 por Natan Bagatoli, descendente de italianos, a Bagatoli Pizzaria nasceu com o objetivo de trazer o autêntico sabor da Itália para o Brasil. Inspirados nas receitas de sua família, abriram a primeira unidade em Nova Veneza (SC), uma cidade com forte influência italiana.
                  </p>

                  <p>
                    Com massas artesanais, ingredientes frescos e um ambiente que remete às vilas italianas, a pizzaria rapidamente conquistou os clientes. Hoje, com mais de 20 unidades pelo Brasil, a Bagatoli Pizzaria mantém viva a tradição italiana em cada fatia.
                  </p>
                </div>
                <button className="bg-[#CE372D] text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-sm sm:text-base">
                  Conheça nossa história
                </button>
              </div>
            </div>
          </div>
        </section>
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
                Bagatoli<span className="text-[#CE372D]"> na mídia</span></h1>
              <p className="text-[#4A0C08] mb-4 md:mb-6">Confira notícias e reportagens</p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4 md:mb-6">
                <a href="https://www.linkedin.com/in/natan-bagatoli/" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors flex items-center gap-2">
                  <IoLogoLinkedin size={18} />
                  Linkedin
                </a>
                <a href="https://github.com/NatanFBagatoli" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors flex items-center gap-2">
                  <IoLogoGithub size={18} />
                  GitHub
                </a>
                <a href="https://wa.me/47991578819" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors flex items-center gap-2">
                  <IoLogoWhatsapp size={18} />
                  Whatsapp
                </a>
                <a href="mailto:natanfbagatoli@gmail.com" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors flex items-center gap-2">
                  <Mail size={18} />
                  Email
                </a>
              </div>
              <div className="max-w-4xl mx-auto mt-6 md:mt-8 landscape:mt-4 pt-4 md:pt-6 landscape:pt-3 border-t-2 border-[#D2BEB6]"></div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4 md:mb-6">
                <a href="https://www.instagram.com/_nayytan/" className="text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors flex items-center gap-2">
                  <IoLogoInstagram size={18} />
                  Instagram
                </a>
                <a href="https://www.instagram.com/_nayytan/"
                  className="bg-[#CE372D] text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-sm md:text-base"
                >
                  @BagatoliPizzaria
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;