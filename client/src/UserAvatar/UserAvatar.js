import React from "react";
import "./UserAvatar.css";

const UserAvatar = ({ user }) => {
  return (
    <>
    <h3 className="room-name">Typing as {user.name}</h3>
    <div className="avatar-container">
      <img
        src={user.picture}
        alt={user.name}
        title={user.name}
        className={"avatar"}
      ></img>
      <span className="onlineIcon"></span>
      <span className="offlineIcon"></span>
      </div>
    </>
  );
};

export default UserAvatar;
