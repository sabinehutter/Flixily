import React, {useState} from "react";
import API from "../utils/API";
import Modal from 'react-bootstrap/Modal'


function MovieCard ({movie}) {
    const state = movie;
    const [show, setShow] = useState(false);
      
    const handleClose = (rating) => {
        console.log("the rating is ", rating);
        setShow(false);
        state.rating = parseInt(rating);
        API.rateMovie(state._id, state.rating)

    }

    const handleShow = () => setShow(true);
    
    // rateMovie = () => {
    //     let mov = {};

    //     API.getMovie(this.state.title)
    //     .then((req, res) => {
    //         mov = res;
    //     })
        
    //     render() {

    //     }
    // }

    // rateMovie() {


     
    return (
        <div>
        <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Rate {movie.title}</Modal.Title>
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
                                <img className="" src={movie.image} alt={movie.title}/>
                            </div>
                            <div className="card-body">
                                <h2>{movie.title}</h2>
                                <p className="card-text">{state.rating} /5</p>
                                <button onClick={handleShow} >Rate</button>
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