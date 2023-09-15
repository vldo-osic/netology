import { FC } from "react";


export const NewsType: FC<NewsType> = ({title, url, isActive}) => {
    
    return (
        <a className={`news-type${isActive ? '__active' : ''}`}
           href={url || '#'}>
            {title}
        </a>
    )
}