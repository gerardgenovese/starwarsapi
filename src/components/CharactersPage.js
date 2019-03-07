import React from "react";
import CharModal from "./CharModal";

class CharactersPage extends React.Component {
	state = {
		images: [
			"/images/people/luke.jpg",
			"/images/people/c3po.jpg",
			"/images/people/r2d2.jpg",
			"/images/people/vader.jpg",
			"/images/people/leia.jpg",
			"/images/people/owen-lars.jpg",
			"/images/people/beru-lars.jpg",
			"/images/people/r5d4.jpg",
			"/images/people/darklighter.jpg",
			"/images/people/kenobi.jpg"
		],
		selectedOption: false,
		charChoice: 0
	};

	getChar = (e) => {
		const target = e.target.id;
		this.setState(() => {
			return {
				selectedOption: !this.state.selectedOption,
				charChoice: target
			}
		})
	};
	removeModal = () => {
		this.setState(() => {
			return {
				selectedOption: false
			}
		})
	};


	render() {
		const { people } = this.props;
		console.log(this.state);
		return (
			<div>
			

					<div className="bg">
						<div className="content">
							<div className="content-names">
								{/* {
								this.state.images.map((image, index) => {
									return (
										<img className="content-names--img" key={index} src={image} id={index} onClick={this.getChar} />
									)
								})
								} */}
										<img src={this.state.images[0]} alt="Star Wars" />
										<img src={this.state.images[2]} alt="Star Wars" />
										<img src={this.state.images[1]} alt="Star Wars" />
										<img src={this.state.images[3]} alt="Star Wars" />
										<img src={this.state.images[4]} alt="Star Wars" />
										<img src={this.state.images[5]} alt="Star Wars" />
										<img src={this.state.images[6]} alt="Star Wars" />
										<img src={this.state.images[7]} alt="Star Wars" />
										<img src={this.state.images[8]} alt="Star Wars" />
										<img src={this.state.images[9]} alt="Star Wars" />
								<CharModal selectedOption={this.state.selectedOption} charChoice={this.state.charChoice} removeModal={this.removeModal} people={people} images={this.state.images} />
							</div>
						</div>
					</div>


	
					
		
			</div>
		)
	}
}

export default CharactersPage;