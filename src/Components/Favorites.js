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

  unfavorite = (event)=>{
    let filterFav = this.state.favorited.filter(gif => gif.id !== event.target.id)
    this.setState({favorited: filterFav },()=>{
      localStorage.setItem("favorited", [JSON.stringify(this.state.favorited)])
    })
  }

  componentDidMount(){
    this.getFavorites()
  }


  render() {
    const { favorited, loaded } = this.state;

    return (
      <Container fluid>
        <Row>
        { favorited.length ? favorited.map(gif => <GifCard gif={gif} key={gif.id} favorited={this.state.favorited}  unfavorite={this.unfavorite} loaded={loaded} />) : <h1>YOU NEED TO FAVORITE SOME GIFS</h1> }
        </Row>
      </Container>
    );
  }

}

export default Favorites;
