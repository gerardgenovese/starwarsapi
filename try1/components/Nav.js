import React from "react";
import { NavLink } from "react-router-dom";


const Nav = (props) => {
	return (
		<nav className="main__nav">
			<NavLink className="main__nav-link" to="/" activeClassName="is-active" exact={true}>Home</NavLink>
			<NavLink className="main__nav-link" to="/films" activeClassName="is-active" exact={true}>Film</NavLink>
			<NavLink className="main__nav-link" to="/characters" activeClassName="is-active">Characters</NavLink>
			<NavLink className="main__nav-link" to="/planets" activeClassName="is-active">Planets</NavLink>
		</nav>
	)
}


// class Nav extends React.Component {
// 	constructor(props){
// 		super(props);
// 	}

// 	getPage = () => {
// 		this.setState(() => {
// 			return {
// 				count: count + 1
// 			}
// 		})
// 	}
	
// 	render(){
// 		return(
// 				<nav className="main__nav">
// 			<div className="main__nav-link" onClick={this.getPage}>Link
// 			</div>
// 		</nav>
// 		)
// 	}
// }



export default Nav;