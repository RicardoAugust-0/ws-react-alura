import styled from 'styled-components';
import logo from '../../imgs/logo.svg'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin: 0;
    justify-content: center;
    align-items: center;
`
const LogoImg = styled.img`
    width: 40px;
    margin-right: 20px;
`
const LogoText = styled.p`
    margin: 0;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg
                src={logo}
                alt='alura_books_icon'
                draggable='false'
            ></LogoImg>
            <LogoText><strong>Alura</strong>Books</LogoText>
        </LogoContainer>
    );
}

export default Logo;