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
    favorited: JSON.parse(localStorage.getItem('favorited')) || [],
    query: "",
    totalPages:null,
    offset:0,
    loaded: false,
    scrolling: false
  }

// GET GIFS FROM dummy_data
// Use setTimeout to imitate API call loading time
  // giphyData = ()=>{
  //   const { gifs } = this.state
  //   setTimeout(()=>{
  //     this.setState({ loaded: true })
  //   }, 3000)
  //   this.setState({gifs: dummy_data.data})
  // }

  giphyData = ()=>{
    const { gifs, offset } = this.state
    setTimeout(()=>{
      this.setState({ loaded: true, scrolling: false })
    }, 3000)
    this.setState({gifs: [...gifs, ...dummy_data.data.slice(offset, (offset+24))]})
  }
// Infinite Scroll
  giphyInfinite = ()=>{
    console.log('INFINITE SCROLL')
    this.setState(prevState => ({
      page: prevState.page + 1,
      offset: prevState.offset + 24,
      scrolling: true
    }), this.giphyData)
  }

  handleScroll = ()=>{
    const lastDiv = document.querySelector('div.last > div:last-child')
    console.log(lastDiv)
    const lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 100
    if(pageOffset > lastDivOffset - bottomOffset) this.giphyInfinite()
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

// Favorited gifs get stored in the browsers localStorage as 'favorited'
// to allow users to leave page and return to view favorited gifs
  favorite = (event)=>{
    const id = event.target.id
    const { gifs, favorited } = this.state;
    const currentFav = gifs.find(gif => gif.id === id)
    this.setState(prevState => {favorited: prevState.favorited.push(currentFav)},()=>{
      localStorage.setItem("favorited", [JSON.stringify(favorited)])
    })
  }

  componentDidMount(){
    this.giphyData()
    this.scrollEventListener = window.addEventListener('scroll', (event)=>{
      this.handleScroll(event)
    })
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
            { gifs.map(gif => <GifCard gif={gif} key={gif.id} loaded={loaded} favorite={this.favorite}/>)}
          </Row>
        </Container>
    );
  }
}

export default Home;
