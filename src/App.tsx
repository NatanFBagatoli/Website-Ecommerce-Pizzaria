import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobrenos from "./pages/Sobrenos";
import Unidades from "./pages/Unidades";
import Cardapio from "./pages/Cardapio";
import Pedido from "./pages/Pedido";
import Contato from "./pages/Contato";
import Franquiado from "./pages/Franquiado";

function App() {
  
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/sobrenos" element={<Sobrenos />} />
<Route path="/unidades" element={<Unidades />} />
<Route path="/cardapio" element={<Cardapio />} />
<Route path="/pedido" element={<Pedido />} />
<Route path="/contato" element={<Contato />} />
<Route path="/franquiado" element={<Franquiado />} />
</Routes>
</BrowserRouter>
  );
}
export default App