import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
        background: #0e0e0e;
        border-radius: 14px;
        box-shadow: 0 0 7px 2px #000;
        padding: 1% 0;
        width: 30%;
        text-align: center;
        margin: 0 2% 1%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    `

const Paragraph = styled.p`
        background: transparent;
        border-radius: 5px;
        font-family: Quicksand;
        color: #a0a0a0;
        padding: 1%;
        width: 78%;
        margin: auto;
        line-height: 1.5;
    `

const Image = styled.img`
        width: 80%;
        margin: 2% 0;
    `
const Description = styled.p`
    font-size: 1rem;
    color: gray;
    font-family: 'Karla';
`

function Photo(props) {
    const { image, explanation, date } = props

    return (
        <Container>
            <Description>{date}</Description>
            <Image src={image} alt="#" />
            <div className="text-container">
                <Paragraph>{explanation.substring(0, 200) + "..."}</Paragraph>
            </div>
        </Container>
    )
}

export default Photo