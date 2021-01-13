import React from "react";

function ProfileCard (props) {
    return (
    <div className="card text-center text-light bg-dark m-3">
      <div className="card-header text-left">
            <strong>{props.heading}: </strong>
      </div>
      <div className="card-body ">{props.id}</div>
      <div className="card-body ">{props.email}</div>
      <div className="card-body ">{props.comments}</div>
    </div>
  );
}

export default ProfileCard;