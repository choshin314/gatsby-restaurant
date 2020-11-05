import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import NavMain from './navMain'
import NavMobile from './navMobile'
import NavLinks from './navLinks'

const Nav = () => {
    const data = useStaticQuery(graphql`
        query NavQuery {
            file(relativePath: {eq: "logoHeader.png"}) {
                childImageSharp {
                    fixed(width: 160, height: 40) {
                        base64
                        aspectRatio
                        width
                        height
                        src
                        srcSet
                    }
                }
            }
        }
    `)

    return (
        <NavContainer>
            <Logo to="/"><Img fixed={data.file.childImageSharp.fixed} alt="Mala logo" objectFit="cover"/></Logo>
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

`
const Logo = styled(Link)`
    border: var(--primary) 3px solid;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`