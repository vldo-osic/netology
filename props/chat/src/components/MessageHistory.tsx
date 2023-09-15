import React, {FC} from 'react'

import '../App.css'
import { IMessage, MessageType } from '../types/types'
import Message from './Message'
import Response from './Response'
import Typing from './Typing'

interface MessageHistoryProps {
    readonly list: IMessage[]
}

const MessageHistory: FC<MessageHistoryProps> = ({list}) => {


    return (
        <ul style={{listStyleType: 'none'}}>
        {
            list.map(message => 
                message.type === MessageType.message ? 
                    <Message key={message.id} message={message}/>
              : message.type === MessageType.response ?
                    <Response key={message.id} response={message}/>
              :     <Typing key={message.id} typing={message}/>
            )
        }
        </ul>
    )
}

export default MessageHistory