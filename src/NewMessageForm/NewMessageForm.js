import React from "react";
import "./NewMessageForm.css";

const NewMessageForm = ({
  newMessage,
  handleNewMessageChange,
  handleStartTyping,
  handleStopTyping,
  handleSendMessage,
}) => {
  return (
    <form className="new-message-form">
      <input
        type="text"
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Aa"
        className="uk-input uk-border-rounded"
        onKeyPress={handleStartTyping}
        onKeyUp={handleStopTyping}
      />
      <button
        type="submit"
        onClick={handleSendMessage}
        className="uk-button uk-button-primary uk-border-rounded uk-margin-small-left"
      >
        Send
      </button>
    </form>
  );
};

export default NewMessageForm;
