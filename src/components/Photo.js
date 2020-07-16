import React from 'react'
import styled from 'styled-components'

function Photo(props) {
    const { image, explanation } = props

    const defaultPic = 'https://picsum.photos/id/237/200/300'

    const Container = styled.div`
        padding: 0.5% 0;
        width: 30%;
        text-align: center;
        margin: 0 2% 1%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const Paragraph = styled.p`
        background: #4e636f;
        border-radius: 5px;
        padding: 1%;
        width: 78%;
        margin: auto;
    `

    const Image = styled.img`
        width: 80%;
        margin: 2% 0;
    `

    if (!image) {
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
            <Image src={image} alt="#" />
            <div className="text-container">
                <Paragraph>{explanation.substring(0, 150) + "..."}</Paragraph>
            </div>
        </Container>
    )
}

export default Photo