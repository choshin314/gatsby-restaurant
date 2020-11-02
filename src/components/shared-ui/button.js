import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Button = ({onClick, children}) => (
    <StyledBtn onClick={onClick}>
        {children}
        <FontAwesomeIcon icon={faArrowRight} />
    </StyledBtn>
)

export default Button;

export const ButtonLink = ({to, children}) => (
    <StyledLink to={to}>
        {children}
        <FontAwesomeIcon icon={faArrowRight} />
    </StyledLink>
)

const StyledBtn = styled.button`
    position: relative;
    background: transparent;
    font-family: 'Manrope', 'Montserrat', sans-serif;
    font-weight: 700;
    color: var(--primary);
    border: none;
    padding: 0;
    cursor: pointer;
    &:active, &:focus {
        outline-style: none;
    }
    & > svg {
        margin-left: .5rem;
        transition: opacity .2s ease-out, transform .2s ease-out;
        transform: translateX(-110%);
        opacity: 0;
    }
    &:hover > svg, &:active > svg {
        transform: translateX(0);
        opacity: 1;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    position: relative;
    background: transparent;
    font-family: 'Manrope', 'Montserrat', sans-serif;
    font-weight: 700;
    color: var(--primary);
    border: none;
    padding: 0;
    cursor: pointer;
    &:active, &:focus {
        outline-style: none;
    }
    & > svg {
        margin-left: .5rem;
        transition: opacity .2s ease-out, transform .2s ease-out;
        transform: translateX(-110%);
        opacity: 0;
    }
    &:hover > svg, &:active > svg {
        transform: translateX(0);
        opacity: 1;
    }
`