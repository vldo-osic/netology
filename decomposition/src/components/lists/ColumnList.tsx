import { Children, FC } from "react";

export const ColumnList: FC<List> = ({children, style}) => {
    
    return (
        <div className={"ColumnList "+ ''|| style}>
            {
                Children.map(children, child => 
                    <div className="Column">
                        {child}
                    </div>
                )
            }
        </div>
    )
}