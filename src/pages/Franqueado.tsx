import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { IoTimeOutline, IoAlertCircleOutline, IoBarChartOutline, IoCashOutline, IoCalendarNumberOutline, IoCaretForwardOutline, IoCaretBackOutline, IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoLogoWhatsapp } from "react-icons/io5";
import { Store, CircleDollarSign, Pizza, Mail } from "lucide-react"
import { useInView } from "../hooks/useInView";
import { useState } from 'react';
import { slides } from "../constants/slides";
import { Link } from "react-router-dom";

const Franquiado = () => {
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
  const investmentStats = [
    {
      icon: IoCashOutline,
      title: "INVESTIMENTO INICIAL",
      description: "entre 750 mil e 950 mil"
    },
    {
      icon: IoBarChartOutline,
      title: "FUNDO DE MARKETING",
      description: "1,5% do faturamento bruto mensal"
    },
    {
      icon: IoAlertCircleOutline,
      title: "ROYALTIES",
      description: "5% do faturamento bruto mensal"
    },
    {
      icon: IoTimeOutline,
      title: "PRAZO DE RETORNO",
      description: "entre 24 e 30 meses"
    }
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
      <section className="h-[650px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}>
        <div className="absolute bg-black bg-opacity-30 inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl rubik-dirt-regular font-bold text-white mb-6">SEJA<span className="text-[#CE372D]"> FRANQUEADO</span></h1>
        </div>
      </section>
      <section className="py-48 relative bg-[#0C250B]">
        <div className="flex flex-col md:flex-row-reverse justify-center gap-8">
          <div className="w-full md:w-1/2">
            <p className="ml-40 mt-40 text-xl text-[#ffffff]">{slides[currentSlide].year}</p>
            <h2 className="ml-40 text-2xl luckiest-guy-regular text-[#CE372D]">{slides[currentSlide].title}</h2>
            <p className="ml-40 mt-4 text-1xl text-[#ffffff]">
              {slides[currentSlide].description}
            </p>
          </div>
          <div className="relative left-24 w-full md:w-[700px] h-[500px] overflow-hidden rounded-xl">
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
            className="absolute left-36 top-110 rounded-full transition-colors"
          >
            <IoCaretBackOutline size={30} className="text-[#CE372D] hover:text-[#4A0C08]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-16 top-110 rounded-full transition-colors"
          >
            <IoCaretForwardOutline size={30} className="text-[#CE372D] hover:text-[#4A0C08]" />
          </button>
          <div className="absolute top-180 left-0 ml-52 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full ${currentSlide === index ? 'mb-116 bg-[#CE372D] w-3 h-3' : 'bg-[#ffffff]/50 w-3 h-3'}`}
              />
            ))}
          </div>
        </div>

      </section>
      <div className="flex flex-col items-center mt-12 md:mt-16 lg:mt-20">
        <p className="text-2xl sm:text-3xl md:text-4xl text-[#602A26] font-bold mb-2 luckiest-guy-regular">O SUCESSO DA BAGATOLI</p>
        <span className="luckiest-guy-regular text-[#CE372D] font-bold text-2xl sm:text-3xl md:text-4xl">EM NÚMEROS</span>
      </div>

      <div className="mt-8 md:mt-12 lg:mt-16 mb-28">
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
      <section className="py-24 bg-[#F4EDDF]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-[#4A0C08] mx-10 mb-4">Nossos prêmios</p>
            <h1 className="luckiest-guy-regular text-4xl text-[#602A26] font-extrabold mb-4">Conquistas<span className="text-[#CE372D]"> da Bagatoli</span></h1>
            <p className="text-[#4A0C08] mx-10 mb-4">"Ao longo desses 26 anos de história, a Bagatoli Pizzaria foi reconhecida inúmeras vezes pela excelência e dedicação à qualidade."</p>
            <p className="text-[#4A0C08] mx-10 mb-4">Cada prêmio e conquista reflete o compromisso único da nossa marca com a satisfação e experiência dos clientes..</p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 bg-[#FDF7F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#602A26] text-lg md:text-xl font-medium mb-4">
              Nosso Modelo de Negócio
            </h2>
            <h1 className="luckiest-guy-regular text-4xl md:text-5xl font-bold mb-6 text-[#4A0C08]">
              <span className="text-[#CE372D]">PIZZARIA<span className="text-[#164615]"> BAGATOLI</span></span>
            </h1>
          </div>

          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
              <h3 className="luckiest-guy-regular text-2xl md:text-3xl font-bold text-[#4A0C08] mb-4 md:mb-0 md:w-1/3">
                Experiência<br />e Evolução
              </h3>
              <p className="text-[#4A0C08] md:w-5/5">
                Nosso modelo de negócio é o resultado de mais de 26 anos de experiência, evoluindo constantemente para acompanhar as tendências e exigências do mercado. Essa longa trajetória nos permite oferecer uma experiência excepcional, sustentado por um profundo conhecimento e aprendizados ao longo do caminho.
              </p>
            </div>
          </div>
          <h3 className="luckiest-guy-regular text-2xl md:text-3xl font-bold text-[#4A0C08] text-center mb-8">
            Modelo de Negócio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#FEF3E3] rounded-3xl p-8">
            <div className="space-y-4">
              <h4 className="luckiest-guy-regular text-xl font-bold text-[#CE372D]">
                Unidades com Salão Acolhedor
              </h4>
              <p className="text-[#4A0C08]">
                Nossas unidades possuem salões com capacidade para acomodar entre 8 e 12 mesas, atendendo aproximadamente 40 pessoas. Este ambiente agradável e acolhedor representa cerca de <span className="font-bold">25% do total de nossas vendas</span>, proporcionando uma experiência única para os clientes que preferem desfrutar de suas refeições no local.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="luckiest-guy-regular text-xl font-bold text-[#CE372D]">
                Foco no Delivery
              </h4>
              <p className="text-[#4A0C08]">
                Delivery é o principal motor de nossas operações, respondendo por aproximadamente <span className="font-bold">60% do volume total de vendas</span>. Nossa operação de entrega é eficiente e rápida, garantindo que a pizza chegue sempre quente e saborosa na casa dos nossos clientes.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="luckiest-guy-regular text-xl font-bold text-[#CE372D]">
                Atendimento de Balcão Ágil
              </h4>
              <p className="text-[#4A0C08]">
                Oferecemos um serviço de balcão rápido e ágil, ideal para clientes que estão em movimento. Este atendimento prático e eficiente representa cerca de <span className="font-bold">15% das vendas de cada unidade</span>, proporcionando conveniência sem comprometer a qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-8 bg-[#FDF7F0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-[#CE372D]" />
                </div>
                <h3 className="text-xl font-bold text-[#602A26] mb-2">{stat.title}</h3>
                <p className="text-[#4A0C08]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-24 relative">
  <div className="container mx-auto flex justify-center relative">
    <img
      src="/src/assets/toalha.webp"
      alt="Toalha"
      className="w-[1500px] h-[1000px]"
    />
    <div className="absolute inset-0 flex flex-col items-center text-center  px-4">
      <p className="text-2xl md:text-2xl text-white">Nossos diferenciais</p>
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">
        Quais as<span className="text-[#F9BB73]"> vantagens</span> de ser um
        <p>franqueado Bagatoli?</p>
      </h1>
      <div className="flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
          <div className="bg-[#FFF1D7] px-6 py-4 rounded-md text-left h-[160px] md:h-[120px] w-[400px] md-w-[200px]">
          <img src="/src/assets/prato.png" alt="Prato"className="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-2 max-w-full h-auto" />
            <p>Com mais de 26 anos de experiência, aprendemos não só o que fazer, mas também a melhor forma de fazer.</p>
          </div>
          <div className="bg-[#FFF1D7] px-6 py-4 rounded-md text-left h-[180px] md:h-[120px]">
          <img src="/src/assets/prato.png" alt="Prato"className="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-2 max-w-full h-auto" />
            <p>Múltiplos canais de venda, incluindo salão acolhedor, atendimento rápido de balcão, e delivery eficiente, com pedidos via aplicativo e site.</p>
          </div>
          <div className="bg-[#FFF1D7] px-6 py-4 rounded-md text-left h-[180px] md:h-[120px] w-[350px] md-w-[200px]">
          <img src="/src/assets/prato.png" alt="Prato"className="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-2 max-w-full h-auto" />
            <p>Treinamento e suporte integral aos franqueados, desde a escolha do ponto comercial até a inauguração e operação diária da unidade.</p>
          </div>
          <div className="bg-[#FFF1D7] px-6 py-4 rounded-md text-left h-[180px] md:h-[120px] w-[600px] md-w-[200px]">
            <p>
            Modelo de negócio testado e comprovado, com processos otimizados e estratégias para atingir alta lucratividade e um retorno rápido sobre o investimento.
            </p>
            <img src="/src/assets/prato.png" alt="Prato"className="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-2 max-w-full h-auto" />
          </div>
          <div className="bg-[#FFF1D7] px-6 py-4 rounded-md text-left h-[140px] md:h-[120px]">
          <img src="/src/assets/prato.png" alt="Prato"className="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-2 max-w-full h-auto" />
            <p>Marketing e publicidade eficientes, com campanhas regionais e nacionais para aumentar a visibilidade da marca e atrair mais clientes.</p>
          </div>
          <div className="bg-[#FFF1D7] px-6 py-4 rounded-md text-nowrap h-[100px] md:h-[120px] w-[400px] md-w-[200px]">
            <p>
            Marca consolidada e respeitada no mercado.
            </p>
            <img src="/src/assets/prato.png" alt="Prato"className="items-center inline-block w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     <section className="bg-[#ECE5D7]">
          <div
            className="w-full h-[350px] md:h-[800px] bg-cover bg-center relative"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
            }}
          >
            <div className="absolute bg-black bg-opacity-30 inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
            <h2 className="text-sm md:text-base max-w-md mb-4 md:max-w-2xl">
            SEJA UM FRANQUEADO
              </h2>
              <h1 className="text-xl md:text-4xl rubik-dirt-regular font-bold mb-3 md:mb-4">
                CRESÇA COM A BAGATOLI
              </h1>
              <p className="text-sm md:text-base mb-6 md:mb-8 max-w-md md:max-w-2xl">
              Com 26 anos de experiência, oferecemos o suporte e o know-how necessários para você abrir a sua própria unidade Baggio. Venha fazer parte da nossa família e compartilhe este sucesso!
              </p>
              <Link
                to="/seja-franqueado"
                className="bg-[#CE372D] text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold hover:bg-[#602A26] transition-colors text-sm md:text-base"
              >
                SEJA UM FRANQUEADO
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
      <Footer />
    </div>
  )
};
export default Franquiado;