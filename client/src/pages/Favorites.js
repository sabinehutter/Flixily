import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
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

  // deleteSavedMovie = (event, movieId) => {
  //   event.preventDefault();
  //   // Which API?
  //   API.deleteSavedBook(movieId)
  //     .then(res => this.loadSavedMovies())
  //     .catch(err => console.log(err));
  // };
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
            <MovieCard movie={movie} key={movie.id}/>
          )

          }
        )}
      </div>
    )
  }
}
export default Favorites;
// // // // // // // // // // // // // // // //   loadSavedMovies = () => {
// // // // // // // // // // // // // // // //     // WHICH API?
// // // // // // // // // // // // // // // //     API.getSavedMovies()
// // // // // // // // // // // // // // // //       .then(res =>
// // // // // // // // // // // // // // // //         this.setState({ savedMovies: res.data }))
// // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // //   deleteSavedMovie = (event, movieId) => {
// // // // // // // // // // // // // // // //     event.preventDefault();
// // // // // // // // // // // // // // // //     // Which API?
// // // // // // // // // // // // // // // //     API.deleteSavedBook(movieId)
// // // // // // // // // // // // // // // //       .then(res => this.loadSavedMovies())
// // // // // // // // // // // // // // // //       .catch(err => console.log(err));
// // // // // // // // // // // // // // // //   };
// // // // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // // // //       <Container>
// // // // // // // // // // // // // // // //         <Row>
// // // // // // // // // // // // // // // //           <div className="col rounded text-center bg-info mt-4 mb-4 p-4">
// // // // // // // // // // // // // // // //             <h1>Your Favorites Movies</h1>
// // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // //         </Row>
// // // // // // // // // // // // // // // //         <Row>
// // // // // // // // // // // // // // // //           <div className="col border border-rounded p-3 mb-4">
// // // // // // // // // // // // // // // //             <h4>Your Favorites Movies</h4>
// // // // // // // // // // // // // // // //             {/* {!this.state.savedMovies.length ? (
// // // // // // // // // // // // // // // //               <h6 className="text-center">No movies Liked to display</h6>
// // // // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // // // //                 <MovieList>
// // // // // // // // // // // // // // // //                   {this.state.savedMovies.map(movie => {
// // // // // // // // // // // // // // // //                     return (
// // // // // // // // // // // // // // // //                       <MovieListItem
// // // // // // // // // // // // // // // //                         key={movie.movieId}
// // // // // // // // // // // // // // // //                         googleId={book.movieId}
// // // // // // // // // // // // // // // //                         title={movie.title}
// // // // // // // // // // // // // // // //                         director={movie.director}
// // // // // // // // // // // // // // // //                         description={movie.description}
// // // // // // // // // // // // // // // //                         thumbnail={movie.thumbnail}
// // // // // // // // // // // // // // // //                         href={movie.href}
// // // // // // // // // // // // // // // //                         // WHICH API?
// // // // // // // // // // // // // // // //                         date={API.getDate(movie._id)}
// // // // // // // // // // // // // // // //                         saved={true}
// // // // // // // // // // // // // // // //                         clickEvent={this.deleteSavedMovie}
// // // // // // // // // // // // // // // //                         screenWidth={this.state.screenWidth}
// // // // // // // // // // // // // // // //                       />
// // // // // // // // // // // // // // // //                     );
// // // // // // // // // // // // // // // //                   })}
// // // // // // // // // // // // // // // //                 </MovieList>
// // // // // // // // // // // // // // // //               )} */}
// // // // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // // // //         </Row>
// // // // // // // // // // // // // // // //       </Container>
// // // // // // // // // // // // // // // //     ) 

// // // // // // // // // // // // // // // // export default Saved;





{/*             
            {!this.state.savedMovies.length ? (
              <h6 className="text-center">No movies Liked to display</h6>
            ) : (
                <MovieList>
                  {this.state.savedMovies.map(movie => {
                    return (
                      <MovieListItem
                        key={movie.movieId}
                        googleId={book.movieId}
                        title={movie.title}
                        director={movie.director}
                        description={book.description}
                        thumbnail={movie.thumbnail}
                        href={movie.href}
                        // WHICH API?
                        date={API.getDate(movie._id)}
                        saved={true}
                        clickEvent={this.deleteSavedMovie}
                        screenWidth={this.state.screenWidth}
                      />
                    );
                  })}
                </MovieList>
              )} */}
