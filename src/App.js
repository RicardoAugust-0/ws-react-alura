import './App.css';
import Logo from './components/logo/index'

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante'];

function App() {
  return (
    <div className='App'>
      <header className='App-Header'>
        <Logo />
        <ul className='Options'>
          {textOptions.map((text) => (
            <li><p><a href='#'>{text}</a></p></li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
