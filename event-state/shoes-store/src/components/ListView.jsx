import React from 'react'
import ShopItem from './product/ShopItem'

export default function ListView({items}) {
  return (
    <div className='items-list'>
        {
        items.map((item, index) => 
            <ShopItem item={item} key={index}/>
            )
        }
    </div>
  )
}
