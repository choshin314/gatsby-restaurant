import React from 'react'
import styled from 'styled-components'

import logo from '../../images/logoFooter.png'

const Footer = () => {
    return (
        <StyledFooter>
            <Block>
                <Logo src={logo} alt="Mala restaurant logo"/>
            </Block>
            <Block>
                <p>Monday - Saturday: 11:00 AM - 10:00 PM</p>
                <p>4480 Chouteau Ave, Saint Louis, MO 63110</p>
            </Block>
            <Block>
                <Phone href="tel:+13140000000">Call Us: (314) 000-0000</Phone>
            </Block>
            <Block>

            </Block>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    padding: 50px 0;
    background: black;
    color: var(--light-grey);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`

const Block = styled.div`
    margin-bottom: 2rem;
    text-align: center;
`

const Logo = styled.img`
    width: 300px;
    height: 300px;
`

const Phone = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    color: white;
`