import React, {useState, Button} from "react";
import API from "../utils/API";
import Modal from 'react-bootstrap/Modal'
import { render } from "react-dom";


function MovieCard (props) {
    const state = props.movie;
    const [show, setShow] = useState(false);
      
    const handleClose = (rating) => {
        console.log("the rating is ", rating);
        setShow(false);
        state.rating = parseInt(rating);
        API.rateMovie(state._id, state.rating)

    }

    const handleShow = () => setShow(true);

     
    return (
        <div>
        <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Rate {props.movie.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <input></input>
                  <button variant="secondary" onClick={handleClose}>
                  Close
                </button>
                <button variant="primary" onClick={(e) => handleClose(e.target.parentElement.childNodes[0].value)}>
                  Save Rating
                </button>
              </Modal.Body>
            </Modal>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="card">
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img className="" src={props.movie.image} alt={props.movie.title}/>
                            </div>
                            <div className="card-body">
                                <h2>{props.movie.title}</h2>
                                <p className="card-text">{state.rating} /5</p>
                                <button onClick={handleShow}>Rate</button>
                                <props.Button/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default MovieCard;