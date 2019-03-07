import React from "react";
import FilmModal from "./FilmModal";

class FilmsPage extends React.Component {
	state = {
		images: [
			"/images/films/a-new-hope.jpg", 
			"/images/films/attack-of-the-clones.jpg",
			"/images/films/the-phantom-menace.jpg", 
			"/images/films/revenge-of-the-sith.jpg",
			"/images/films/return-of-the-jedi.jpg",
			"/images/films/empire-strikes-back.jpg", 
			"/images/films/the-force-awakens.jpg"
		],
		selectedOption: false,
		filmChoice: 0
	}

	getFilm = (e) => {
		const target = e.target.id;
		this.setState(() => {
			return {
				selectedOption: !this.state.selectedOption,
				filmChoice: target
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
		const { films } = this.props;
		console.log(this.state)
		return (
			<div className="bg">
				<div className="content">
					<div className="content-names">
						{
							this.state.images.map((image, index) => {
								return (
									<img className="content-names--img" key={index} src={image} id={index} onClick={this.getFilm} />
								)
							})
						}
						<FilmModal selectedOption={this.state.selectedOption} filmChoice={this.state.filmChoice} removeModal={this.removeModal} films={films} images={this.state.images} />
					</div>
				</div>
			</div>
		)
	}
}

export default FilmsPage;