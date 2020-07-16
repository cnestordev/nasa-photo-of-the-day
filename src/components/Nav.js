import React from 'react'
import styled from 'styled-components'

const Navi = styled.nav`
    font-size: 1.25rem;
    font-family: 'Karla';
    display: flex;
    justify-content: flex-end;
`

const Ulist = styled.ul`
    list-style: none;
    display: flex;
    padding: 1%;
`

const Header = styled.header`
    background: #505c63;
    padding: 1rem;
`

const Item = styled.li`
    margin-right: 4%;
    &:hover {
        cursor: pointer;
    }
`

function Nav() {
    return (
        <Header>
            <Navi>
                <Ulist>
                    <Item>Home</Item>
                    <Item>About</Item>
                    <Item>Contact</Item>
                </Ulist>
            </Navi>
        </Header>
    )
}

export default Nav