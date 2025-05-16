import profile_Icon from '../../../../imgs/perfil.svg'
import bag from '../../../../imgs/sacola.svg'
import './index.css'

const icons = [profile_Icon, bag];

function HeaderIcons() {
    return (
        <ul className='Icons'>
            {icons.map((icon) => (
                <li><img src={icon} alt='logo_icon'></img></li>
            ))}
        </ul>
    )
}

export default HeaderIcons;