import React from "react";
import Header from "./Header";

import LandingPage from "./LandingPage";
import FilmsPage from "./FilmsPage";
import CharactersPage from "./CharactersPage";

class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			films: [],
			people: [],
			loading: true,
			homeNav: true,
			filmsNav: false,
			charNav: false
		}
	}


	componentDidMount() {

		fetch(`https://swapi.co/api/films/`)
			.then(res => res.json())
			.then(data => {
				// console.log(data.results)
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
				// console.log(data.results)
				this.setState(() => {
					return {
						people: data.results,
					}
				})
			})
	}


	landingPage = () => {
		this.setState({
			count: 0,
			homeNav: true,
			filmsNav: false,
			charNav: false
		});
	};
	filmsPage = () => {
			this.setState({
			count: 1,
			homeNav: false,
			filmsNav: true,
			charNav: false
		});
};
	charsPage = () => {
			this.setState({
			count: 2,
			homeNav: false,
			filmsNav: false,
			charNav: true
		});
};
	render() {

		const { films, people } = this.state;
		return (
	
			<div>


				<div className="bg">
					<Header />
					<nav className="nav">

						<div onClick={this.landingPage} className={this.state.homeNav ? "nav-item active" : "nav-item"}>
							<a href="#" className="nav-link">
								<span>HOME</span>
							</a>
						</div>
						<div onClick={this.filmsPage} className={this.state.filmsNav ? "nav-item active" : "nav-item"}>
							<a href="#" className="nav-link">
								<span>Films</span>
							</a>
						</div>
						<div onClick={this.charsPage} className={this.state.charNav ? "nav-item active" : "nav-item"}>
							<a href="#" className="nav-link">
								<span>Characters</span>
							</a>
						</div>

					</nav>
					<main className="main">
						{
							this.state.count === 0 ? <LandingPage /> : this.state.count === 1 ? <FilmsPage films={films} /> : <CharactersPage people={people} />
						}
					</main>
				</div>
		</div>
		)
	}
}

export default Landing;





// <li className="side-nav__item">
// <a href="#" class="side-nav__link">
// 	<span>Homes</span>
// </a>
// </li>