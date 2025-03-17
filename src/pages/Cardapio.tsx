import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Search, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { pizzas } from '../constants/pizzas';

const Cardapio = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [activeFilter, setActiveFilter] = useState<'POPULARES' | 'NOVIDADES' | 'CATEGORIAS' | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<'PIZZAS DOCES' | 'PIZZAS' | null>(null);
    const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false); 

    const pizzasPerPage = 12;

    const filteredPizzas = pizzas.filter(pizza => {
        if (selectedState && pizza.estado !== selectedState) return false;
        if (selectedCity && pizza.cidade !== selectedCity) return false;
        if (activeFilter === 'POPULARES' && !pizza.isPopular) return false;
        if (activeFilter === 'NOVIDADES' && !pizza.isNew) return false;
        if (activeFilter === 'CATEGORIAS') {
            if (selectedCategory === 'PIZZAS DOCES' && pizza.categoria !== 'PIZZAS DOCES') return false;
            if (selectedCategory === 'PIZZAS' && pizza.categoria !== 'PIZZAS') return false;
        }
        return true;
    });

    const totalPages = Math.ceil(filteredPizzas.length / pizzasPerPage);
    const indexOfLastPizza = currentPage * pizzasPerPage;
    const indexOfFirstPizza = indexOfLastPizza - pizzasPerPage;
    const currentPizzas = filteredPizzas.slice(indexOfFirstPizza, indexOfLastPizza);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const estadosCidades = {
        'RS': ['Santa Cruz do Sul'],
        'SC': ['Blumenau'],
        'PR': ['Curitiba'],
    };

   
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const menu = document.querySelector('.category-menu');
            if (menu && !menu.contains(event.target as Node)) {
                setIsCategoryMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                        <h1 className="rubik-dirt-regular transform hover:scale-105 transition-all text-5xl md:text-5xl font-bold text-white mb-6">NOSSO<span className="text-[#CE372D]"> CARDÁPIO</span></h1>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
                        <select
                            value={selectedState}
                            onChange={(e) => {
                                setSelectedState(e.target.value);
                                setSelectedCity('');
                            }}
                            className="transform hover:scale-105 transition-all flex-1 p-2 border rounded-md"
                        >
                            <option value="">Selecione um Estado</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="PR">Paraná</option>
                        </select>
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="transform hover:scale-105 transition-all flex-1 p-2 border rounded-md"
                            disabled={!selectedState}
                        >
                            <option value="">Selecione uma Cidade</option>
                            {selectedState && estadosCidades[selectedState as keyof typeof estadosCidades].map((cidade, index) => (
                                <option key={index} value={cidade}>{cidade}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-4 mb-8 relative">
                        <button
                            onClick={() => {
                                setSelectedState('');
                                setSelectedCity('');
                                setActiveFilter(null);
                                setSearchTerm('');
                                setSelectedCategory(null);
                                setIsCategoryMenuOpen(false); 
                            }}
                            className="px-4 py-2 border font-extrabold border-[#CE372D] text-[#CE372D] rounded-md flex items-center gap-2 hover:bg-[#CE372D] hover:text-white transition-colors"
                        >
                            <X size={16} />
                            LIMPAR
                        </button>

                        <div className="font-extrabold flex items-center gap-4">
                            <span className="font-extrabold text-[#602A26]">Filtrar por:</span>
                            {['POPULARES', 'NOVIDADES', 'CATEGORIAS'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => {
                                        setActiveFilter(filter as any);
                                        if (filter === 'CATEGORIAS') {
                                            setIsCategoryMenuOpen(true); 
                                        } else {
                                            setIsCategoryMenuOpen(false); 
                                        }
                                    }}
                                    className={`px-4 py-2 rounded-md transition-colors ${activeFilter === filter
                                        ? 'bg-[#CE372D] text-white'
                                        : 'text-[#CE372D] hover:bg-[#CE372D] hover:text-white'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {isCategoryMenuOpen && ( 
                            <div className="absolute top-11 left-128 bg-white border rounded-md shadow-lg p-4 z-10 category-menu">
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <button 
                                            onClick={() => {
                                                setSelectedCategory('PIZZAS DOCES');
                                                setIsCategoryMenuOpen(false); 
                                            }}
                                            className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === 'PIZZAS DOCES'
                                                ? 'bg-[#CE372D] text-white'
                                                : 'text-[#602A26] hover:bg-[#CE372D] hover:text-white'
                                                }`}
                                        >
                                            Pizzas Doces
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                setSelectedCategory('PIZZAS');
                                                setIsCategoryMenuOpen(false); 
                                            }}
                                            className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === 'PIZZAS'
                                                ? 'bg-[#CE372D] text-white'
                                                : 'text-[#602A26] hover:bg-[#CE372D] hover:text-white'
                                                }`}
                                        >
                                            Pizzas Salgadas
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        <div className="ml-auto relative transform hover:scale-105 transition-all">
                            <input
                                type="text"
                                placeholder="BUSCAR"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border rounded-md"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentPizzas.map((pizza, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                                {pizza.isNew && (
                                    <div className="transform hover:scale-105 transition-all absolute top-4 left-4 bg-[#CE372D] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                       ✨ NOVO
                                    </div>
                                )}
                                {pizza.isPopular && (
                                    <div className="transform hover:scale-105 transition-all absolute top-4 right-4 bg-[#F4D03F] text-[#602A26] px-3 py-1 rounded-full text-sm font-semibold">
                                        ⭐ MAIS PEDIDA 
                                    </div>
                                )}
                                <img
                                    src={pizza.imagem}
                                    alt={pizza.nome}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <div className="text-sm text-[#602A26] font-semibold mb-2">{pizza.categoria}</div>
                                    <h3 className="text-lg text-[#CE372D] font-bold transform hover:scale-105 transition-all duration-300 mb-2">{pizza.nome}</h3>
                                    <p className="text-[#602A26] text-sm mb-4 h-20 overflow-hidden">{pizza.ingredientes}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#CE372D] transform hover:scale-105 duration-300 transition-all text-xl font-bold">{pizza.preco}</span>
                                        <Link
                                            to="/pedido"
                                            className="bg-[#CE372D] text-white px-7 py-3 rounded-md hover:bg-[#B32D24] duration-300 transform hover:scale-105 transition-colors"
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