import React, { Component } from 'react';
import axios from 'axios'
import dummy_data from '../dummy_data'
import {Container, Row} from 'reactstrap'

class Home extends Component {
  state = {
    gifs:[],
    query: "",
    loaded: false
  }
// GET GIFS FROM dummy_data
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
      <React.Fragment>
        <Container fluid>
          <Row className='last'>
            { gifs.map(gif => <li key={gif.id}>{gif.slug}</li>)}
          </Row>
        </Container>
      </React.Fragment>
    );
  }

}

export default Home;
