import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Search, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { pizzas } from '../constants/pizzas';


const Cardapio = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [activeFilter, setActiveFilter] = useState<'UNIDADES' | 'CATEGORIAS' | 'INGREDIENTES' | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const pizzasPerPage = 12;
    const totalPages = Math.ceil(pizzas.length / pizzasPerPage);

    const indexOfLastPizza = currentPage * pizzasPerPage;
    const indexOfFirstPizza = indexOfLastPizza - pizzasPerPage;
    const currentPizzas = pizzas.slice(indexOfFirstPizza, indexOfLastPizza);

    
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-[#FFFAF0]">
                <section
                    className="h-[350px] bg-cover bg-center relative"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
                    }}
                >
                    <div className="absolute bg-black bg-opacity-50 inset-0 flex items-center justify-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">NOSSO<span className="text-[#CE372D]"> CARDÁPIO</span></h1>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
                        <select
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className="flex-1 p-2 border rounded-md"
                        >
                            <option value="">Selecione um Estado</option>
                            <option value="RS">Rio Grande Do Sul</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="PR">Paraná</option>
                        </select>
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="flex-1 p-2 border rounded-md"
                        >
                            <option value="">Selecione uma Cidade</option>
                            <option value="RS">Santa Cruz do Sul</option>
                            <option value="SC">Blumenau</option>
                            <option value="PR">Curitiba</option>
                        </select>
                    </div>


                    <div className="flex items-center gap-4 mb-8">
                        <button
                            onClick={() => {
                                setSelectedState('');
                                setSelectedCity('');
                                setActiveFilter(null);
                            }}
                            className="px-4 py-2 border font-extrabold border-[#CE372D] text-[#CE372D] rounded-md flex items-center gap-2 hover:bg-[#CE372D] hover:text-white transition-colors"
                        >
                            <X size={16} />
                            LIMPAR
                        </button>

                        <div className="font-extrabold flex items-center gap-4">
                            <span className="font-extrabold text-[#602A26]">Filtrar por:</span>
                            {['UNIDADES', 'CATEGORIAS', 'INGREDIENTES'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter as any)}
                                    className={`px-4 py-2 rounded-md transition-colors ${activeFilter === filter
                                        ? 'bg-[#CE372D] text-white'
                                        : 'text-[#CE372D] hover:bg-[#CE372D] hover:text-white'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div className="ml-auto relative">
                            <input
                                type="text"
                                placeholder="BUSCAR"
                                className="pl-10 pr-4 py-2 border rounded-md"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentPizzas.map((pizza, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={pizza.imagem}
                                    alt={pizza.nome}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <div className="text-sm text-[#602A26] font-semibold mb-2">{pizza.categoria}</div>
                                    <h3 className="text-lg text-[#CE372D] font-bold mb-2">{pizza.nome}</h3>
                                    <p className="text-[#602A26] text-sm mb-4 h-20 overflow-hidden">{pizza.ingredientes}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#CE372D] font-bold">{pizza.preco}</span>
                                        <Link
                                            to="/pedido"
                                            className="bg-[#CE372D] text-white px-4 py-2 rounded-md hover:bg-[#B32D24] transition-colors"
                                        >
                                            Pedir
                                        </Link>
                                    </div>
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
            </div>
            <Footer />
        </div>
    );
};

export default Cardapio;