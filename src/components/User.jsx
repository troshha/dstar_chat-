import React from 'react'



export const User = ({ userName, userImg, userMsg,  userDate  }) => {

  
  return (
    <div className="userlist-item">
      <img src={userImg} alt="user"/>
      <div className="userlist-item-content">
        <h3>{userName}</h3>
        <p>{userMsg.length ? userMsg.slice(-1) : 'No messages yet'}</p>
        <span className="date">{userDate}</span>
      </div>
    </div>
  )
}
