import { FC } from "react";

export const Icon: FC<Icon> = ({iconURL, size}) => {
    return (
        <img src={iconURL} 
             style={{width: size}}></img>
    )
}