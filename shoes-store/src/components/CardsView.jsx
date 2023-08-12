import React from 'react'
import ShopCard from './product/ShopCard'

export default function CardsView({cards}) {
  return (
    <div className='cards-list'>
        {
        cards.map((card, index) => 
            <ShopCard card={card} key={index}/>
            )
        }
    </div>
  )
}
