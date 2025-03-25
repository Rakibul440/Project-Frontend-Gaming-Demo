import React from 'react'
import Card from '../components/Card'
import "./css/style.scss"
import cards from '../assets/cards/cards'

export default function Shop() {
  return (
    <div className='products'>
      <Card cards={cards}/>
    </div>
  )
}
