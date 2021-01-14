// import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import Example from "../components/SwipeExample"

// import { MovieList, MovieListItem } from "../components/MovieList";
// import API from "../utils/API";
// class Favorites extends Component {
  // state = {
  //   savedMovies: [],
  //   screenWidth: window.innerWidth
  // }
  // componentDidMount() {
  //   this.loadSavedMovies();
  //   window.addEventListener('resize', this.updateDimensions);
  // }
  // updateDimensions = () => {
  //   this.setState({screenWidth: window.innerWidth}, () => console.log(this.state.screenWidth))
  // }
  // loadSavedMovies = () => {
  //   // WHICH API?
  //   API.getSavedMovies()
  //     .then(res =>
  //       this.setState({ savedMovies: res.data }))
  // }
  // deleteSavedMovie = (event, movieId) => {
  //   event.preventDefault();
  //   // Which API?
  //   API.deleteSavedBook(movieId)
  //     .then(res => this.loadSavedMovies())
  //     .catch(err => console.log(err));
  // };
  // render() {
  //   return (
  //     <div>
  //       <Example />
  //     </div>
      // <Container>
      //   <Row>
      //     <div className="col rounded text-center bg-info mt-4 mb-4 p-4">
      //       <h1>Your Favorites Movies</h1>
      //     </div>
      //   </Row>
      //   <Row>
      //     <div className="col border border-rounded p-3 mb-4">
      //       <h4>Your Favorites Movies</h4>
      //       {!this.state.savedMovies.length ? (
      //         <h6 className="text-center">No movies Liked to display</h6>
      //       ) : (
      //           <MovieList>
      //             {this.state.savedMovies.map(movie => {
      //               return (
      //                 <MovieListItem
      //                   key={movie.movieId}
      //                   googleId={book.movieId}
      //                   title={movie.title}
      //                   director={movie.director}
      //                   description={book.description}
      //                   thumbnail={movie.thumbnail}
      //                   href={movie.href}
      //                   // WHICH API?
      //                   date={API.getDate(movie._id)}
      //                   saved={true}
      //                   clickEvent={this.deleteSavedMovie}
      //                   screenWidth={this.state.screenWidth}
      //                 />
      //               );
      //             })}
      //           </MovieList>
      //         )}
      //     </div>
      //   </Row>
      // </Container>
//     )
//   }
// }
// export default Favorites;

import React, { useState, useMemo } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

const db = [
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: './img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: './img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/dinesh.jpg'
  }
]

const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Advanced () {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      <div className='buttons'>
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div>
      {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
    </div>
  )
}

export default Advanced