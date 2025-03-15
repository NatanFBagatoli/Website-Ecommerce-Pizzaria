import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoTimerOutline, IoPizzaOutline, IoStorefrontOutline, IoCalendarNumberOutline, IoCaretForwardOutline, IoCaretBackOutline } from "react-icons/io5";
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
    hidden: { opacity: 0, x: -50 }, 
    visible: { opacity: 1, x: 0 }, 
    exit: { opacity: 0, x: 50 },    
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
              <h1 className="text-4xl font-bold mb-6">SOBRE<span className="text-[#CE372D]"> NÓS</span></h1>
              <h2 className="text-xl font-bold mb-6">Olá! Somos a Pizzaria Bagatoli!</h2>
              <p className="text-1xl  mb-8">Há mais de duas décadas, a Pizzaria Bagatoli nasceu da paixão por unir tradição e sabor, criando uma experiência única que conquista corações.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#CE372D]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <IoPizzaOutline className="w-20 h-20 text-[#4A0C08] mx-auto mb-8" />
                <h1 className="text-2xl text-[#FCF9F8] font-extrabold mb-4">Qualidade Premium</h1>
                <h2 className="text-1xl italic text-[#FCC36A] font-extrabold mb-4">"Sabor Italiano, Feito com Alma"</h2>
                <p className="text-[#FCF9F8] 1xl mx-10 mb-4">Pizzas inspiradas na tradição italiana, com ingredientes frescos e sabor autêntico em cada fatia.</p>
              </div>
              <div className="text-center">
                <IoTimerOutline className="w-20 h-20 text-[#4A0C08] mx-auto mb-8" />
                <h3 className="text-2xl text-[#FCF9F8] font-extrabold mb-4">Entrega Rápida</h3>
                <h2 className="1xl italic text-[#FCC36A] font-extrabold mb-4">"Itália na Sua Porta em 40 Minutos"</h2>
                <p className="text-[#FCF9F8] mx-10 1xl mb-4">Em 40 minutos, levamos pizzas fresquinhas e saborosas até você, mantendo a tradição italiana.</p>
              </div>
              <div className="text-center">
                <IoStorefrontOutline className="w-20 h-20 text-[#4A0C08] mx-auto mb-8" />
                <h3 className="text-2xl text-[#FCF9F8] font-extrabold mb-4">Várias Unidades</h3>
                <h2 className="text-1xl italic text-[#FCC36A] font-extrabold mb-4">"Cantinho da Itália no Seu Bairro"</h2>
                <p className="text-[#FCF9F8] mx-10 mb-4 1xl">Ambiente aconchegante, decoração italiana e atendimento especial para uma experiência completa.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-60 relative bg-[#FFFAF0]">
          <div className="flex flex-col md:flex-row-reverse justify-center gap-8">
            <div className="w-full md:w-1/2">
              <p className="ml-40 mt-4 text-xl text-[#CE372D]">{slides[currentSlide].year}</p>
              <h2 className="ml-40 text-2xl luckiest-guy-regular text-[#4A0C08]">{slides[currentSlide].title}</h2>
              <p className="ml-40 mt-4 text-1xl text-[#4A0C08]">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className="relative bottom-40 left-24 w-full md:w-[700px] h-[500px] overflow-hidden rounded-xl">
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
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-36 top-80 rounded-full transition-colors"
            >
              <IoCaretBackOutline size={30} className="text-[#4A0C08] hover:text-[#CE372D]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-16 top-80 rounded-full transition-colors"
            >
              <IoCaretForwardOutline size={30} className="text-[#4A0C08] hover:text-[#CE372D]" />
            </button>
            <div className="absolute bottom-4 left-0 ml-60 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full ${currentSlide === index ? 'mb-112 bg-[#CE372D] w-4 h-4' : 'bg-[#a09277]/50 w-3 h-3'}`}
                />
              ))}
            </div>
          </div>
          <p className="pl-[700px] text-[#602A26] text-2xl font-bold mb-4 mx-28 ">O SUCESSO DA BAGATOLI</p><span className="pl-[800px] text-[#CE372D] font-bold text-2xl mx-20"> EM NÚMEROS</span>
          <div className="container absolute bottom-10 left-0 right-0 mx-auto px-4 -mt-16 z-10">
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {status.map((stat, index) => (
                <div key={index} className="rounded-xl p-8 text-center transform hover:scale-105 transition-all">
                  <stat.icon className="w-12 h-12 text-[#CE372D] mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">
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
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 bg-[#ECE5D7]">
        <div className="container mx-auto px-4">
            
              <div className="text-center">
              <p className="text-[#4A0C08] mx-10 mb-4">Nossos prêmios</p>
        <h1 className="luckiest-guy-regular text-4xl text-[#4A0C08] font-extrabold mb-4">Conquistas<span className="text-[#CE372D]"> da Bagatoli</span></h1>
        <p className="text-[#4A0C08] mx-10 mb-4">"Ao longo desses 26 anos de história, a Baggio Pizzeria & Focacceria foi reconhecida inúmeras vezes pela excelência e dedicação à qualidade."</p>
                <p className="text-[#4A0C08] mx-10 mb-4">Cada prêmio e conquista reflete o compromisso único da nossa marca com a satisfação e experiência dos clientes..</p>
                </div>
                </div>
        </section>
        <section className="py-24 bg-[#FFFAF0]">

        </section>
        <section className="py-24 bg-[#ECE5D7]">

        </section>
        <div
          className="w-full h-[450px] bg-cover bg-center relative"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Texto1
            </h2>
            <p className="text-lg md:text-xl mb-8 text-center">
              Texto2
            </p>
            <Link
              to="/seja-franqueado"
              className="bg-[#CE372D] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors"
            >
              Texto3
            </Link>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
};
export default Sobrenos;