import React, { FC } from "react"

interface ICard {
    children?: React.ReactNode,
    cardTitle: string,
    cardText: string,
    buttonText: string
}

export const Card: FC<ICard> = ({children, cardTitle, cardText, buttonText}) => {
    return (
        <div className="card" style={{maxWidth: '18rem'}}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                <a href="#" className="btn btn-primary">{buttonText}</a>
            </div>
        </div>
    )
}