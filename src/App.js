import React, { useState, useEffect } from "react";
import axios from 'axios'
import Nav from './components/Nav'
import Main from './components/Main'
import Row from './components/Row'

const backupApi = 'https://jsonblob.com/api/jsonBlob/7dce3f28-c7c3-11ea-9aa1-290ea40c06bc'
const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=vCGPz8NwvDSv1kXgnzs8mCpRewnbdWt4IXhuy7A3'

function App() {
  const [currentPhoto, setCurrentPhoto] = useState('')

  useEffect(() => {
    axios.get(nasaUrl)
      .then(res => {
        console.log(res.data)
        setCurrentPhoto(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Nav />
      <Main current={currentPhoto.url} explanation={currentPhoto.explanation} />
      <Row />
    </div>
  );
}

export default App;
