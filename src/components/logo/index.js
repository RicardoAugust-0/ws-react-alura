import logo from '../../imgs/logo.svg'
import './index.css'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo_icon'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    );
}

export default Logo;