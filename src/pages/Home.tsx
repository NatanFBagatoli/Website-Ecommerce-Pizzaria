import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
        <Navbar />
        <div className="min-h-screen bg-white">
        <section className="h-[600px] bg-cover bg-center relative"
        style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}>
            <div className="absolute inset-0 bg-black bg-opacity-50" />
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
        </div>
        </div>
    )
 }; 
 export default Home;