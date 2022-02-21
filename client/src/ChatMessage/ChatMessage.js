import React from "react";
import UserAvatar from "../UserAvatar/UserAvatar";

import "./ChatMessage.css";

const ChatMessage = ({ message }) => {
  {console.log(message)}
  var currentUser = JSON.parse(localStorage.getItem('selectedUser'));
  if(currentUser == null){
    const user = {name: 'Bob', avatar: 'Bob.jpg'};
    localStorage.setItem('selectedUser', JSON.stringify(user));
    currentUser = JSON.parse(localStorage.getItem('selectedUser'));
  }

  return (
    
    <div
      className={`message-item ${
        message.user.name === currentUser.name ? "my-message" : "received-message"
      }`}
    >
      
        <div className="message-avatar-container">
          <UserAvatar user={message.user}></UserAvatar>
        </div>
     

      <div className="message-body-container">
       
          <div className="message-user-name">{message.user.name}  <div className="message-date">{message.date}</div></div>
      
        
        <div className="message-body">{message.body}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
