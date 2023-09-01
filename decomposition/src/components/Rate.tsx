import { FC } from "react";
import { ColumnList } from "./lists/ColumnList";

export const Rate: FC<Rate> = ({currency, price, difference}) => {
    return (
        <div className="rate">
            <ColumnList>
                <span className="rate__currency">{currency}</span>
                <span className="rate__price">{price}</span>
                <span className="rate__difference">{difference}</span>
            </ColumnList>
        </div>
    )
}