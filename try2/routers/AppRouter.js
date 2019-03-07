import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
// import Nav from "../components/Nav";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import FilmsPage from "../components/FilmsPage";
import FilmsPageInfo from "../components/FilmsPageInfo";
import CharPage from "../components/CharPage";
// import PlanetsPage from "../components/PlanetsPage";


const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={LandingPage} exact={true} />
					<Route path="/films" component={FilmsPage} />
					<Route path="/characters" component={CharPage} exact={true} />



				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default AppRouter;


// <Route path="/filminfo/:id" component={FilmPageInfo} />
// <Route path="/filminfo" component={FilmInfoPage} />