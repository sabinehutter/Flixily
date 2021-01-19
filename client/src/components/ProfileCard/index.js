import React from "react";

function ProfileCard (props) {
    return (
      <div className="container-fluid">
      <div className="row">
          <div className="col-12 mt-3">
              <div className="card">
                  <div className="card-horizontal">
                      <div className="img-square-wrapper">
                          {props.username}
                      </div>
                      <div className="card-body">
                          <h2>{props._id}</h2>
                          <p className="card-text">{props.email}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
)
}

export default ProfileCard;