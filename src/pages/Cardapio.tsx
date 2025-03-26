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
        if (searchTerm && !pizza.nome.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });

    const totalPages = Math.ceil(filteredPizzas.length / pizzasPerPage);
    const indexOfLastPizza = currentPage * pizzasPerPage;
    const indexOfFirstPizza = indexOfLastPizza - pizzasPerPage;
    const currentPizzas = filteredPizzas.slice(indexOfFirstPizza, indexOfLastPizza);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-[#FFFAF0]">
                <section
                    className="h-[250px] sm:h-[300px] md:h-[350px] bg-cover bg-center relative"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
                    }}
                >
                    <div className="absolute bg-black bg-opacity-50 inset-0 flex items-center justify-center">
                        <h1 className="rubik-dirt-regular text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 transform hover:scale-105 transition-all">
                            NOSSO<span className="text-[#CE372D]"> CARDÁPIO</span>
                        </h1>
                    </div>
                </section>
                <div className="container mx-auto px-4 sm:px-6 py-6 md:py-8">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto mb-8 md:mb-12">
                        <select
                            value={selectedState}
                            onChange={(e) => {
                                setSelectedState(e.target.value);
                                setSelectedCity('');
                                setCurrentPage(1);
                            }}
                            className="flex-1 p-2 border rounded-md text-sm sm:text-base transform hover:scale-105 transition-all"
                        >
                            <option value="">Selecione um Estado</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="PR">Paraná</option>
                        </select>
                        <select
                            value={selectedCity}
                            onChange={(e) => {
                                setSelectedCity(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="flex-1 p-2 border rounded-md text-sm sm:text-base transform hover:scale-105 transition-all"
                            disabled={!selectedState}
                        >
                            <option value="">Selecione uma Cidade</option>
                            {selectedState && estadosCidades[selectedState as keyof typeof estadosCidades].map((cidade, index) => (
                                <option key={index} value={cidade}>{cidade}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 mb-6 md:mb-8 relative">
                        <button
                            onClick={() => {
                                setSelectedState('');
                                setSelectedCity('');
                                setActiveFilter(null);
                                setSearchTerm('');
                                setSelectedCategory(null);
                                setIsCategoryMenuOpen(false);
                                setCurrentPage(1);
                            }}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 border font-extrabold border-[#CE372D] text-[#CE372D] rounded-md flex items-center gap-1 sm:gap-2 hover:bg-[#CE372D] hover:text-white transition-colors text-sm sm:text-base"
                        >
                            <X size={14} className="sm:w-4" />
                            LIMPAR
                        </button>

                        <div className="font-extrabold flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                            <span className="hidden sm:inline font-extrabold text-[#602A26]">Filtrar por:</span>
                            {['POPULARES', 'NOVIDADES', 'CATEGORIAS'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => {
                                        setActiveFilter(filter === activeFilter ? null : filter as any);
                                        if (filter === 'CATEGORIAS') {
                                            setIsCategoryMenuOpen(!isCategoryMenuOpen);
                                        } else {
                                            setIsCategoryMenuOpen(false);
                                        }
                                        setCurrentPage(1);
                                    }}
                                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base ${
                                        activeFilter === filter
                                            ? 'bg-[#CE372D] text-white'
                                            : 'text-[#CE372D] hover:bg-[#CE372D] hover:text-white'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {isCategoryMenuOpen && (
                            <div className="absolute top-full left-0 mt-2 w-full sm:w-auto bg-white border rounded-md shadow-lg p-2 sm:p-4 z-10 category-menu">
                                <ul className="flex flex-col gap-1 sm:gap-2">
                                    <li>
                                        <button
                                            onClick={() => {
                                                setSelectedCategory('PIZZAS DOCES');
                                                setIsCategoryMenuOpen(false);
                                                setCurrentPage(1);
                                            }}
                                            className={`w-full text-left px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base ${
                                                selectedCategory === 'PIZZAS DOCES'
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
                                                setCurrentPage(1);
                                            }}
                                            className={`w-full text-left px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-colors text-sm sm:text-base ${
                                                selectedCategory === 'PIZZAS'
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

                        <div className="w-full md:w-auto relative transform hover:scale-105 transition-all mt-2 sm:mt-0">
                            <input
                                type="text"
                                placeholder="BUSCAR"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="pl-8 pr-3 py-1.5 sm:pl-10 sm:pr-4 sm:py-2 border rounded-md w-full text-sm sm:text-base"
                            />
                            <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        </div>
                    </div>
                    {currentPizzas.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                                {currentPizzas.map((pizza, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md sm:shadow-lg overflow-hidden relative hover:shadow-xl transition-shadow duration-300">
                                        {pizza.isNew && (
                                            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#CE372D] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                                                ✨ NOVO
                                            </div>
                                        )}
                                        {pizza.isPopular && (
                                            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-[#F4D03F] text-[#602A26] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                                                ⭐ MAIS PEDIDA
                                            </div>
                                        )}
                                        <img
                                            src={pizza.imagem}
                                            alt={pizza.nome}
                                            className="w-full h-40 sm:h-48 object-cover"
                                        />
                                        <div className="p-3 sm:p-4">
                                            <div className="text-xs sm:text-sm text-[#602A26] font-semibold mb-1 sm:mb-2">{pizza.categoria}</div>
                                            <h3 className="text-base sm:text-lg text-[#CE372D] font-bold mb-1 sm:mb-2">{pizza.nome}</h3>
                                            <p className="text-[#602A26] text-xs sm:text-sm mb-2 sm:mb-4 h-12 sm:h-20 overflow-hidden">{pizza.ingredientes}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[#CE372D] text-base sm:text-xl font-bold">{pizza.preco}</span>
                                                <Link
                                                    to="/pedido"
                                                    className="bg-[#CE372D] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-md hover:bg-[#B32D24] transition-colors text-xs sm:text-sm"
                                                >
                                                    Pedir
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center gap-1 sm:gap-2 mt-6 sm:mt-8">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="px-2 py-1 sm:px-3 sm:py-1.5 text-[#602A26] hover:text-[#CE372D] disabled:opacity-50 text-sm sm:text-base"
                                    >
                                        Anterior
                                    </button>
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                                                currentPage === index + 1
                                                    ? 'bg-[#CE372D] text-white'
                                                    : 'text-[#602A26] hover:text-[#CE372D]'
                                            } text-sm sm:text-base`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="px-2 py-1 sm:px-3 sm:py-1.5 text-[#602A26] hover:text-[#CE372D] disabled:opacity-60 text-sm sm:text-base"
                                    >
                                        Próxima
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <h3 className="text-xl sm:text-2xl text-[#CE372D] font-bold mb-4">Nenhuma pizza encontrada</h3>
                            <p className="text-[#602A26]">Tente ajustar seus filtros de busca</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Cardapio;