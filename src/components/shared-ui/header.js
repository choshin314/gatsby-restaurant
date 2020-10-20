import React from 'react'
import styled from 'styled-components'

import Nav from './nav'
import {Wrapper, devices} from '../styled-lib'

const Header = () => {
    return (
        <StyledHeader>
            <Wrapper>
                <Nav />
            </Wrapper>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    height: 4rem;
    background: rgba(255,255,255,.9);
    
    z-index: 110;
    @media(min-width: ${devices.tablet}) {
        position: fixed;
    }
`