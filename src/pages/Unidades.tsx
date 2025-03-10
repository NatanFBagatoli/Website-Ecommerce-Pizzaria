import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { unidades } from '../constants/unidades';
import { useState } from "react";

const Unidades = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [currentPage, setCurrentPage] = useState(1);

    const unidadesPerPage = 8;
    const totalPages = Math.ceil(unidades.length / unidadesPerPage);

    const indexOfLastUnidades = currentPage * unidadesPerPage;
    const indexOfFirstUnidades = indexOfLastUnidades - unidadesPerPage;
    const currentUnidades = unidades.slice(indexOfFirstUnidades, indexOfLastUnidades);


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
                        backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
                    }}
                >
                    <div className="absolute bg-black bg-opacity-50 inset-0 flex items-center justify-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">NOSSAS<span className="text-[#CE372D]"> UNIDADES</span></h1>
                    </div>
                </section>
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
                        <select
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className="flex-1 p-3 border rounded-md bg-white"
                        >
                            <option value="">Selecione um estado</option>
                            <option value="PR">Rio Grande do Sul</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">Paraná</option>
                        </select>
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="flex-1 p-3 border rounded-md bg-white"
                        >
                            <option value="">Selecione uma cidade</option>
                            <option value="CURITIBA">Santa Cruz do Sul</option>
                            <option value="FLORIPA">Blumenau</option>
                            <option value="SP">Curitiba</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {currentUnidades.map((unidade, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={unidade.image}
                                    alt={unidade.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl text-[#602A26] font-bold">{unidade.name}</h3>
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
export default Unidades;