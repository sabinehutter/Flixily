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

  deleteSavedMovie = (id) => {
    console.log("deleteSavedMovie" + id)
    API.deleteMovie(id) 
    .then(() => this.loadSavedMovies())
  }

  

  render() {
    return (
      <div>
      
        <Row>
          <div className="col rounded text-center mt-4 mb-4 p-4">
            <h1 style = {{color : "#FFDD67", fontWeight: "bold"}}>Your Favorites Movies</h1>
          </div>
        </Row>
        <div className="container-fluid" >
          <div className="row" style={{justifyContent: "center"}}>
            {this.state.savedMovies.map(movie => {
              return (
                <MovieCard 
                  movie={movie} 
                  key={movie.id}
                  Button={() => (
                    <button
                      onClick={() => this.deleteSavedMovie(movie._id)}
                      className="btn btn-danger ml-2"
                      style={{ color: "white", width: "45%", margin: "auto"}}
                    >
                      Remove
                    </button>
                  )}
                  
                  
                  />
              )

              }
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Favorites;