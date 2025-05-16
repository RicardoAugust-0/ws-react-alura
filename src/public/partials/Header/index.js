import Logo from '../../../components/Logo'
import HeaderOptions from '../../../public/partials/Header/HeaderOptions';
import HeaderIcons from '../../../public/partials/Header/HeaderIcons'

function Header() {
    return (
        <header className='App-Header'>
            <Logo />
            <HeaderOptions />
            <HeaderIcons />
        </header>
    )
}

export default Header;