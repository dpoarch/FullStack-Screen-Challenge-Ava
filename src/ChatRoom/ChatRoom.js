import React, { useEffect, useState } from "react";

import "./ChatRoom.css";
import useChat from "../useChat";
import ChatMessage from "../ChatMessage/ChatMessage";
import useTyping from "../useTyping";
import NewMessageForm from "../NewMessageForm/NewMessageForm";
import TypingMessage from "../TypingMessage/TypingMessage";
import UserAvatar from "../UserAvatar/UserAvatar";

function alice() {
  const user = {name: 'Alice', avatar: 'Alice.jpg'};
  localStorage.setItem('selectedUser', JSON.stringify(user));
  window.location.reload();
}

function bob() {
  const user = {name: 'Bob', avatar: 'Bob.jpg'};
  localStorage.setItem('selectedUser', JSON.stringify(user));
  window.location.reload();
}

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const {
    messages,
    user,
    typingUsers,
    sendMessage,
    startTypingMessage,
    stopTypingMessage,
  } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");

  const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping();

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    cancelTyping();
    sendMessage(newMessage);
    setNewMessage("");
  };

  useEffect(() => {
    if (isTyping){
      startTypingMessage();
    }else{
      stopTypingMessage();
    } 
   // eslint-disable-next-line
  }, [isTyping]);

  return (
    <div className="uk-grid uk-box-shadow-medium chat-height">
     
      <div className="chat-sidebar uk-width-1-4@m">
            <div className="chat-selection uk-card uk-card-default uk-card-body">
            
              <ul className="uk-nav-default uk-nav-parent-icon">
                <li><label>Current Users (2)</label></li>
                  <li className="uk-active" onClick={alice}>
                    <div className="avatar-container">
                        <img src={"Alice.jpg"} className="avatar uk-margin-medium-right" alt={`Alice`} title={`Alice`}></img>
                        <span className="onlineIcon"></span>
                        <span className="offlineIcon"></span>
                    </div>
                    
                    Alice
                    </li>
                  <li className="uk-active" onClick={bob}>
                  <div className="avatar-container">
                    <img src={"Bob.jpg"} className="avatar uk-margin-medium-right" alt={`Bob`} title={`Bob`}></img>
                    <span className="onlineIcon"></span>
                    <span className="offlineIcon"></span>
                    </div>
                    Bob
                    </li>
                
              </ul>
          </div>
      </div>
      <div className="uk-width-expand@s chat-relative">
      <div className="chat-room-top-bar uk-padding custom-box-shadow-medium uk-background-muted">
        {user && <UserAvatar user={user}></UserAvatar>}
      </div>
      <div className="chat-room-container">
        
        
        <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, i) => (
              <li key={i}>
                <ChatMessage user={user} message={message}></ChatMessage>
              </li>
            ))}
            {typingUsers.map((user, i) => (
              <li key={messages.length + i}>
                <TypingMessage user={user}></TypingMessage>
              </li>
            ))}
          </ol>
        </div>
        <NewMessageForm
          newMessage={newMessage}
          handleNewMessageChange={handleNewMessageChange}
          handleStartTyping={startTyping}
          handleStopTyping={stopTyping}
          handleSendMessage={handleSendMessage}
        ></NewMessageForm>
      </div>
      </div>
    </div>
  );
};

export default ChatRoom;
