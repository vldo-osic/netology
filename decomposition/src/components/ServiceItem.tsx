import { FC } from "react";


export const ServiceItem: FC<ServiceItem> = ({title, url}) => {
    
    return (
        <a href={url} className="services-list__item">{title}</a>
    )
}