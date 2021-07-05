import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Photo from './Photo'
import Video from './Video'

const Container = styled.div`
    background: var(--main-color);
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 0 8.5%;
    margin: 5% 0;
`

// const Button = styled.button`
//     background: transparent;
//     color: #fff;
//     border: 2px solid #fff;
//     font-size: 0.9rem;
//     padding: 1% 2%;
//     border-radius: 7px;
//     font-family: Quicksand;
//     margin-top: 1%;

//     &:hover {
//         background: #fff;
//         color: gray;
//         cursor: pointer;
//     }
// `

const Placeholder = styled.div`
    width: 30%;
    height: 400px;
    margin: 1% auto;
`

function Row(props) {

    const [arrImg, setArrImg] = useState([])
    const [count, setCount] = useState(0)

    //loop through times, each iteration will substract 1 from the current day and use that to make an api request fetching a photo from one day prior.
    useEffect(() => {
        const newArr = []
        for (let i = 1; i < 4; i++) {
            const date = new Date();
            const month = date.getMonth() + 1
            const year = date.getFullYear()
            const day = date.getDate() - i
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


    //create a one-second delay before forcing the React DOM to re-render, to temporarily fix issue with components not rendering.
    useEffect(() => {
        if (count === 0) {
            setTimeout(() => {
                setCount(count + 1)
            }, 2000)
        }
    }, [count])


    //map through response object, creating Photo components for photos, and Video components for videos.
    const photoList = arrImg.map((item, i) => {
        // debugger;
        if (item.media_type === "image") {
            return <Photo
                key={item.date.split("-").join('')}
                image={item.url}
                explanation={item.explanation}
                date={item.date}
            />
        } else {
            return <Video key={item.date.split("-").join('')} url={item.url} />
        }
    })


    //render placeholders until for-loop has finished adding 3 objects to the array.
    if (photoList.length < 3) {
        return (
            <Container>
                <Placeholder className="placeholder" />
                <Placeholder className="placeholder" />
                <Placeholder className="placeholder" />
            </Container>
        )
    }

    return (
        <Container>
            {photoList}
        </Container>
    )
}

export default Row