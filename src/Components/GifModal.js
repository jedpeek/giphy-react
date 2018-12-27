import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import clear_heart from "../Images/clear_heart.png"
import red_heart from "../Images/red_heart.png"
class GifModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
  }

  toggle=()=>this.setState({modal: !this.state.modal});
  checkFavs = ()=> this.props.favorited.find(gif=> gif.id === this.props.id);

  render() {
    const { img, title, author, favorited, favorite, unfavorite } = this.props
    let favHeart = <img onClick={favorite} id={this.props.id} src={clear_heart} className="fav-heart" />;
    let unfavHeart = <img onClick={unfavorite} id={this.props.id} src={red_heart} className="fav-heart" />


    return (
      <React.Fragment>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
          {title}
          </ModalHeader>
          <ModalBody>
            <img src={img} alt={title}/>
          </ModalBody>
          <ModalFooter>

              <small className="text-muted">created by: {author}</small>

            {this.checkFavs() ? unfavHeart : favHeart}
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default GifModal;
