import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    margin: 5% auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8%;
    justify-content: center;
    padding: 0 10%;
`

const Image = styled.img`
    flex-basis: 50%;
    border-radius: 5px;
    /* box-shadow: 0 0 6px 1px #414141; */
    width: 60%;
`

const Paragraph = styled.p`
    color: #a0a0a0;
    font-family: Quicksand;
    width: 90%;
    margin: 1% auto;
    line-height: 1.8;
    background: transparent;
    padding: 1%;
    border-radius: 5px;
    flex-basis: 39%;
`

const Button = styled.button`
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    font-size: 0.9rem;
    padding: 1% 2%;
    border-radius: 7px;
    font-family: Quicksand;
    margin-top: 1%;

    &:hover {
        background: #fff;
        color: gray;
        cursor: pointer;
    }
`

const PlaceholderImage = styled.div`
    width: 60%;
    height: 400px;
    margin: 1% auto;
`

const PlaceholderText = styled.div`
    width: 85%;
    height: 1.5rem;
    margin: 9% auto;
`

const PhContainer = styled.div`
    width: 35%;
`

function Main(props) {
    const { current, explanation } = props
    const defaultPic = 'https://picsum.photos/id/237/200/300'

    //state to force a re-render
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        console.log('re-rendered app component')
    }, [count])

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
                {/* <Button onClick={() => {
                    setCount(count + 1)
                    console.log(count)
                }}>Re-render</Button> */}
            </Container>
        )
    }

    return (
        <Container>
            <Image className="img-main" src={current} alt="main nasa" />
            <Paragraph> {explanation} </Paragraph>
            {/* <Button onClick={() => setCount(count + 1)}>Re-render</Button>{console.log("rendered app")} */}
        </Container>
    )
}

export default Main