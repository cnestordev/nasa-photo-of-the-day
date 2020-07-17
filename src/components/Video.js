import React from 'react'
import ReactPlayer from "react-player";

function Video(props) {
    console.log(props)
    const { url, key, width } = props

    const style = {
        margin: "0 1%",
        background: "#0e0e0e",
        borderRadius: "14px",
        boxShadow: "0 0 7px 2px #5a5a5a",
        padding: "1%"
    }

    return (
        <>
            <ReactPlayer
                url={url}
                width="30%"
                height="auto"
                style={style}
            />
        </>
    )
}

export default Video