import React from 'react'
import ReactPlayer from "react-player";

function Video(props) {
    const { url } = props

    const style = {
        margin: "0 1%",
        background: "#0e0e0e",
        borderRadius: "14px",
        boxShadow: "0 0 7px 2px #000",
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