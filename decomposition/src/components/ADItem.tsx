import { FC } from "react"

type ADItem = {
    position: {
        top: string,
        left: string
    },
    adData: adData
}

export const ADItem: FC<ADItem> = ({position, adData}) => {
    return (
        <div className="ad" style={{top: position.top, left: position.left}}>
            <img src={adData.imgURL}></img>
            <h3><a href={adData.url}>{adData.title}</a></h3>
            <h4>{adData.subtitle}</h4>
        </div>
    )
}