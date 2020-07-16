import React from 'react'

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
            <div className="container">
                <div className="placeholderImg">

                </div>
                <p className="placeholderTxt"></p>
                <button onClick={() => {
                    setCount(count + 1)
                    console.log(count)
                }}>Re-render</button>
            </div>
        )
    }

    return (
        <div className="container">
            <img className="img-main" src={current} alt="main nasa" />
            <p className="p-main"> {explanation} </p>
            <button onClick={() => setCount(count + 1)}>Re-render</button>{console.log("rendered app")}
        </div>
    )
}

export default Main