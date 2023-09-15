import { FC, ReactNode } from "react"
import { RowList } from "./lists/RowList"
import React from "react"

type PopularItem = {
    children?: ReactNode,
    title: string,
    data?: string[]
}

const PopularItem: FC<PopularItem> = ({children, title, data}) => {
    return (
        <RowList>
            <h2>{title}</h2>
            {
                React.Children.map(children, child => 
                    <div>{child}</div>)
            }
            {
                data?.map(item => <h3>{item}</h3>)
            }
        </RowList>
    )
}