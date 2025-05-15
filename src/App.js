import './App.css';
import Logo from './components/Logo'
import profile_Icon from './imgs/perfil.svg';
import bag from './imgs/sacola.svg';

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante'];
const icons = [profile_Icon, bag];

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

        <ul className='Icons'>
          {icons.map((icon) => (
            <li><img src={icon} alt='logo_icon'></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;