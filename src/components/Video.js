import React from 'react'
import ReactPlayer from "react-player";

function Video(props) {
    console.log(props)
    return (
        <>
            <ReactPlayer
                key={props.item.date.split("-").join('')}
                url={props.item.url}
                width="30%"
            />
            <p>loremipsum dolor sit amet, consectetur adipisicing elit met repellendus</p>
        </>
    )
}

export default Video