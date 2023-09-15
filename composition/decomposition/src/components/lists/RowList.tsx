import { Children, FC } from "react";

export const RowList: FC<List> = ({children, style}) => {
    
    return (
        <div className={"RowList "+ ''|| style}>
            {
                Children.map(children, child => 
                    <div className="Row">
                        {child}
                    </div>
                )
            }
        </div>
    )
}