import React from 'react'
import styled from 'styled-components'

import {devices} from '../styled-lib'

const NavMain = (props) => {
    return (
        <Nav>
            <ul>
                {props.children}
            </ul>
        </Nav>
    )
}

export default NavMain

const Nav = styled.nav`
    display: none;
    @media(min-width: ${devices.tablet}) {
        display: flex;
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            list-style: none;
            li {
                margin-right: 3rem;
            }
        }
    }
    
`