import React, { useState, useEffect } from "react";
import axios from 'axios'
import Nav from './components/Nav'
import Main from './components/Main'
import Row from './components/Row'

const backupApi = 'https://jsonblob.com/api/jsonBlob/11b2da94-c7ea-11ea-9aa1-21f6f76235b9'
const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=vCGPz8NwvDSv1kXgnzs8mCpRewnbdWt4IXhuy7A3'

function App() {
  const [currentPhoto, setCurrentPhoto] = useState('')

  useEffect(() => {
    axios.get(backupApi)
      .then(res => {
        console.log(res)
        setCurrentPhoto(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Nav />
      <Main current={currentPhoto.url} explanation={currentPhoto.explanation} date={currentPhoto.date} title={currentPhoto.title} />
      <Row />
    </div>
  );
}

export default App;
