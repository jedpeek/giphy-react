import React, { Component } from 'react';
import axios from 'axios'
import dummy_data from '../dummy_data'
import {Container, Row} from 'reactstrap'
import GifCard from '../Components/GifCard'
class Home extends Component {
  state = {
    gifs:[],
    query: "",
    loaded: false
  }
// GET GIFS FROM dummy_data
// Use setTimeout to imitate API call loading time
  giphyData = ()=>{
    const { gifs } = this.state
    setTimeout(()=>{
      this.setState({ loaded: true })
    }, 3000)
    this.setState({gifs: dummy_data.data})
  }

  componentDidMount(){
    this.giphyData()
  }
  render() {
    const { gifs, loaded } = this.state;
    return (
        <Container fluid>
          <Row className='last'>
            { gifs.map(gif => <GifCard gif={gif} key={gif.id} loaded={loaded} />)}
          </Row>
        </Container>
    );
  }
}

export default Home;
