import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Photo from './Photo'
import Video from './Video'

function Row(props) {

    const [arrImg, setArrImg] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        const newArr = []
        for (let i = 1; i < 4; i++) {
            const date = new Date();
            const month = date.getMonth() + 1
            const year = date.getFullYear()
            const day = date.getDate() - i
            console.log(month, day, year)
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=vCGPz8NwvDSv1kXgnzs8mCpRewnbdWt4IXhuy7A3&date=${year}-${month}-${day}`)
                .then(res => {
                    newArr.push(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        setArrImg(newArr)
    }, [])

    useEffect(() => {
        console.log("changed", arrImg.length)
    })

    const photoList = arrImg.map((item, i) => {
        // debugger;
        if (item.media_type === "image") {
            return <Photo
                key={item.date.split("-").join('')}
                image={item.url}
                explanation={item.explanation}
            />
        } else {
            return <Video key={item.date.split("-").join('')} url={item.url} />
        }
    })

    return (
        <div className="row-container">
            {photoList}
            <button onClick={() => {
                console.log(arrImg)
                setCount(count + 1)
            }}>Row</button>
        </div>
    )
}

export default Row