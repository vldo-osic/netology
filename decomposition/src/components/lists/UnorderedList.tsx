import { Children, FC } from "react";

export const UnorderedList: FC<List> = ({children, style}) => {
    
    return (
        <div className={"UnorderedList "+ ''|| style}>
            {
                Children.map(children, child => 
                    <div className="Unordered">
                        {child}
                    </div>
                )
            }
        </div>
    )
}