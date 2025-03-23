import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobrenos from "./pages/Sobrenos";
import Unidades from "./pages/Unidades";
import Cardapio from "./pages/Cardapio";
import Pedido from "./pages/Pedido";
import Franqueado from "./pages/Franqueado";
import Aguaverde from "./pages/cidades/Aguaverde";
import Centro from "./pages/cidades/Centro";
import Fortaleza from "./pages/cidades/Fortaleza";
import Velha from "./pages/cidades/Velha";
import Entrecontato from "./pages/Entrecontato";
import Trabalheconosco from "./pages/Trabalheconosco";

function App() {
  
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/sobrenos" element={<Sobrenos />} />
<Route path="/unidades" element={<Unidades />} />
<Route path="/cardapio" element={<Cardapio />} />
<Route path="/pedido" element={<Pedido />} />
<Route path="/franqueado" element={<Franqueado />} />
<Route path="/unidades/aguaverde" element={<Aguaverde />} />
<Route path="/unidades/centro" element={<Centro />} />
<Route path="/unidades/fortaleza" element={<Fortaleza />} />
<Route path="/unidades/velha" element={<Velha />} />
<Route path="/entreemcontato" element={<Entrecontato />} />
<Route path="/trabalheconosco" element={<Trabalheconosco />} />
</Routes>
</BrowserRouter>
  );
}
export default App