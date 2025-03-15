import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCaretForwardOutline, IoCaretBackOutline } from "react-icons/io5";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Pizzas Artesanais"
    },
    {
      url: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Ingredientes Frescos"
    },
    {
      url: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      title: "Sabor Único"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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
              <h1 className="text-5xl font-bold mb-6">Sabor Autêntico da Verdadeira Pizza Italiana</h1>
              <p className="text-xl mb-8">Ingredientes frescos, massa artesanal e receitas tradicionais que fazem cada mordida uma experiência única.</p>
              <Link
                to="/pedido"
                className="bg-[#CE372D] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#B32D24] transition-colors shadow-lg hover:shadow-xl">
                Peça Agora
              </Link>
            </div>
          </div>
        </section>
        

        <section className="py-24 bg-[#FFFAF0]">
          <div className="container mx-auto px-4">

            <div className="relative h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slides[currentSlide].url})`,
                }}>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h2 className="text-white text-4xl font-bold">{slides[currentSlide].title}</h2>
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                <IoCaretBackOutline size={24} className="text-[#CE372D]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                <IoCaretForwardOutline size={24} className="text-[#CE372D]" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </section>
        <section className="py-24 bg-[#FFFAF0]">

        </section>
        <section className="py-24 bg-[#ECE5D7]">

        </section>
        <section className="py-24 bg-[#FFFAF0]">

        </section>
        <section className="py-24 bg-[#FFFAF0]">

        </section>
      </div>
      <Footer />
    </div>
  )
};
export default Home;