import React, { Component } from "react";

import { Route, Redirect } from "react-router-dom";
import API from "../../utils/API";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Cards, { Card } from 'react-swipe-card'

const style = { width: "300px" }

const action = (action) => {
  console.log('action', action);
  };


class SwipingCard extends Component {
  state = {
    id: '',
    title: '',
    image: '',
    plot: '',
  }

  componentDidMount() {
    this.getMovie()
  };

  getMovie = () => {
    API.getRandomMovie()
      .then(res => {
        console.log(res)
        this.setState({
          id: res.data.imdbID,
          title: res.data.Title,
          image: res.data.Poster,
          plot: res.data.Plot,
        })
      });
  };

  likeMovie = () => {
    console.log("you liked" + this.state.title);
    API.likeMovie(this.state)
      .then(() => this.getMovie())
      .catch(err => console.log(err))
  };

  dislikeMovie = () => {
    console.log("you disliked" + this.state.title);
    this.getMovie()
  };


  render() {
    return (

      <div>

        <Flippy
          flipOnHover={false} 
          flipOnClick={true} 
          flipDirection="horizontal" 
          ref={(r) => this.flippy = r} 

          style={{ height: '70%', width: '30%', margin: '0 auto', float : "none" }} /// these are optional style, it is not necessary
        >
          <FrontSide
            style={{
              backgroundColor: '#41669d',
            }}
          >
            <img src={this.state.image} alt={this.state.title} style = {{margin: '0 auto', float : "none", display: "block"}} />
            <div className="card-body">
            <h5 className="card-title display-4" style = {{textAlign: 'center'}}>{this.state.title}</h5>
            </div>
    </FrontSide>
          <BackSide
            style={{ backgroundColor: '#175852' }}>
            <div className="card-body">
            <h5 className="card-title">{this.state.title}</h5>
            <p className="card-text">{this.state.plot}</p>
            

          </div>
    </BackSide>
        </Flippy>

        <button className="btn btn-primary" onClick={ () => {this.likeMovie()} }>CHECK</button>
        <button className="btn btn-primary" onClick={ () => {this.dislikeMovie()} }>X</button>

      </div>
        

    );
  };

};

export default SwipingCard;

