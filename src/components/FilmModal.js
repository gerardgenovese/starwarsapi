import React from "react";
import Modal from "react-modal";

class FilmModal extends React.Component {


	componentDidMount() {
		Modal.setAppElement('body');
	}

	render() {
		const { selectedOption, removeModal, filmChoice, films, images } = this.props;
		return (
			<Modal isOpen={selectedOption} onRequestClose={removeModal} contentLabel="Selected Option" closeTimeoutMS={300} className="modal">
				<div className="modal-close">
					<button onClick={removeModal}>X</button>
				</div>
				<div className="modal-title">
					<div>Episode {films[filmChoice].episode_id}</div>
					<div>{films[filmChoice].title}</div>
				</div>
				<div>
				<img src={images[filmChoice]} className="modal-img" />
				</div>
				<div className="modal-info">
					<p><strong>Producers:</strong> {films[filmChoice].producer}</p>
					<p><strong>Director:</strong> {films[filmChoice].director}</p>
				</div>
				<div className="modal-credits">
					<h1>Opening Crawl</h1>
					<p className="modal-openingCrawl">{films[filmChoice].opening_crawl}</p>
				</div>
			</Modal>
		)
	}

}

export default FilmModal;