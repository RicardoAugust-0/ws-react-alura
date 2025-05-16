import profile_Icon from '../../../../imgs/perfil.svg'
import bag from '../../../../imgs/sacola.svg'
import styled from 'styled-components';

const IconsContainer = styled.ul`
        display: flex;
        min-width: 230px;
        padding: 0;
        justify-content: center;
        align-items: center;
`
const Icon = styled.li`
        margin-left: 25px;
        width: 25px;
`

const icons = [profile_Icon, bag];

function HeaderIcons() {
    return (
        <IconsContainer>
            {icons.map((icon) => (
                <Icon><img src={icon} alt='logo_icon'></img></Icon>
            ))}
        </IconsContainer>
    )
}

export default HeaderIcons;