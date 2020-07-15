import React from 'react'

function Photo(props) {
    console.log(props)
    const { image, explanation } = props

    const defaultPic = 'https://picsum.photos/id/237/200/300'

    if (!image) {
        return (
            <div className="photo-container">
                <img src={defaultPic} alt="#" />
                <div className="text-container">
                    <p>ipsum dolor sit amet, consectetur adipisicing elit met repellendus</p>
                </div>
            </div>
        )
    }

    return (
        <div className="photo-container">
            <img className="sub-image" src={image} alt="#" />
            <div className="text-container">
                <p>{explanation.substring(0, 150) + "..."}</p>
            </div>
        </div>
    )
}

export default Photo