import React from 'react'

function Main(props) {
    const { current, explanation } = props
    const defaultPic = 'https://picsum.photos/id/237/200/300'

    if (!props.current) {
        return (
            <div className="container">
                <img src={defaultPic} alt="main nasa" />
                <p> ore minus nam debitis numquam? Nesciunt, quae? </p>
            </div>
        )
    }

    return (
        <div className="container">
            <img src={current} alt="main nasa" />
            <p> {explanation} </p>
        </div>
    )
}

export default Main