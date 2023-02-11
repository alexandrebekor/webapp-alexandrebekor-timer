import { HeaderContainer } from './styles'
import { Alarm, Scroll } from 'phosphor-react'

import logoBekor from '../../assets/bekor.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoBekor} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Alarm size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
