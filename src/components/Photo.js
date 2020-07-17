import React from 'react'
import styled from 'styled-components'

function Photo(props) {
    const { image, explanation } = props

    const defaultPic = 'https://picsum.photos/id/237/200/300'

    const Container = styled.div`
        background: #0e0e0e;
        border-radius: 14px;
        box-shadow: 0 0 7px 2px #5a5a5a;
        padding: 1% 0;
        width: 30%;
        text-align: center;
        margin: 0 2% 1%;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    `

    const Image = styled.img`
        width: 80%;
        margin: 2% 0;
    `

    if (!props) {
        console.log("NO IMAGE YET")
        return (
            <Container>
                <Image src={defaultPic} alt="#" />
                <div className="text-container">
                    <Paragraph>ipsum dolor sit amet, consectetur adipisicing elit met repellendus</Paragraph>
                </div>
            </Container>
        )
    }

    return (
        <Container>
            <Image src={image} alt="#" />{console.log("rendering photo.js")}
            <div className="text-container">
                <Paragraph>{explanation.substring(0, 200) + "..."}</Paragraph>
            </div>
        </Container>
    )
}

export default Photo