import './index.css'

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante'];

function HeaderOptions() {
    return (
        <ul className='Options'>
            {textOptions.map((text) => (
                <li><p>{text}</p></li>
            ))}
        </ul>
    )
}

export default HeaderOptions;