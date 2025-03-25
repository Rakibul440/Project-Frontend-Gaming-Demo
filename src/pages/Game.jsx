import React from 'react'
import Card from '../components/Card'
import "./css/style.scss"
import { games } from '../assets/cards/cards'


export default function Game() {
  return (
    <div className='products'>
      <Card cards={games} />
    </div>
  )
}
