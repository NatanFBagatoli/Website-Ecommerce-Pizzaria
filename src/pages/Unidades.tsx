import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { unidades } from '../constants/unidades';
import { useState } from "react";

const Unidades = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredUnidades = unidades.filter(unidade => {
        const matchState = selectedState ? unidade.estado === selectedState : true;
        const matchCity = selectedCity ? unidade.cidade === selectedCity : true;
        return matchState && matchCity;
    });

    const unidadesPerPage = 8;
    const totalPages = Math.ceil(filteredUnidades.length / unidadesPerPage);
    const indexOfLastUnidades = currentPage * unidadesPerPage;
    const indexOfFirstUnidades = indexOfLastUnidades - unidadesPerPage;
    const currentUnidades = filteredUnidades.slice(indexOfFirstUnidades, indexOfLastUnidades);

    const estadosCidades = {
        'RS': ['Santa Cruz do Sul'],
        'SC': ['Blumenau'],
        'PR': ['Curitiba'],
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 600, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow bg-[#FFFAF0]">
                <section
                    className="h-[200px] sm:h-[300px] md:h-[350px] bg-cover bg-center relative"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
                    }}
                >
                    <div className="absolute bg-black bg-opacity-50 inset-0 flex items-center justify-center">
                        <h1 className="text-3xl sm:text-5xl md:text-7xl rubik-dirt-regular font-bold text-white mb-6 text-center px-4">
                            NOSSAS<span className="text-[#CE372D]"> UNIDADES</span>
                        </h1>
                    </div>
                </section>
                <div className="container mx-auto px-4 sm:px-6 py-8">
                    <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8 sm:mb-12">
                        <select
                            value={selectedState}
                            onChange={(e) => {
                                setSelectedState(e.target.value);
                                setSelectedCity('');
                                setCurrentPage(1);
                            }}
                            className="flex-1 p-2 border rounded-md hover:shadow-md transition-all"
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
                            className="flex-1 p-2 border rounded-md hover:shadow-md transition-all"
                            disabled={!selectedState}
                        >
                            <option value="">Selecione uma Cidade</option>
                            {selectedState && estadosCidades[selectedState as keyof typeof estadosCidades].map((cidade, index) => (
                                <option key={index} value={cidade}>{cidade}</option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 sm:mb-12">
                        {currentUnidades.map((unidade, index) => (
                            <a
                                key={index}
                                href={unidade.url}
                                className="block cursor-pointer transition-transform hover:scale-[1.02]"
                            >
                                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={unidade.image}
                                        alt={unidade.name}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl text-[#602A26] mt-2 text-center font-bold">
                                    {unidade.name}
                                </h3>
                            </a>
                        ))}
                    </div>
                    {totalPages > 1 && (
                        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-3 py-1 sm:px-4 sm:py-2 text-[#602A26] hover:text-[#CE372D] disabled:opacity-50"
                            >
                                Anterior
                            </button>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === index + 1
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
                                className="px-3 py-1 sm:px-4 sm:py-2 text-[#602A26] hover:text-[#CE372D] disabled:opacity-60"
                            >
                                Próxima
                            </button>
                        </div>
                    )}
                </div>
                <section className="bg-[#ECE5D7]">
                    <div
                        className="w-full h-[300px] sm:h-[400px] md:h-[450px] bg-cover bg-center relative"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
                        }}
                    >
                        <div className="absolute bg-black bg-opacity-30 inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-8">
                            <h2 className="text-xl sm:text-2xl rubik-dirt-regular font-bold mb-4 text-center">
                                SEJA UM FRANQUIADO BAGATOLI
                            </h2>
                            <p className="text-sm sm:text-base mb-6 sm:mb-8 text-center max-w-2xl">
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
            </div>
            <Footer />
        </div>
    );
};

export default Unidades;