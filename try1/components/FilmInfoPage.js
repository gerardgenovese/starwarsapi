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
				<Nav />
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