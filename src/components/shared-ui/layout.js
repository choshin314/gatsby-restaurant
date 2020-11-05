import React from 'react'
import styled from 'styled-components'

import '../../styles/index.css'
import '../../styles/cart.css'

import {NavContextProvider} from '../../context/navContext'
import {MenuContextProvider} from '../../context/menuContext'
import Header from './header'
import Footer from './footer'
import SEO from '../seo'

const Layout = (props) => {
    return (
        <NavContextProvider>
            <MenuContextProvider>
                <SEO title={props.title} description={props.description} />
                <Container>
                    <Header />
                    <Main>
                        {props.children}
                    </Main>
                    <Footer />
                </Container>
            </MenuContextProvider>
        </NavContextProvider>
    )
}

export default Layout

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Main = styled.main`
    flex-grow: 1;
`