import React from 'react'
import styled from 'styled-components'

import { GridContainer } from '../styled-lib'
import MenuItem from './menuItem'

const MenuSection = ({category, menuItems, index, activeSlide, showAll}) => {
    const classes = index === activeSlide || showAll ? "show" : "";
    return  (
        <Container className={classes}>
            <Title >{category}</Title>
            <GridContainer columns="1fr 1fr">
                {menuItems && menuItems.length > 0 && menuItems.map(item => (
                    <MenuItem 
                        key={item.id}
                        name={item.name} 
                        description={item.description.description} 
                        img={{ fluid: item.image.fluid, alt: item.name }} 
                    />
                ))}
            </GridContainer>
        </Container>
    )   
}

export default MenuSection

const Container = styled.section`
    opacity: 0;
    transition: opacity .5s ease-in;
    &.show {
        opacity: 1;
    }
`

const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
`