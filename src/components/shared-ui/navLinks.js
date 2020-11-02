import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const NavLinks = (props) => {
    return (
        <>
        <NavItem><Link to="/menu" activeClassName="active">Menu</Link></NavItem>
        <NavItem><Link to="/about" activeClassName="active">About</Link></NavItem>
        <NavItem><Link to="/location" activeClassName="active">Location</Link></NavItem>
        <NavItem><span className="snipcart-checkout">View Order (<span class="snipcart-items-count">0</span>)</span></NavItem>
        </>
    )
}

export default NavLinks

const NavItem = styled.li`
    cursor: pointer;
    a, span.snipcart-checkout {
        color: var(--primary);
        text-decoration: none;
        font-size: ${props => props.mobile ? "1.5rem" : "1.2rem"};
        position: relative;
        &.active::after {
            content: '';
            color: inherit;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--primary);
        }
    }
    a::before, span.snipcart-checkout::before {
        content: '';
        color: inherit;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--primary);
        transition: transform .2s ease-in-out;
        transform: scaleX(0);
        transform-origin: right;
    }
    a:hover::before, span.snipcart-checkout:hover::before {
        transform: scaleX(1);
        transform-origin: left;
    }
`