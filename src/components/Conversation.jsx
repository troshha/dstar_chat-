import React from 'react'
import { Message } from './Message'
import useChat from '../useChat'
import {useParams} from "react-router-dom";


import searchSvg from '../assets/search.svg'
import dotsSvg from '../assets/dots.svg'
import phoneSvg from '../assets/phone.svg'
import cameraSvg from '../assets/camera.svg'
import sendSvg from '../assets/send.svg'



const Conversation = (props)  => {
    
    const { roomName } = useParams();
    const { messages, sendMessage } = useChat(roomName); 
    const [newMessage, setNewMessage] = React.useState(""); 
  
    const handleNewMessageChange = (event) => {
      setNewMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      sendMessage(newMessage);
      setNewMessage("");
    };


    return (
        <div className="chat-room-container">
            <div className="chat-room-head">
                <div className="chat-room-content">
                <img src="https://source.unsplash.com/user/erondu/100x100"alt="user"/>
                    <div>

                    <h4>Gregor Webb</h4>
                    <span className="phone">(303) 555-0105</span>
                    </div>
                </div>
                <div>

                <img src={searchSvg} className="imgSvg" alt=""/>
                <img src={phoneSvg} className="imgSvg" alt=""/>
                <img src={cameraSvg} className="imgSvg" alt=""/>
                <img src={dotsSvg} className="imgSvg" alt=""/>
                </div>
            </div>
            <div className="message-container">
                {messages.map((msg, i) => (  <Message key={i} isMe={!msg.ownedByCurrentUser} message={msg.body}/>))}
           
            </div>
            <div className="send-message">
                <input 
                type="text" 
                placeholder="Write a message..." 
                value={newMessage}
                onChange={handleNewMessageChange}
                />
                <button type="submit" disabled={newMessage.length <= 0} onClick={handleSendMessage}><img src={sendSvg} alt="sendSvg"  /></button>
                
            </div>
        </div>
    );
};

export default Conversation
