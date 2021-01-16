import React from "react";

function ProfileCard (props) {
    return (
    <div className="card text-center text-light bg-light m-3">
      <div className="card-header text-left text-light">
            <strong>{props.heading}: </strong>
      </div>
      <div className="card-body ">{props.id}</div>
      <div className="card-body ">{props.email}</div>
    </div>
  );
}

export default ProfileCard;