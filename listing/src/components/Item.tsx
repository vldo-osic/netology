import { FC } from 'react'

import { IItem } from '../types/types'
import '../App.css'

interface ItemProps {
    item: IItem
}

const Item: FC<ItemProps> = ({item}) => {
    const itemQuantityClassName = 
        item.quantity <= 10 ? "item-quantity level-low"
      : item.quantity <= 20 ? "item-quantity level-medium"
                            : "item-quantity level-high"  
    const title = 
        item.title.length > 50 ? 
            item.title.substring(0, 50) + '...'
          : item.title
    return (
        <div className="item">
            <div className="item-image">
            <a href={item.url}>
                <img src={item.MainImage.url_570xN}/>
            </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{
                    item.currency_code === 'USD' ? '$' + item.price
                  : item.currency_code === 'EUR' ? '€' + item.price
                  :                                item.price + ' ' + item.currency_code
                }</p>
                <p className={itemQuantityClassName}>{item.quantity} left</p>
            </div>
        </div>
    )
}

export default Item