import Cabecalho from "./components/Cabecalho";
import Descricao from "./components/Descricao";
import Curiosidades from "./components/Curiosidades";
import Like from "./components/Like";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Cabecalho />
      <Descricao />
      <Curiosidades />
      <Like />
    </div>
  );
}

export default App;