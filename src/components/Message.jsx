import React from 'react'
import readedSvg from '../assets/readed.svg'
import unreadedSvg from '../assets/unreaded.svg'

export const Message = ({ isMe, isReaded, message }) => {
  

  return (
    <div className={!isMe ? "message" : "message message-unreaded" }>
      <p>{message}</p>
      <span className="message-date">9:18 {isMe && isReaded ? <img src={readedSvg} className="readedSvg" alt={readedSvg}/> : isMe && !isReaded && <img src={unreadedSvg} className="readedSvg" alt={unreadedSvg}/>} </span>
    </div>
  )
}
