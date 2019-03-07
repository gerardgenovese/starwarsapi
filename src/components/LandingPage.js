import React from "react";

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideShow: [
				"/images/slideShow/slide-vader.jpg",
				"/images/slideShow/slide-kylo.jpg",
				"/images/slideShow/slide-kenobi.jpg"
			],
			imageCount: 0
		}
	}


	next = () => {
		const imageCount = this.state.imageCount;

		if (this.state.imageCount > 1) {
			this.setState(() => {
				return {
					imageCount: 0
				}
			})
		} else {
			this.setState({ imageCount: imageCount + 1 })
		}
	}
	prev = () => {
		const imageCount = this.state.imageCount;

		if (this.state.imageCount < 1) {
			this.setState(() => {
				return {
					imageCount: 2
				}
			})
		} else {
			this.setState({ imageCount: imageCount - 1 })
		}
	}




	render() {
		// console.log(this.state.imageCount);
		const slideShow = this.state.slideShow;
		const imageCount = this.state.imageCount;

		return (
			<div>
				<div className="landing">
					<img className="landing-img" src={slideShow[imageCount]} />
				
						<button className="landing-prev" onClick={this.prev}> <i className="fas fa-arrow-left"></i></button>
			
						<button className="landing-next" onClick={this.next}> <i className="fas fa-arrow-right"></i></button>
				</div>
				<div className="landing-scroll"></div>
			</div>
		)
	}




}

export default LandingPage;