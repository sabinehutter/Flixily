import React, { Component } from "react";
import API from "../../utils/API";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Card, CardWrapper } from 'react-swipeable-cards';
import LikeImage from '../../assets/img/Like.jpg';
import MovieCard from "../MovieCard/index"
import MovieData from "../../utils/moviesArray"
// import { Card } from 'react-native-elements';
// import Cards, { Card } from 'react-swipe-card'
// import Swipeable from 'react-swipeable';

const style = { width: "300px" }

// const handlers = useSwipeable({ onSwiping })

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


  renderCards() {
    return (
      <Card 
      onSwipeLeft={this.dislikeMovie.bind(this)}
      onSwipeRight={this.likeMovie.bind(this)}>
        {/* <MovieCard/> */}
      <a>
        <img src={this.state.image} alt={this.state.title} style={{ margin: '0 auto', float: "none", display: "block" }} />
        </a>
      </Card>
    );
}

  render() {
    return (
      <>

        <CardWrapper> 
       {this.renderCards()} 
       </CardWrapper>

        {/* <button className="btn btn-primary" style={{ backgroundImage: "url(" + LikeImage + ")" }} onClick={() => { this.likeMovie() }}></button>
        <button className="btn btn-primary" onClick={() => { this.dislikeMovie() }}>X</button> */}

      </>
    );
  };

};

export default SwipingCard;
