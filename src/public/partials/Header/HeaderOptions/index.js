import styled from 'styled-components';

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante'];

const OptionsContainer = styled.ul`
    display: flex;
    padding: 0;
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        padding: 0 5px;
        min-width: 130px;
        cursor: pointer;
        font-size: 16px;

        >p {
            transition: all 0.5s ease-out;
            border-radius: 10px;

            >a {
                text-decoration: none;
                color: #000;
            }
        }

        >p:hover,
        >p:focus {
            background-color: #87acd7;
            font-weight: 600;
            padding: 5%;
            font-size: large;
        }
    }
}
`

function HeaderOptions() {
    return (
        <OptionsContainer className='Options'>
            {textOptions.map((text) => (
                <li><p>{text}</p></li>
            ))}
        </OptionsContainer>
    )
}

export default HeaderOptions;