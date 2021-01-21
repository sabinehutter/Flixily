import React, { Component } from "react";
import API from "../../utils/API";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Like from '../../assets/img/Like3.jpg';
import Dislike from '../../assets/img/Dislike3.jpg';
import "./style.css"



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

      <div style = {{marginTop : "50px"}}>

        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          ref={(r) => this.flippy = r}

          style={{ height: '30EM', width: '30%', margin: '0 auto', float: "none" }} /// these are optional style, it is not necessary
        >
          <FrontSide>

            <div className="card-header">
              <img src={this.state.image} alt="movie"/>
            </div>
            <div className="card-content">
              <h3>{this.state.title}</h3>
            </div>
          </FrontSide>
          <BackSide>
            <div className="card-body">
            <div className="card-content">
              <h3>{this.state.title}</h3>
            </div>
              <p className="card-text">{this.state.plot}</p>


            </div>
          </BackSide>
        </Flippy>

        <div className="LikeDislike">
          <div className="text-center LikeDislikeBtn">
            <button className="btn btn-link" onClick={() => { this.dislikeMovie() }}> <img src={Dislike} alt="dislike" width="70" /></button>
          </div>
          <div className="text-center LikeDislikeBtn">
            <button className="btn btn-link" onClick={() => { this.likeMovie() }}><img src={Like} alt="like" width="70" /></button>
          </div>
        </div>
      </div>


    );
  };

};

export default SwipingCard;
