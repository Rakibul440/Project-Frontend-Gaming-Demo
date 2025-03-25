import React from 'react'
import Card from "../components/Card.jsx"
import "./css/home.scss"
import Testimonials from '../components/Testimonials.jsx'

import cards  from '../assets/cards/cards.js'

export default function Home() {
  return (
    <div className='home'>

      <Testimonials />
      <h1>BEST SELLING</h1>
      <div className="cards">
        <Card cards={cards} />
      </div>
      <h1>GAME TOP UP</h1>
      <div className="cards">
        <Card cards={cards} />
      </div>
      <h1>BUY VOUCHERS</h1>
      <div className="cards">
        <Card cards={cards} />
      </div>
    </div>
  )
}
