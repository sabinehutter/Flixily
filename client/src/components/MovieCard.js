import React, { useState } from "react";
import API from "../utils/API";
import Modal from 'react-bootstrap/Modal'
import { render } from "react-dom";
import Flippy, { FrontSide, BackSide } from 'react-flippy';



function MovieCard(props) {
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
                    <button style={{ margin: "5px" }} className="btn btn-warning" variant="secondary" onClick={handleClose}>
                        Close
                </button>
                    <button className="btn btn-warning" style={{ margin: "5px" }} variant="primary" onClick={(e) => handleClose(e.target.parentElement.childNodes[0].value)}>
                        Save Rating
                </button>
                </Modal.Body>
            </Modal>
            {/* <div className="container-fluid"> */}
                {/* <div className="row"> */}
                    {/* <div className="col-md-4"> */}
                        {/* <div className="card"> */}
                            {/* <div className="card-horizontal"> */}
                                {/* <div className="img-square-wrapper"> */}
                                    {/* <img className="" src={props.movie.image} alt={props.movie.title} /> */}
                                {/* </div> */}
                                {/* <div className="card-body"> */}
                                    {/* <h2>{props.movie.title}</h2> */}
                                    {/* <p className="card-text">{state.rating} /5</p> */}
                                    {/* <button className="btn btn-warning" style={{ color: "white" }} onClick={handleShow}>Rate</button> */}
                                    {/* <props.Button /> */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}
            <Flippy
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="horizontal"
                // ref={(r) => this.flippy = r}

                style={{ height: '600px', width: "350px", padding: '10px', float: "none" }} /// these are optional style, it is not necessary
                >
                <FrontSide>

                    <div className="img">
                    <img style={{ width: "100%"}} src={props.movie.image} alt={props.movie.title}/>
                    </div>
                    <div className="card-content">
                    <h3 style={{ textAlign: "center" }}>{props.movie.title}</h3>
                    </div>
                </FrontSide>
                <BackSide>
                    <div className="card-body" style={{height: "60%"}}>
                        <div className="card-content">
                            <h1 style={{ textAlign: "center", color: "rgb(255, 221, 103", fontWeight: "bold" }} >{props.movie.title}</h1>
                        </div>
                        <h3 className="card-text" style={{textAlign: "center"}}>{state.rating} / 5</h3>
                        <div style={{position: "absolute", bottom: "35px", width: "85%", margin: "auto"}}>
                            <button className="btn btn-warning" style={{ color: "white", width: "45%", margin: "auto"}} onClick={handleShow}>Rate</button>
                            <props.Button />
                        </div>
                    </div>
                </BackSide>
        </Flippy>



        </div>
    )
}


export default MovieCard;