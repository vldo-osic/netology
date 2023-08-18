import React, {FC} from 'react'

import '../App.css'
import { IMessage } from '../types/types'

interface ResponseProps {
    response: IMessage
}

const Response:FC<ResponseProps> = ({response}) => {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{response.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{response.from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {response.text}
            </div>
        </li>
    )
}

export default Response