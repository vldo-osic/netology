import React, {FC} from 'react'

import Star from './Star'

interface StarsProps {
    count: number
}

const Stars: FC<StarsProps> = ({count = 0}) => {

    if (count < 1 || count > 5) return
    else {
        const stars = [false, false, false, false, false].fill(true, 0, count)

        return (
            <ul className="card-body-stars u-clearfix">
                {stars.map((isStar, index) => isStar ? <Star key={index}/> : <></>)}
            </ul>
        )
    }
}

export default Stars
