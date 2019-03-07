import React from "react";
import Modal from "react-modal";


class CharModal extends React.Component {


	componentDidMount() {
		Modal.setAppElement('body');
	}

	render() {
		const { selectedOption, removeModal, charChoice, people, images } = this.props;
		return (
			<Modal isOpen={selectedOption} onRequestClose={removeModal} contentLabel="Selected Option" closeTimeoutMS={300} className="modal">
				<div className="modal-close">
					<button onClick={removeModal}>X</button>
				</div>
				<div>
					<div className="modal-title">
						{people[charChoice].name}
					</div>
					<img src={images[charChoice]} className="modal-img" />
					<div className="modal-info modal-stats">
						<p><strong>Height:</strong> {people[charChoice].height}</p>
						<p><strong>Mass:</strong> {people[charChoice].mass}</p>
					</div>
					<div>

					</div>
				</div>
			</Modal>
		)
	}

}

export default CharModal;