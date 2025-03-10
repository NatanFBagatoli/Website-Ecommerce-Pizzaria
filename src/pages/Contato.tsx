import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contato = () => {
    return(
        <div>
         <Navbar />
         <div className="min-h-screen bg-white">
                <section className="h-[350px] bg-cover bg-center relative"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
                    }}>
                    <div className="container mx-auto h-full flex items-center relative z-10">
                        <div className="text-white max-w-2xl px-4">


                        </div>
                    </div>
                </section>
            </div>
         <Footer />
        
        </div>
    )
 }; 
 export default Contato;