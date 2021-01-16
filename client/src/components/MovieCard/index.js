import React, { Component } from "react";
import API from "../../utils/API";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Card, CardWrapper } from 'react-swipeable-cards';
import LikeImage from '../../assets/img/Like.jpg';


const style = { width: "300px" }

const action = (action) => {
    console.log('action', action);
};


class MovieCard extends Component {
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
            <Flippy
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="horizontal"
                ref={(r) => this.flippy = r}

            // style={{ height: '70%', width: '30%', margin: '0 auto', float: "none" }} /// these are optional style, it is not necessary
            >
                {/* <CardWrapper>
            <Card> */}
                <FrontSide
                >
                    <img src={this.state.image} alt={this.state.title} style={{ margin: '0 auto', float: "none", display: "block" }} />
                    {/* <div className="card-body">
                        <h5 className="card-title display-4" style={{ textAlign: 'center' }}>{this.state.title}</h5>
                    </div> */}
                </FrontSide>
                <BackSide
                >
                    <div className="card-body">
                        <h5 className="card-title display-4" style={{ textAlign: 'center' }}>{this.state.title}</h5>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">{this.state.plot}</p>


                    </div>
                </BackSide>
                {/* </Card>
              </CardWrapper > */}
            </Flippy>

        )
    }
}

export default MovieCard;