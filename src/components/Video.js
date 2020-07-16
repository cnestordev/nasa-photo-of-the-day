import React from 'react'
import ReactPlayer from "react-player";

function Video(props) {
    console.log(props)
    const { url, key, width } = props

    return (
        <>
            <ReactPlayer
                url={url}
                width="30%"
                height="auto"
                style={{ marginTop: "1%" }}
            />
        </>
    )
}

export default Video