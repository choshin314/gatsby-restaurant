import React from 'react'
import styled from 'styled-components'

import TextSection from '../shared-ui/textSection'
import MenuGrid from './menuGrid'

const dummyItems = [
    {
        name: 'Item 1',
        description: 'House blend of quinoa, chickpea, edamame, brown rice, served with a sweet garlic sauce',
        img: "https://andrewzimmern.com/wp-content/uploads/Andrew-Zimmerns-Chengdu-Chicken-1-1600x800.jpg",
        imgAlt: "chengdu chicken in a bowl"
    },
    {
        name: 'Item 2',
        description: 'House blend of quinoa, chickpea, edamame, brown rice, served with a sweet garlic sauce',
        img: "https://andrewzimmern.com/wp-content/uploads/Andrew-Zimmerns-Chengdu-Chicken-1-1600x800.jpg",
        imgAlt: "chengdu chicken in a bowl"
    },
    {
        name: 'Item 3',
        description: 'House blend of quinoa, chickpea, edamame, brown rice, served with a sweet garlic sauce',
        img: "https://cafedelites.com/wp-content/uploads/2018/04/Best-Kung-Pao-Chicken-IMAGE-2.jpg",
        imgAlt: "chengdu chicken in a bowl"
    }
]

const Menu = () => {
    return (
        <TextSection patternBg >
            <MenuGrid menuItems={dummyItems} />
            <MenuGrid menuItems={dummyItems} />
            <MenuGrid menuItems={dummyItems} />
        </TextSection>
    )
}

export default Menu