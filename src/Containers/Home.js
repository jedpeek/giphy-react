import React, { Component, Fragment } from 'react';
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
    scrolling: false,
    search: false
  }

// GET GIFS FROM dummy_data
// Use setTimeout to imitate API call loading time
  giphyData = ()=>{
    const { gifs, offset } = this.state
    setTimeout(()=>{
      this.setState({ loaded: true, scrolling: false, search: false })
    }, 3000)
    this.setState({gifs: [...gifs, ...dummy_data.data.slice(offset, (offset+25))]})
  }

  // giphyData = ()=>{
  //   const { offset, gifs } = this.state;
  //   this.setState({loaded: false, search: true})
  //   axios.get(`http://api.giphy.com/v1/gifs/trending?offset=${offset}&api_key=${api_key}`)
  //   .then(response => this.setState({gifs:[...gifs, ...response.data.data]})
  //   ).then(()=> this.setState({loaded: true}))
  //   .catch(error => console.log(error));
  // }

// Infinite Scroll
  giphyInfinite = ()=>{
    this.setState(prevState => ({
      page: prevState.page + 1,
      offset: prevState.offset + 25,
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
    const { query, offset } = this.state;
    this.setState({loaded: false, search: true})
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&offset=${offset}&api_key=${api_key}`)
    .then(response => this.setState({gifs: response.data.data}))
    .then(()=> this.setState({loaded: true}))
    .catch(error => console.log(error));
  }

// Handle form change
  handleChange = (event)=> this.setState({[event.target.name]: event.target.value});

// Favorited gifs get stored in the browsers localStorage as 'favorited'
// to allow users to leave page and return to view favorited gifs
  favorite = (event)=>{
    const localFavs = JSON.parse(localStorage.getItem('favorited'))
    const id = event.target.id
    const currentFav = this.state.gifs.find(gif => gif.id === id)
    if(localFavs.find(gif => gif.id === currentFav.id)){
      return
    }else {
      this.setState(prevState => ({favorited: prevState.favorited.concat(currentFav)
      }),
        ()=>{localStorage.setItem("favorited", [JSON.stringify(this.state.favorited)])
      })
    }
  }

  componentDidMount(){
    if(this.state.gifs.length === 0) this.giphyData() 
    this.scrollEventListener = window.addEventListener('scroll', (event)=>{
      this.handleScroll(event)
    })
  }

  render() {
    const { gifs, loaded, search, query } = this.state;
    return (
      <Fragment>
        <Container fluid className="header">
          <Row>
            <SearchForm
              name='query'
              gifs={this.state.gifs}
              loaded={this.state.loaded}
              giphySearch={this.giphySearch}
              handleChange={this.handleChange}
              />
          </Row>
        </Container>
        <Container fluid>
          <h1 className="gif-collection-title" align='left'>TRENDING</h1>
          <Row className='last'>
            { gifs.map(gif => <GifCard gif={gif} key={gif.id} loaded={loaded} favorite={this.favorite}/>)}
          </Row>
        </Container>
        </Fragment>
    );
  }
}

export default Home;
