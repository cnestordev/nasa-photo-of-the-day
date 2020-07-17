import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    margin: 2% auto;
    width: 65%;
`

const Paragraph = styled.p`
    color: #0b0c0c;
    font-family: Quicksand;
    width: 90%;
    margin: 1% auto;
    line-height: 1.3;
    background: #3f464a;
    padding: 1%;
    border-radius: 5px;
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
                <div className="placeholderImg">
                </div>
                <Paragraph></Paragraph>
                <button onClick={() => {
                    setCount(count + 1)
                    console.log(count)
                }}>Re-render</button>
            </Container>
        )
    }

    return (
        <Container>
            <img className="img-main" src={current} alt="main nasa" />
            <Paragraph> {explanation} </Paragraph>
            <Button onClick={() => setCount(count + 1)}>Re-render</Button>{console.log("rendered app")}
        </Container>
    )
}

export default Main