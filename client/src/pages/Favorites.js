import React, { Component } from "react";
import { Row} from "../components/Grid";
import API from "../utils/API";
import MovieCard from "../components/MovieCard";

class Favorites extends Component {
  state = {
    savedMovies: [],
    screenWidth: window.innerWidth
  }

  componentDidMount() {
    this.loadSavedMovies();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({screenWidth: window.innerWidth}, () => console.log(this.state.screenWidth))
  }

  loadSavedMovies = () => {
    console.log("loadsavedmovies")
    // WHICH API?
    API.getMovies()
      .then(res => {
        console.log(res)
        this.setState({ savedMovies: res.data })
      })
  }

  render() {
    return (
      <div>
      
        <Row>
          <div className="col rounded text-center bg-info mt-4 mb-4 p-4">
            <h1>Your Favorites Movies</h1>
          </div>
        </Row>
        
        {this.state.savedMovies.map(movie => {
          return (
            <MovieCard movie={movie} key= {movie.id}/>
          )

          }
        )}
      </div>
    )
  }
}
export default Favorites;