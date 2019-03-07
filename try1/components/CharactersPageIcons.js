import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

class FilmInfoPage extends React.Component {

	render() {
		const films = this.props.films;
		const images = this.props.images;

		return (
			<div>
				<main className="main">
					<Nav />
					<article className="main__content">
						<h1>Films</h1>
						<div className="main__films">
							{
								films.map((film, index) => {
									return (
										<Link
											key={index}
											to={{
												pathname: `/filminfo/${index}`,
												state: {
													films: films[index],
													images: images,
													index
												}
											}}>
											<img src={images[index]} className="main__films-1" />
										</Link>
									)
								})
							}
						</div>
					</article>
					<aside className="main__aside">ASIDE</aside>
				</main>
				<footer className="footer">FOOTER</footer>
			</div>
		)
	}
}

export default FilmInfoPage;

