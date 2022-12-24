import gundam1 from './gundam1.jpg';
import gundam2 from './gundam2.jpg';
import gundam3 from './gundam3.jpg';
import gundam4 from './gundam4.jpg';
import gundam5 from './gundam5.jpg';

import Cards from './components/Card';
import Piedepagina from './components/Footer';
import Titulo from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo titulo='Galería de Imágenes con React' />
      </header>

      <body>
        <div className="container mt-5 mb-5">
          <Cards imagen={gundam4} titulo='Gundam Barbatos' descripcion='Mobile Suit Gundam IRON-BLOODED ORPHANS' />
          <Cards imagen={gundam3} titulo='ZZ Gundam' descripcion='Mobile Suit Transformable Prototipo de uso Newtype de Propósito General' />
          <Cards imagen={gundam5} titulo='Wing Gundam Zero' descripcion='Mobile Suit Prototipo de Propósito General Transformable' />
        </div>
        <div className="container2 mt-5 mb-5">
          <Cards imagen={gundam1} titulo='Gundam Red Frame' descripcion='Mobile Suit Prototipo de Propósito General' />
          <Cards imagen={gundam2} titulo='RX-178 Gundam Mk-II' descripcion='Mobile Suit Prototipo de Propósito General' />
        </div>
      </body>

      <footer>
        <Piedepagina />
      </footer>
    </div>
  );
}

export default App;
