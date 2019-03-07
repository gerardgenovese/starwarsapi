// class FilmInfoPage extends React.Component {

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