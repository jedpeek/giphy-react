import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class GifModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      favorited: false
    };
  }
  toggle=()=>{this.setState({modal: !this.state.modal})}

  render() {
    const { img, title, author } = this.props
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
            <div display="block" className="float-left">
              <small className="text-muted">created by: {author}</small>
            </div>
            <Button color="primary" onClick={this.props.favorite} className="float-right" id={this.props.id} block>Favorite</Button>
            <Button color="primary" onClick={this.props.unFavorite} className="float-right" id={this.props.id} block>UNFavorite</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default GifModal;
