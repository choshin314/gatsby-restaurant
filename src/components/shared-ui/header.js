import React, {useContext} from 'react'
import styled from 'styled-components'

import Nav from './nav'
import {Wrapper, devices} from '../styled-lib'
import {NavContext} from '../../context/navContext'

const Header = () => {
    const {navSolid} = useContext(NavContext);
    return (
        <StyledHeader className={navSolid && "solid"}>
            <Wrapper>
                <Nav />
            </Wrapper>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    position: absolute;
    width: 100%;
    z-index: 110;
    @media(min-width: ${devices.tablet}) {
        position: fixed;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        box-shadow: 0 2px 5px;
        opacity: 0;
        transition: opacity .15s ease-in;
    }
    &.solid::before {
        opacity: 1;
    }
`