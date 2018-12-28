import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
		const { img, title, author, favorite, unfavorite } = this.props
		console.log(img)
		let favHeart = <img onClick={favorite} id={this.props.id} src={clear_heart} alt="RED HEART" className="fav-heart" />;
		let unfavHeart = <img onClick={unfavorite} id={this.props.id} src={red_heart} alt="CLEAR HEART" className="fav-heart" />


		return (
			<React.Fragment>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>
					{title}
					</ModalHeader>
					<ModalBody>
						<img src={img} alt={title} className='img-fluid'/>
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
