import React from 'react'
import styled from 'styled-components'

import { GridContainer } from '../styled-lib'
import MenuItem from './menuItem'

const MenuGrid = ({menuItems}) => {
    return (
        <GridContainer columns="1fr 1fr">
            {menuItems.map(item => <MenuItem name={item.name} description={item.description} img={item.img} imgAlt={item.imgAlt} />)}
        </GridContainer>
    )
}

export default MenuGrid