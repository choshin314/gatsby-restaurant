import React from 'react'
import styled from 'styled-components'

import { GridContainer } from '../styled-lib'
import MenuItem from './menuItem'

const MenuSection = ({category, menuItems}) => (
    <div>
        <Title>{category}</Title>
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
    </div>
)   

export default MenuSection

const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
`