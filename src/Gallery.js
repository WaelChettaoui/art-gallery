import { Divider } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React, { useState } from 'react'
import img1 from './Images/image1.png'
import img2 from './Images/image2.png'
import img3 from './Images/image3.png'
import './Gallery.css'

const Gallery = () => {
  let data = [
    {
      id: '1',
      imgSrc: img1,
    },

    {
      id: '2',
      imgSrc: img2,
    },

    {
      id: '3',
      imgSrc: img3,
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

      <div className='gallery'>
        {data.map((item, index) => {
          return (
            <div
              className='pics'
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: '100%' }} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Gallery
