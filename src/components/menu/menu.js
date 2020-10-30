import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

import TextSection from '../shared-ui/textSection'
import MenuSection from './menuSection'

const Menu = () => {
    const data = useStaticQuery(graphql`
        query MenuCategoriesQuery {
            contentfulMenuLayout {
                menuCategories {
                    id
                    category
                    menu_item {
                        id
                        name
                        slug
                        description {
                            description
                        }
                        price
                        image {
                            fluid {
                                base64
                                aspectRatio
                                sizes
                                src
                                srcSet
                                srcSetWebp
                            }
                        }
                    }
                }
            }
        }
    `)
    const menuCategories = data.contentfulMenuLayout.menuCategories;
    return (
        <TextSection patternBg >
            <ButtonGrp>
                <button>All</button>
                <button>Apps</button>
                <button>Noodles & Soups</button>
                <button>Entrees</button>
            </ButtonGrp>
            <MenuFrame>
                <MenuTrack>
                    {menuCategories && menuCategories.map(({id, category, menu_item}) => (
                        <MenuSection key={id} category={category} menuItems={menu_item} />
                    ))}
                </MenuTrack>
            </MenuFrame>
        </TextSection>
    )
}

export default Menu

const ButtonGrp = styled.div`
    display: flex;
    justify-content: center;
    button {
        padding: 1rem 2rem;
        font-size: 1rem;
        background: transparent;
        border: none;
        cursor: pointer;
    }
`

const MenuFrame = styled.div`
    width: 100%;
    min-height: 600px;
    overflow-x: hidden;
    border: 5px solid black;
`
const MenuTrack = styled.div`
    width: 300%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    transform: translateX(0%);
    transition: transform 0.1s ease-in;
`