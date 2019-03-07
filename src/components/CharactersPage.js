import React from "react";
import CharModal from "./CharModal";

class CharactersPage extends React.Component {
	state = {
		selectedOption: false,
		charChoice: 0
	}

	getChar = (e) => {
		const target = e.target.id;
		this.setState(() => {
			return {
				selectedOption: !this.state.selectedOption,
				charChoice: target
			}
		})
	}
	removeModal = () => {
		this.setState(() => {
			return {
				selectedOption: false
			}
		})
	}

	render() {
		const { people, imagesP } = this.props;
		return (
			<div className="bg">
			<div className="content">
				<div className="content-names">
					{
						imagesP.map((image, index) => {
							return (
								<img className="content-names--img" key={index} src={image} id={index} onClick={this.getChar} />
							)
						})
					}
					<CharModal selectedOption={this.state.selectedOption} charChoice={this.state.charChoice} removeModal={this.removeModal} people={people} images={imagesP} />
				</div>
			</div>
			</div>
		)
	}
}

export default CharactersPage;