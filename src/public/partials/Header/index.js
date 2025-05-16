import Logo from '../../../components/Logo'
import HeaderOptions from '../../../public/partials/Header/HeaderOptions';
import HeaderIcons from '../../../public/partials/Header/HeaderIcons'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    box-shadow: 1px 2px 6px #fff;
    display: flex;
    height: 10vh;
    justify-content: space-between;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <HeaderOptions />
            <HeaderIcons />
        </HeaderContainer>
    )
}

export default Header;