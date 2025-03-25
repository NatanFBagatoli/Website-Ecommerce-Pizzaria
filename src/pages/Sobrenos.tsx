import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoTimerOutline, IoPizzaOutline, IoStorefrontOutline, IoCalendarNumberOutline, IoCaretForwardOutline, IoCaretBackOutline, IoLogoInstagram } from "react-icons/io5";
import { Store, CircleDollarSign, Pizza } from "lucide-react"
import { useInView } from "../hooks/useInView";
import CountUp from "react-countup";
import { useState } from 'react';
import { slides } from "../constants/slides";

const Sobrenos = () => {
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const status = [
    { icon: IoCalendarNumberOutline, number: 10, text: "Anos de tradição e experiência", prefix: "+" },
    { icon: Store, number: 20, text: "Unidades inauguradas", prefix: "+" },
    { icon: CircleDollarSign, number: 1000, text: "pizzas vendidas por ano", prefix: "+" },
    { icon: Pizza, number: 57, text: "Itens no cardápio", prefix: "+" }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const slideVariants = {
    hidden: { opacity: 100, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 100, x: 100 },
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <section className="h-[50vh] min-h-[400px] md:h-[60vh] lg:h-[750px] bg-cover bg-center relative"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}>
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="container mx-auto h-full flex items-center relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="text-white max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold rubik-dirt-regular mb-4 md:mb-6">SOBRE<span className="text-[#CE372D]"> NÓS</span></h1>
              <h2 className="text-lg sm:text-xl font-bold mb-4 md:mb-6">Olá! Somos a Pizzaria Bagatoli!</h2>
              <p className="text-base sm:text-lg mb-6 md:mb-8">Há mais de duas décadas, a Pizzaria Bagatoli nasceu da paixão por unir tradição e sabor, criando uma experiência única que conquista corações.</p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-[#CE372D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="text-center p-4">
                <IoPizzaOutline className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#4A0C08] mx-auto mb-4 md:mb-8" />
                <h1 className="text-xl sm:text-2xl text-[#FCF9F8] font-extrabold rubik-dirt-regular mb-2 md:mb-4">Qualidade Premium</h1>
                <h2 className="text-sm sm:text-base italic text-[#FCC36A] font-extrabold mb-2 md:mb-4">"Sabor Italiano, Feito com Alma"</h2>
                <p className="text-[#FCF9F8] text-sm sm:text-base mx-2 sm:mx-4 md:mx-10 mb-2 md:mb-4">Pizzas inspiradas na tradição italiana, com ingredientes frescos e sabor autêntico em cada fatia.</p>
              </div>
              <div className="text-center p-4">
                <IoTimerOutline className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#4A0C08] mx-auto mb-4 md:mb-8" />
                <h3 className="text-xl sm:text-2xl text-[#FCF9F8] font-extrabold rubik-dirt-regular mb-2 md:mb-4">Entrega Rápida</h3>
                <h2 className="text-sm sm:text-base italic text-[#FCC36A] font-extrabold mb-2 md:mb-4">"Itália na Sua Porta em 40 Minutos"</h2>
                <p className="text-[#FCF9F8] text-sm sm:text-base mx-2 sm:mx-4 md:mx-10 mb-2 md:mb-4">Em 40 minutos, levamos pizzas fresquinhas e saborosas até você, mantendo a tradição italiana.</p>
              </div>
              <div className="text-center p-4">
                <IoStorefrontOutline className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#4A0C08] mx-auto mb-4 md:mb-8" />
                <h3 className="text-xl sm:text-2xl text-[#FCF9F8] font-extrabold rubik-dirt-regular mb-2 md:mb-4">Várias Unidades</h3>
                <h2 className="text-sm sm:text-base italic text-[#FCC36A] font-extrabold mb-2 md:mb-4">"Cantinho da Itália no Seu Bairro"</h2>
                <p className="text-[#FCF9F8] text-sm sm:text-base mx-2 sm:mx-4 md:mx-10 mb-2 md:mb-4">Ambiente aconchegante, decoração italiana e atendimento especial para uma experiência completa.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 relative bg-[#FFFAF0]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 md:gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 lg:pl-8">
                <p className="text-lg sm:text-xl text-[#CE372D] mb-2">{slides[currentSlide].year}</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl luckiest-guy-regular text-[#4A0C08] mb-4">{slides[currentSlide].title}</h2>
                <p className="text-base sm:text-lg text-[#4A0C08]">
                  {slides[currentSlide].description}
                </p>
              </div>
              
              <div className="relative w-full lg:w-[600px] xl:w-[700px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${slides[currentSlide].url})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"></div>
                  </motion.div>
                </AnimatePresence>
                
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full transition-colors z-10"
                >
                  <IoCaretBackOutline size={40} className="text-white rounded-full p-1 hover:text-[#CE372D]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full transition-colors z-10"
                >
                  <IoCaretForwardOutline size={40} className="text-white rounded-full p-1 hover:text-[#CE372D]" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`rounded-full transition-all ${currentSlide === index ? 'bg-[#CE372D] w-3 h-3' : 'bg-[white]/80 w-2 h-2'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-12 md:mt-16 lg:mt-20">
              <p className="text-2xl sm:text-3xl md:text-4xl text-[#602A26] font-bold mb-2 luckiest-guy-regular">O SUCESSO DA BAGATOLI</p>
              <span className="luckiest-guy-regular text-[#CE372D] font-bold text-2xl sm:text-3xl md:text-4xl">EM NÚMEROS</span>
            </div>
            
            <div className="mt-8 md:mt-12 lg:mt-16">
              <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {status.map((stat, index) => (
                  <div key={index} className="rounded-xl p-2 sm:p-4 text-center transform hover:scale-105 transition-all">
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#4A0C08] mx-auto mb-2 sm:mb-4" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#CE372D] font-bold mb-1 sm:mb-2">
                      <span className="inline-flex">
                        {statsInView && (
                          <CountUp
                            start={0}
                            end={stat.number}
                            duration={2.5}
                            separator="."
                            prefix={stat.prefix}
                            useEasing={true}
                          />
                        )}
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base">{stat.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-[#ECE5D7]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-[#4A0C08] mx-10 mb-4">Nossos prêmios</p>
              <h1 className="luckiest-guy-regular text-4xl text-[#4A0C08] font-extrabold mb-4">Conquistas<span className="text-[#CE372D]"> da Bagatoli</span></h1>
              <p className="text-[#4A0C08] mx-10 mb-4">"Ao longo desses 26 anos de história, a Bagatoli Pizzaria foi reconhecida inúmeras vezes pela excelência e dedicação à qualidade."</p>
              <p className="text-[#4A0C08] mx-10 mb-4">Cada prêmio e conquista reflete o compromisso único da nossa marca com a satisfação e experiência dos clientes..</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="luckiest-guy-regular text-2xl sm:text-3xl md:text-4xl text-[#4A0C08] font-extrabold mb-4">
                Bagatoli<span className="text-[#CE372D]"> na mídia</span>
              </h1>
              <p className="text-[#4A0C08] mb-6">Confira notícias e reportagens</p>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Link 
                    key={item} 
                    to="/sobrenos" 
                    className="text-sm sm:text-base text-[#602A26] hover:text-[#CE372D] font-semibold transition-colors px-2 sm:px-3"
                  >
                    REDE{item}
                  </Link>
                ))}
              </div>

              <div className="flex justify-center items-center gap-4 mb-6">
                <Link to="/" className="hover:text-gray-600 flex items-center gap-2">
                  <IoLogoInstagram size={20} className="text-[#602A26] hover:text-[#CE372D]" />
                </Link>
              </div>
              
              <div className="flex justify-center">
                <Link
                  to="/seja-franqueado"
                  className="bg-[#CE372D] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-sm sm:text-base"
                >
                  BOTAO
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#ECE5D7]">
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center relative"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
            }}
          >
            <div className="absolute bg-black bg-opacity-30 inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl rubik-dirt-regular font-bold mb-2 sm:mb-4 text-center">
                SEJA UM FRANQUEADO BAGATOLI
              </h2>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 md:mb-8 text-center max-w-2xl">
                Faça parte da família Bagatoli e abra a sua franquia com a confiança de uma marca consolidada e mais de 26 anos de experiência. Na Bagatoli, sabemos o que fazer e como fazer para garantir o sucesso do seu negócio.
              </p>
              <Link
                to="/seja-franqueado"
                className="bg-[#CE372D] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-sm sm:text-base"
              >
                CONHEÇA OS MODELOS DE NEGÓCIO
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-24 bg-[#ECE5D7] flex items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-4xl lg:max-w-6xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center relative rounded-xl lg:rounded-3xl"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
            }}>
            <div className="absolute rounded-xl lg:rounded-3xl bg-black bg-opacity-30 inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl rubik-dirt-regular font-bold mb-2 sm:mb-4 text-center">
                TRABALHE CONOSCO
              </h2>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 md:mb-8 text-center max-w-2xl">
                Se você é apaixonado por pizza e atendimento de qualidade, faça parte do nosso time! Na Bagatoli Pizzaria, valorizamos talentos que desejam crescer junto com a nossa marca.
              </p>
              <Link
                to="/seja-franqueado"
                className="bg-[#CE372D] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-sm sm:text-base"
              >
                ENVIE SEU CURRÍCULO
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
};
export default Sobrenos;