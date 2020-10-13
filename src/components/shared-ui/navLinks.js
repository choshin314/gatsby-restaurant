import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const NavLinks = (props) => {
    return (
        <>
        <NavItem><Link to="/menu">Menu</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/location">Location</Link></NavItem>
        </>
    )
}

export default NavLinks

const NavItem = styled.li`
    a {
        color: var(--primary);
        text-decoration: none;
        font-size: ${props => props.mobile ? "1.5rem" : "1.2rem"};
    }
`