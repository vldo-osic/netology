export enum MessageType {
    'response' = 'response',
    'message' = 'message',
    'typing' = 'typing'
}

export interface IMessage {
    id: string,
    from: { name: string },
    type: MessageType,
    time: string,
    text?: string
}