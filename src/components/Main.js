import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    margin: 5% auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8%;
    justify-content: space-between;
    padding: 0 10%;
`

const Image = styled.img`
    border-radius: 10px;
    /* box-shadow: 0 0 6px 1px #414141; */
    width: 60%;
`

const Paragraph = styled.p`
    color: #a0a0a0;
    font-family: Quicksand;
    font-size: 1rem;
    margin: 1% auto;
    line-height: 2.5;
    background: transparent;
    padding: 1%;
    border-radius: 5px;
    flex-basis: 40%;
    text-align: left;
    align-self: center;
`

// const Button = styled.button`
//     background: transparent;
//     color: #fff;
//     border: 2px solid #fff;
//     font-size: 0.9rem;
//     padding: 1% 2%;
//     border-radius: 7px;
//     font-family: Quicksand;
//     margin-top: 1%;

//     &:hover {
//         background: #fff;
//         color: gray;
//         cursor: pointer;
//     }
// `

const PlaceholderImage = styled.div`
    width: 60%;
    height: 400px;
    margin: 1% auto;
`

const PlaceholderText = styled.div`
    width: 85%;
    height: 1.5rem;
    margin: 9% auto;
    border-radius: 50px;
`

const PhContainer = styled.div`
    width: 35%;
`

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
`

const Date = styled.p`
    font-size: 1rem;
`

function Main(props) {
    const { current, explanation } = props

    //if props are null, load placeholders
    if (!props.current) {
        return (
            <Container>
                <PlaceholderImage className="placeholder" />
                <PhContainer>
                    <PlaceholderText className="placeholder" />
                    <PlaceholderText className="placeholder" />
                    <PlaceholderText className="placeholder" />
                    <PlaceholderText className="placeholder" />
                    <PlaceholderText className="placeholder" />
                    <PlaceholderText className="placeholder" />
                </PhContainer>
            </Container>
        )
    }

    return (
        <Container>
            <Image className="img-main" src={current} alt="main nasa" />
            <Paragraph>
                <Title>{props.title}</Title>
                <Date>{props.date}</Date>
                {explanation}
            </Paragraph>
        </Container>
    )
}

export default Main