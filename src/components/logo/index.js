import logo from '../../imgs/logo.svg'
import './index.css'

function Logo() {
    return (
        <div className='logo'>
            <a href='home' draggable='false'><img src={logo} alt='alura_books_icon' draggable='false'></img></a>
            <p><strong>Alura</strong>Books</p>
        </div>
    );
}

export default Logo;