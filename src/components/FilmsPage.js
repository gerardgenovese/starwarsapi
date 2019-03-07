import React from "react";
import FilmModal from "./FilmModal";

class FilmsPage extends React.Component {
	state = {
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
		const { films, images } = this.props;
		console.log(this.props)
		return (
			<div className="bg">
			{this.props.images ? 
			<div className="content">
				<div className="content-names">
					{
						images.map((image, index) => {
							return (
								<img className="content-names--img" key={index} src={image} id={index} onClick={this.getFilm} />
							)
						})
					}
					<FilmModal selectedOption={this.state.selectedOption} filmChoice={this.state.filmChoice} removeModal={this.removeModal} films={films} images={images} />
				</div>
			</div>
			: 'Loading...'

				}
			</div>
		)
	}
}

export default FilmsPage;