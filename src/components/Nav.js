import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background: #20485e;
    padding: 1rem;
`

const Navi = styled.nav`
    font-size: 1.25rem;
    font-family: 'Karla';
    display: flex;
    justify-content: flex-end;
`

const Container = styled.div`
    padding: 0 10%;
`

const Ulist = styled.ul`
    list-style: none;
    display: flex;
    padding: 1%;
`


const Item = styled.li`
    margin-right: 7%;
    color: #ff6f42;
    &:hover {
        cursor: pointer;
        color: #fff;
    }
`

function Nav() {
    return (
        <Header>
            <Container>
                <Navi>
                    <Ulist>
                        <Item>Home</Item>
                        <Item>About</Item>
                        <Item>Contact</Item>
                    </Ulist>
                </Navi>
            </Container>
        </Header>
    )
}

export default Nav