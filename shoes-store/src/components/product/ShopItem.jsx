import React from 'react'

export default function ShopItem({item}) {
    const {name, price, color, img} = item
    return (
        <div className='items-list shop-item'>
            <img className='shop-item__img' src={img}></img>
            <span className='shop-item__name'>{name.toUpperCase()}</span>
            <span className='shop-item__color'>{color}</span>
            <span className='shop-item__price'>${price}</span>
            <button className='shop-item__button'>ADD TO CART</button>
        </div>
    )
}
