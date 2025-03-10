import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoTimerOutline, IoPizzaOutline, IoStorefrontOutline } from "react-icons/io5";
const Sobrenos = () => {
    return(
        <div>
         <Navbar />
         <div className="min-h-screen bg-white">
        <section className="h-[750px] bg-cover bg-center relative"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}>
                  
          </section>
        
          <section className="py-16 bg-[#CE372D]">
                    <div className="container mx-auto px-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center">
                          <IoPizzaOutline className="w-20 h-20 text-[#4A0C08] mx-auto mb-8" />
                          <h1 className="text-4xl text-[#FCF9F8] font-extrabold mb-4">Qualidade Premium</h1>
                          <h2 className="text-2xl italic text-[#FCC36A] font-extrabold mb-4">"Sabor Italiano, Feito com Alma"</h2>
                          <p className="text-[#FCF9F8] mx-10 mb-4">Pizzas inspiradas na tradição italiana, com ingredientes frescos e sabor autêntico em cada fatia.</p>
                        </div>
                        <div className="text-center">
                          <IoTimerOutline className="w-20 h-20 text-[#4A0C08] mx-auto mb-8" />
                          <h3 className="text-4xl text-[#FCF9F8] font-extrabold mb-4">Entrega Rápida</h3>
                          <h2 className="text-2xl italic text-[#FCC36A] font-extrabold mb-4">"Itália na Sua Porta em 40 Minutos"</h2>
                          <p className="text-[#FCF9F8] mx-10 mb-4">Em 40 minutos, levamos pizzas fresquinhas e saborosas até você, mantendo a tradição italiana.</p>
                        </div>
                        <div className="text-center">
                          <IoStorefrontOutline className="w-20 h-20 text-[#4A0C08] mx-auto mb-8" />
                          <h3 className="text-4xl text-[#FCF9F8] font-extrabold mb-4">Várias Unidades</h3>
                          <h2 className="text-2xl italic text-[#FCC36A] font-extrabold mb-4">"Cantinho da Itália no Seu Bairro"</h2>
                          <p className="text-[#FCF9F8] mx-10 mb-4">Ambiente aconchegante, decoração italiana e atendimento especial para uma experiência completa.</p>
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