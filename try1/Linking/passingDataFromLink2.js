// import React from "react";
// import Nav from "./Nav"
// // import FilmsPage from "./FilmsPage";
// // import x from "/images/films/a-new-hope.jpg";

// class FilmInfo extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			title: "",
// 			episode: 0,
// 			director: "",
// 			producer: "",
// 			image: ""
// 		}
// 	}
// 	componentDidMount() {
// 		var number = sessionStorage.getItem("number");

// 		fetch(`https://swapi.co/api/films/${number}/`)
// 			.then(res => res.json())
// 			.then(data => {
// 				this.setState(() => {
// 					let image = "";

// 					if(number === "1"){
// 						image = "/images/films/a-new-hope.jpg";
// 					} else{
// 						image = "/images/films/empire-strikes-back.jpg";
// 					}


// 					return {
// 						title: data.title,
// 						episode: data.episode_id,
// 						director: data.director,
// 						producer: data.producer,
// 						image: image
// 					}
// 				})
// 			})
// 	}

// 	render() {

// 		return (
// 			<div>
// 			<main className="main">
// 				<Nav />
// 				<article className="main__content">
// 					<div className="main__films">
// 						<div className="main__film">
// 							<div className="main__film-title">
// 								<div>Episode {this.state.episode}</div>
// 								<div>{this.state.title}</div>
// 							</div>
// 							<img src={this.state.image} className="main__film-img" />
// 							<div className="main__film-creators">
// 								<p><strong>Producers:</strong> {this.state.producer}</p>
// 								<p><strong>Director:</strong> {this.state.director}</p>
// 							</div>
// 						</div>


// 					</div>

// 				</article>
// 				<aside className="main__aside">ASIDE</aside>
// 			</main>
// 			<footer className="footer">FOOTER</footer>
// 		</div>
// 		)
// 	}
// }




// export default FilmInfo;









import React from "react";
import Nav from "./Nav"

class FilmInfoPage extends React.Component {


	render() {

		const filmData = this.props.location.state;
		const images = this.props.location.state.images;
		const index = this.props.location.state.index;

		console.log(index);




		return (
			<div>

				<div className="main__film">
					<div className="main__film-title">
						<div>Episode {filmData.films.episode_id}</div>
						<div>{filmData.films.title}</div>
					</div>
					<img src={images[index]} className="main__film-img" />
					<div className="main__film-creators">
						<p><strong>Producers:</strong> {filmData.films.producer}</p>
						<p><strong>Director:</strong> {filmData.films.director}</p>
					</div>
					<div>
						<h1>Opening Crawl</h1>
						<p className="main__film-openingCrawl">{filmData.films.opening_crawl}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default FilmInfoPage;