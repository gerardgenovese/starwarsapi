import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import FilmsPageIcons from "./FilmsPageIcons";



class FilmsPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			films: [],
			images: [
				"/images/films/a-new-hope.jpg", "/images/films/attack-of-the-clones.jpg",
				"/images/films/the-phantom-menace.jpg", "/images/films/revenge-of-the-sith.jpg",
				"/images/films/return-of-the-jedi.jpg",
				"/images/films/empire-strikes-back.jpg", "/images/films/the-force-awakens.jpg"
			],
			loading: true
		}
	}

	componentDidMount() {

		fetch(`https://swapi.co/api/people/`)
			.then(res => res.json())
			.then(data => {
				console.log(data.results)
				this.setState(() => {
					return {
						films: data.results,
						loading: false

					}
				})
			})
	}


	render() {

		const { films, images } = this.state;

		return (
			<div>
				{this.state.loading ? <div className="loading"><img src="/images/loading.gif" /></div> :

					<CharactersPageIcons films={films} images={images} />

				}
			</div>
		)
	}
}


export default FilmsPage;