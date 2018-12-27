import React, { Component, Fragment } from 'react';
import axios from 'axios'
import dummy_data from '../dummy_data'
import {Container, Row, Button,Col} from 'reactstrap'
import GifCard from '../Components/GifCard'
import SearchForm from '../Components/SearchForm'
import SortDropdown from '../Components/SortDropdown'
const api_key = process.env.GIPHY_KEY || 'XeV04VURnwNCs7nYczgfCQ3bl7udAXiX'
const searchURL = "http://api.giphy.com/v1/gifs/search?"
const trendingURL = "http://api.giphy.com/v1/gifs/trending?"
const randomURL = "http://api.giphy.com/v1/gifs/random?rating=g"
class Home extends Component {
  state = {
    gifs:[],
    favorited: JSON.parse(localStorage.getItem('favorited')) || [],
    query: "",
    offset:0,
    loaded: false,
    scrolling: false,
    search: false,
    url: trendingURL
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

  // COMBINE API CALLS TO ONE FUNCTION
    getGifs = (event)=> {
      if(event) event.preventDefault();
      const { query, offset, gifs, url } = this.state;
      let fullURL = `${url}&offset=${offset}&api_key=${api_key}&limit=50`
      if (url === searchURL) fullURL +=`&q=${query}`
      this.setState({loaded: false, search: true})
      axios.get(fullURL)
        .then(res => this.setState({gifs:[...gifs, ...res.data.data]}))
        .then(this.newest(), this.setState({loaded: true}))
        .catch(error => console.log(error))
      }
// Infinite Scroll
  giphyInfinite = ()=>{
    this.setState(prevState => ({
      offset: prevState.offset + 50,
      scrolling: true
    }), this.getGifs)
  }

  handleScroll = (event)=>{
    const lastDiv = document.querySelector('div.last > div:last-child')
    console.log(lastDiv)
    const lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 400
    if(pageOffset > lastDivOffset - bottomOffset) this.giphyInfinite()
  }


  searchClick = ()=> this.setState({url: searchURL})
  randomClick = ()=> {
    this.setState({url: randomURL, gifs:[]}, this.getGifs())
  }

  newest = () => {
    const newestGifs = this.state.gifs.sort(function(a,b){
      return new Date(b.import_datetime) - new Date(a.import_datetime);
    });
  this.setState({gifs: newestGifs})
  }

  oldest = () => {
      const oldestGifs = this.state.gifs.sort(function(a,b){
      return new Date(a.import_datetime) - new Date(b.import_datetime);
    });
    this.setState({gifs: oldestGifs})
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

// LIFECYCLE METHODS
  componentDidMount(){
    if(this.state.gifs.length === 0) this.giphyData()
    this.scrollEventListener = window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.url !== this.state.url) this.setState({ offset: 0 })
    if(prevState.query !== this.state.query ) this.setState({url: searchURL, gifs:[] })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
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
              giphySearch={this.getGifs}
              handleChange={this.handleChange}
              onClick={this.searchClick}
              />
          </Row>
        </Container>
        <Container fluid>
        <Col xs="1" className="sort-div">
          <SortDropdown newst={this.newest} oldest={this.oldest} random={this.randomClick} />
        </Col>
          <Row className='last'>
            { gifs.map(gif => <GifCard gif={gif} key={gif.id} loaded={loaded} favorite={this.favorite}/>)}
          </Row>
        </Container>
        </Fragment>
    );
  }
}

export default Home;



  // giphyData = ()=>{
  //   const { offset, gifs } = this.state;
  //   this.setState({loaded: false, search: true})
  //   axios.get(`http://api.giphy.com/v1/gifs/trending?offset=${offset}&api_key=${api_key}`)
  //   .then(response => this.setState({gifs:[...gifs, ...response.data.data]})
  //   ).then(()=> this.setState({loaded: true}))
  //   .catch(error => console.log(error));
  // }

  // Search Giphy based on Query
    // giphySearch = (event)=>{
    //   event.preventDefault();
    //   const { query, offset, gifs } = this.state;
    //   this.setState({loaded: false, search: true})
    //   axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&offset=${offset}&api_key=${api_key}`)
    //     .then(response => this.setState({gifs:[...gifs, ...response.data.data]})
    //     .then(()=> this.setState({loaded: true}))
    //     .catch(error => console.log(error))
    // }
