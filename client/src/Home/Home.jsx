import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container uk-card uk-card-default uk-card-body">
      <h3>Join Conversation</h3>
      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={handleRoomNameChange}
        className="uk-input uk-border-rounded"
      />
      <Link to={`/${roomName}`} className="uk-button uk-border-rounded uk-button-primary uk-margin-medium-top">
        Create Room
      </Link>
    </div>
  );
};

export default Home;