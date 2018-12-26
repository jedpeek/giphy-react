import React, { Component } from 'react';
import GifCard from'./GifCard'
import { Container, Row } from 'reactstrap'
class Favorites extends Component {
  state={
    favorited:[],
    loaded: true,
  }
// Retrieves Favorited GIFS from localStorage
// If no GIFS are available an empty array is returned
  getFavorites = ()=>{
    this.setState({favorited: JSON.parse(localStorage.getItem('favorited')) || []})
  }

  componentDidMount(){
    this.getFavorites()
  }

// Removes GIFS from localStorage by returning all GIFS
// that do not match the gif id that was unfavorited
  unFavorite = (event)=>{
    let id = event.target.id
    const { favorited } = this.state;
    let filterFav = favorited.filter(gif => gif.id !== id)
    this.setState({favorited: filterFav },()=>{
      localStorage.setItem("favorited", [JSON.stringify(this.state.favorited)])
    })
  }

  render() {
    const { favorited, loaded } = this.state;
    return (
      <Container fluid>
        <Row>
        { favorited.length ? favorited.map(gif => <GifCard gif={gif} key={gif.id}  unFavorite={this.unFavorite} loaded={loaded} />) : <h1>YOU NEED TO FAVORITE SOME GIFS</h1> }
        </Row>
      </Container>
    );
  }

}

export default Favorites;
