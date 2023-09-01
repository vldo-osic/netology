import { FC } from "react";
import { ColumnList } from "./lists/ColumnList";
import { Icon } from "../UI/Icon";


export const NewsItem: FC<NewsItem> = ({icon, title, url}) => {
    
    return (
        <div className="news-item">
            <ColumnList>
                <Icon iconURL={icon.iconURL} size={icon.size}/>
                <a href={url} className="news-item__title">{title}</a>
            </ColumnList>
        </div>
    )
}