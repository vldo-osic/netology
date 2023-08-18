import React, {FC} from 'react'

import '../App.css'
import Item from './Item'
import { IItem } from '../types/types'

interface ItemsListProps {
    readonly items: IItem[]
}

const Listing: FC<ItemsListProps> = ({items}) => {
    
    return (
        <div className='item-list'>
            {
            items.map(item => 
                item.state === 'active' ? 
                    <Item item={item} key={item.listing_id}/>
                    : <></>
                )
            }
        </div>
    )
}

export default Listing
