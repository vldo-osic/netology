import { FC, useEffect, useState } from "react";

export const DateComponent: FC<TDate> = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
          setDate(new Date());
        }, 1000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
      }, []);

    return (
        <span className="header__date">
            {date.toUTCString()}
        </span>
    )
}