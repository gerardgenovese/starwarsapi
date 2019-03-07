import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import FilmsPageInfo from "./FilmsPageInfo";


class FilmsPage extends React.Component {
	render() {

		return (
			<div>
				<main className="main">
					<div className="main__nav">
					<Nav change={this.changeState}/>

					</div>
					<article className="main__content">
						<h1>Films</h1>
						<div className="main__films">


							<FilmsPageInfo />


						</div>
					</article>
					<aside className="main__aside">ASIDE</aside>
				</main>
				<footer className="footer">FOOTER</footer>
			</div>
		)
	}
}






export default FilmsPage;









// <main className="main">
// <div className="main__nav">
// <Nav films={films} images={images} />

// </div>
// <article className="main__content">
// 	<h1>Films</h1>
// 	<div className="main__films">


// 	{
// 		films.map((film, index) => {
// 			return (
// 				<Link
// 					key={index}
// 					to={{
// 						pathname: `/filminfo/${index}`,
// 						state: {
// 							films: films[index],
// 							images: images,
// 							index
// 						}
// 					}}>
// 					<img src={images[index]} className="main__films-1" />
// 				</Link>
// 			)
// 		})
// 	}



// 	</div>
// </article>
// <aside className="main__aside">ASIDE</aside>
// </main>
// <footer className="footer">FOOTER</footer>