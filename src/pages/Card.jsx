import React from 'react'
import Cards from '../components/Card.jsx'
import "./css/style.scss"
import { pass } from '../assets/cards/cards.js'

export default function Card() {
  return (
    <div className='products'>
      <Cards cards={pass} />
    </div>
  )
}
