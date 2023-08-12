import React from 'react'

export default function ShopCard({card}) {
    const {name, price, color, img} = card
    return (
        <div className='cards-list shop-card'>
            <span className='shop-card__name'>{name.toUpperCase()}</span>
            <span className='shop-card__color'>{color}</span>
            <img className='shop-card__img' src={img}></img>
            <span className='shop-card__price'>${price}</span>
            <button className='shop-card__button'>ADD TO CART</button>
        </div>
    )
}
