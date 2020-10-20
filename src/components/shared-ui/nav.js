import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import NavMain from './navMain'
import NavMobile from './navMobile'
import NavLinks from './navLinks'
import logo from '../../images/logoMain.svg'
import {devices} from '../styled-lib'


const Nav = () => {
    return (
        <NavContainer>
            <Logo to="/"><img src={logo} alt="Mala logo" /></Logo>
            <NavMain><NavLinks /></NavMain>
            <NavMobile><NavLinks /></NavMobile>
        </NavContainer>
    )
}

export default Nav

const NavContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    @media(min-width: ${devices.tablet}) {
        justify-content: flex-end;
    }
`
const Logo = styled(Link)`
    width: 100px;
    border: var(--primary) 3px solid;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        object-fit: cover;
    }
    
    @media(min-width: ${devices.tablet}) {
        position: absolute;
        left: 0;
        top: 2rem;
    }
`