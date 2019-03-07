import React from "react";
import { Link } from "react-router-dom";

const FilmsPageIcons = () => {

	return (
					<div>
								hey
						
		
					</div>
				)

}




// class FilmsPageIcons extends React.Component {

// 	render() {
// 		const films = this.props.films;
// 		const images = this.props.images;

// 		return (
// 			<div>
// 							{
// 								films.map((film, index) => {
// 									return (
// 										<Link
// 											key={index}
// 											to={{
// 												pathname: `/filminfo/${index}`,
// 												state: {
// 													films: films[index],
// 													images: images,
// 													index
// 												}
// 											}}>
// 											<img src={images[index]} className="main__films-1" />
// 										</Link>
// 									)
// 								})
// 							}
				

// 			</div>
// 		)
// 	}
// }

// class FilmsPageIcons extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			filmCount: 0
// 		}
// 	}


// 	getMovie = (e) => {
// 		console.log(e.target.id)
// 		const id = e.target.id;
// 		this.setState(prevCount => {
// 			return {
// 				filmCount: id
// 			}
// 		})
// 	}


// 	render() {
// 		const films = this.props.films;
// 		const images = this.props.images;

// 		return (
// 			<div>
// 			{this.state.filmCount === 0 ? 
			
// 					films.map((film, index) => {
						
// 						return (
						
// 							<img key={index} id={index} src={images[index]} className="main__films-1" onClick={this.getMovie}/>
				
// 						)
// 					})
			


// 			: <FilmInfoPage films={films} images={images} />	}

	
// 				<FilmInfoPage films={films} images={images}/>

// 			</div>
// 		)
// 	}
// }

export default FilmsPageIcons;

