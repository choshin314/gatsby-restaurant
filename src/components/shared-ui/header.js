import React from 'react'
import styled from 'styled-components'

import Nav from './nav'
import {Wrapper} from '../styled-lib'

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
    box-shadow: 0px 2px 5px 0px var(--dark-grey);
`