import react from 'react'
import './Cards.scss'

function Cards() {
  return (
    <div className='wrapper'>
      <Card
        img=''
        title='Placeholder'
        description='his name is Bob loblaw and he run a law blog'
      />
      <Card
        img=''
        title='Placeholder1'
        description='his name is Bob loblaw and he run a law blog'
      />
      <Card
        img=''
        title='Placeholder2'
        description='his name is Bob loblaw and he run a law blog'
      />
    </div>
  )
}

function Card(props) {
  return (
    <div className='card'>
      <div className='card__body'>
        <img src={props.img} />
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__description'>{props.description} </p>
      </div>
      <button className='card__btn'>View Recipe</button>
    </div>
  )
}
export default Cards
