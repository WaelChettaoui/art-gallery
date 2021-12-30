import { Divider } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React, { useState } from 'react'
// import img1 from '../../Images/image1.png'
// import img2 from '../../Images/image2.png'
// import img3 from '../../Images/image3.png'
import './Gallery.css'

const Gallery = () => {
  let data = [
    {
      id: '1',
      artist: 'Picasso',
      name: 'Guernica',
      year: 1937,
      imgSrc:
        'https://www.worldatlas.com/r/w960-q80/upload/ca/27/70/shutterstock-337184468.jpg',
    },

    {
      id: '2',
      artist: 'Johannes Vermeer',
      name: 'The Girl With A Pearl Earring',
      year: '1665',
      imgSrc:
        'https://www.worldatlas.com/r/w960-q80/upload/9d/d2/c4/meisje-met-de-parel.jpg',
    },

    {
      id: '3',
      artist: 'Edvard Munch',
      name: 'The Scream',
      year: '1893',
      imgSrc:
        'https://www.worldatlas.com/r/w960-q80/upload/5f/96/29/edvard-munch-1893-the-scream-oil-tempera-and-pastel-on-cardboard-91-x-73-cm-national-gallery-of-norway.jpg',
    },
  ]
  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempImgSrc] = useState('')

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModel(true)
  }

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      {/* In the container */}
      <div className='gallery'>
        {data.map((item, index) => {
          return (
            <section className='image-wrapper'>
              <div
                className='pics'
                key={index}
                onClick={() => getImg(item.imgSrc)}
                style={{ textAlign: 'center' }}
              >
                <img
                  src={item.imgSrc}
                  style={{ textAlign: 'center', width: '100%' }}
                />
              </div>

              <div className='image-name' style={{ textAlign: 'center' }}>
                <h3>{item.name}</h3>
              </div>

              <div className='image-artist' style={{ textAlign: 'center' }}>
                <h3>{item.artist}</h3>
              </div>

              <div className='image-year' style={{ textAlign: 'center' }}>
                <h3>{item.year}</h3>
              </div>

              <div className='image-button' style={{ textAlign: 'center' }}>
                <button>Delete</button>
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}

export default Gallery
