import React from 'react'
import styled from 'styled-components'

import NavMain from './navMain'
import NavMobile from './navMobile'
import NavLinks from './navLinks'

const Nav = () => {
    return (
        <NavContainer>
            <div>LOGO</div>
            <NavMain><NavLinks /></NavMain>
            <NavMobile><NavLinks /></NavMobile>
        </NavContainer>
    )
}

export default Nav

const NavContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
`