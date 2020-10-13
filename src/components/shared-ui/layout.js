import React from 'react'
import styled from 'styled-components'

import '../../styles/index.css'
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return (
        <Container>
            <Header />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </Container>
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