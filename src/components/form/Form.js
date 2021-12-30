import React from 'react'
import './Form.css'
import { useState } from 'react'
import Gallery from '../gallery/Gallery'
import Axios from 'axios'

const Form = () => {
  const [name, setName] = useState('')
  const [artist, setArtist] = useState('')
  const [year, setYear] = useState('')
  const [paintings, setPaintings] = useState([])

  const uploadImage = (files) => {
    console.log(files[0])
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const painting = { name: name, artist: artist, year: year }
    setPaintings((paintings) => {
      return [...paintings, painting]
    })
    setName('')
    setArtist('')
    setYear('')
    console.log({ paintings })
    // Axios.post('https://v2.convertapi.com/upload', { formData })
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  return (
    <div className='update'>
      <h2 style={{ textAlign: 'center' }}>Add new Painting</h2>
      <form className='form'>
        <label>Painting Name</label>
        <input
          type='text'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Painting Artist</label>
        <input
          type='text'
          required
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <label>Painting Year</label>
        <input
          type='text'
          required
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Painting Image</label>
        <input
          type='file'
          onChange={(e) => {
            uploadImage(e.target.files)
          }}
        />
        <button onClick={handleSubmit}>Add Painting</button>
      </form>
    </div>
  )
}

export default Form
