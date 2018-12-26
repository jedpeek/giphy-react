import React, { Component } from 'react';
import axios from 'axios'
import dummy_data from '../dummy_data'
import {Container, Row} from 'reactstrap'
import GifCard from '../Components/GifCard'
import SearchForm from '../Components/SearchForm'
const api_key = process.env.GIPHY_KEY || 'XeV04VURnwNCs7nYczgfCQ3bl7udAXiX'

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
// Search Giphy based on Query
  giphySearch = (event)=>{
    event.preventDefault();
    this.setState({loaded: false})
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${api_key}`)
    .then(response => this.setState({gifs: response.data.data}))
    .then(()=> this.setState({loaded: true}))
    .catch(error => console.log(error));
  }
// Handle form change
  handleChange = (event)=> this.setState({[event.target.name]: event.target.value});

  componentDidMount(){
    this.giphyData()
  }
  render() {
    const { gifs, loaded } = this.state;
    return (
        <Container fluid>
          <Row className='last'>
          <SearchForm
            name='query'
            gifs={this.state.gifs}
            loaded={this.state.loaded}
            giphySearch={this.giphySearch}
            handleChange={this.handleChange}
            />
            { gifs.map(gif => <GifCard gif={gif} key={gif.id} loaded={loaded} />)}
          </Row>
        </Container>
    );
  }
}

export default Home;
