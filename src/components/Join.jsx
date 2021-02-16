import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

export const Join = ({ roomName, handleRoomNameChange }) => {
  const [userName, setUserName] = React.useState('')
  


  const addUser = () => {
    axios({
      method: 'post',
      url: '/add-user',
      baseURL: "http://localhost:5000",
      data: {
        name: userName,
        img: 'https://source.unsplash.com/user/erondu/100x100',
        roomName
      }})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
    };

  return (
    <div className="join-chat">
      <input
        type="text"
        placeholder="Enter Username"
        value={userName}
        onChange={handleUserNameChange}
        className="text-input-field"
        required
      />
      <input
        type="text"
        placeholder="Enter Roomname"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
        required
      />
      <Link to={`/chat/${roomName}`} >
        <button className="enter-chat-button" disabled={userName.length <= 0 && roomName.length <= 0} onClick={addUser}>Join Chat</button>
      </Link>
    </div>
  )
}
