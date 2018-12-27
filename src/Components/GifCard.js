import React, {Component} from 'react';
import { CardImg, Col } from 'reactstrap';
import GifModal from './GifModal'
import loading_gif from '../Images/LoadingGif.gif'
class GifCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      favorited: false
    };
  }

  isFavorited = ()=>{
    const favs = JSON.parse(localStorage.getItem('favorited'))
    return favs.find(gif => gif.id === this.props.gif.id)
  }

  toggle=()=>{this.setState({modal: !this.state.modal})}
  cutTitle = () => this.props.gif.title.split('GIF')[0].toUpperCase()
  author = () => this.props.gif.title.split(' by ').pop().toUpperCase()
  handleClick = ()=>{
    this.isFavorited();
    this.toggle();
  }

  render(){
    const { images, title, id } = this.props.gif
    let imgSrc="";
    this.props.loaded ? imgSrc = images.fixed_width.url : imgSrc = loading_gif
    return (
      <Col xl="4" lg='6' md='6' sm="12" xs="12" key={this.props.id} >
          <CardImg  src={imgSrc} alt={title} onClick={this.handleClick} className="gif-img img-fluid" />
          { this.state.modal ? <GifModal
            show={this.state.modal}
            url={this.props.gif.images.fixed_width.url}
            img={imgSrc} title={this.cutTitle()}
            author={this.author()}
            id={id}
            favorite={this.props.favorite}
            unfavorite={this.props.unfavorite}
            favorited={this.props.favorited}
            />
            : null
          }
      </Col>
    );
  }
};

export default GifCard;
