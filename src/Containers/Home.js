import React, { Component, Fragment } from 'react';
import axios from 'axios'
import {Container, Row, Col} from 'reactstrap'
import GifCard from '../Components/GifCard'
import Search from '../Components/Search'
import SortDropdown from '../Components/SortDropdown'

const api_key = process.env.GIPHY_KEY || 'XeV04VURnwNCs7nYczgfCQ3bl7udAXiX'
const searchURL = "http://api.giphy.com/v1/gifs/search?limit=50"
const trendingURL = "http://api.giphy.com/v1/gifs/trending?limit=50"


class Home extends Component {
  state = {
    gifs:[],
    favorited: JSON.parse(localStorage.getItem('favorited')) || [],
    query: "",
    offset:0,
    loaded: false,
    url: trendingURL
  }
//// START GIFS API FUNCTIONS /////
  getGifs = ()=> {
    const { query, offset, gifs, url } = this.state;
    let fullURL = `${url}&offset=${offset}&api_key=${api_key}`
    if (url === searchURL) fullURL +=`&q=${query}`
    this.setState({loaded: false })
    axios.get(fullURL)
      .then(res => this.setState({loaded: true, gifs:[...gifs, ...res.data.data]}))
      .catch(error => console.log(error))
    }

    searchSubmit = (event)=> {
      event.preventDefault()
      this.setState({gifs: [], url: searchURL}, this.getGifs)
    }
//// END GIFS API FUNCTIONS /////

//// START INFINITE SCROLL /////
  giphyInfinite = ()=>{
    this.setState(prevState => ({
      offset: prevState.offset + 51,
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
//// END INFINITE SCROLL /////

//// START SORT FUNCTIONS ////
  newest = (arr) => {
    const newestGifs = arr.sort(function(a,b){
      return new Date(b.import_datetime) - new Date(a.import_datetime);
    });
  this.setState({gifs: newestGifs})}

  oldest = (arr) => {
      const oldestGifs = arr.sort(function(a,b){
      return new Date(a.import_datetime) - new Date(b.import_datetime);
    });
    this.setState({gifs: oldestGifs})}
//// END SORT FUNCTIONS ////



//// START FAVORITING FUNCTIONS ////
// Favorited gifs get stored in the browsers localStorage as 'favorited'
// to allow users to leave page and return to view favorited gifs
  favorite = (event)=>{
    const localFavs = JSON.parse(localStorage.getItem('favorited')) || []
    const currentFav = this.state.gifs.find(gif => gif.id === event.target.id)
    if(localFavs !== [] && localFavs.find(gif => gif.id === currentFav.id)) return

    this.setState(prevState => ({favorited: prevState.favorited.concat(currentFav)}),
      ()=>{localStorage.setItem("favorited", [JSON.stringify(this.state.favorited)])
    })
  }

  // Removes GIFS from localStorage by returning all GIFS
  // that do not match the gif id that was unfavorited
    unfavorite = (event)=>{
      let id = event.target.id
      const { favorited } = this.state;
      let filterFav = favorited.filter(gif => gif.id !== id)
      this.setState({favorited: filterFav },()=>{
        localStorage.setItem("favorited", [JSON.stringify(this.state.favorited)])
      })
    }
//// END FAVORITING FUNCTIONS ////

//// HANDLE CHANGE FUNCTION ////
  handleChange = (e)=> this.setState({[e.target.name]: e.target.value});

//// LIFECYCLE METHODS ////
  componentDidMount(){
    if(this.state.gifs.length === 0) this.getGifs()
    this.scrollEventListener = window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.url !== this.state.url) this.setState({ offset: 0 })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  render() {
    const { gifs, loaded, favorited } = this.state;
    return (
      <Fragment>
        <Container fluid className="header">
          <Row>
            <Search
              name='query'
              gifs={this.state.gifs}
              loaded={loaded}
              giphySearch={this.getGifs}
              handleChange={this.handleChange}
              onClick={this.searchClick}
              searchSubmit={this.searchSubmit}
              />
            </Row>
          </Container>
          <Container fluid>
            <Col xs="1" className="sort-div">
              <SortDropdown newest={()=>this.newest(this.state.gifs)} oldest={()=>this.oldest(this.state.gifs)} />
            </Col>
            <Row className='last'>
              { gifs.map(gif => <GifCard
                   gif={gif}
                   key={gif.id}
                   loaded={loaded}
                   favorite={this.favorite}
                   unfavorite={this.unfavorite}
                   favorited={favorited}/>
                 )
              }
            </Row>
          </Container>
        </Fragment>
    );
  }
}

export default Home;
// If needed for testing use dummy_data to limit request
// made to giphy API with the included rate limited api key
// import dummy_data from '../dummy_data'
  // getGifs = ()=>{
  //   const { gifs, offset } = this.state
  //   setTimeout(()=>{
  //     this.setState({ loaded: true, scrolling: false, search: false })
  //   }, 3000)
  //   this.setState({gifs: [...gifs, ...dummy_data.data.slice(offset, (offset+25))]})
  // }
