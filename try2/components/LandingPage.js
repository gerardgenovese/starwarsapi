import React from "react";
// import { Link } from "react-router-dom";
import Nav from "./Nav";





class LandingPage extends React.Component {
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
			loading: true,
			people: [],
			imagesP: [
				"/images/people/luke.jpg"
			]
		}
	}

	componentDidMount() {

		fetch(`https://swapi.co/api/films/`)
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
		fetch(`https://swapi.co/api/people/`)
			.then(res => res.json())
			.then(data => {
				console.log(data.results)
				this.setState(() => {
					return {
						people: data.results,
					}
				})
			})
	}




	render() {

		const { films, images } = this.state;
	
		return (
			<div>
				<main className="main">
					<div className="main__nav">
					<Nav />

					</div>
					<article className="main__content">
						<h1>Films</h1>
						<div className="main__films">

					

					 	landingpage
					
	


						</div>
					</article>
					<aside className="main__aside">ASIDE</aside>
				</main>
				<footer className="footer">FOOTER</footer>
			</div>
		)
	}
}

export default LandingPage;