import React from "react";
import ReactDOM from "react-dom";
import Landing from "./components/Landing";
// import { Provider } from "react-redux";
// import AppRouter from "../src/routers/AppRouter"
import 'normalize.css/normalize.css';
import "./styles/styles.scss";
// import AppRouter from "./routers/AppRouter";
// import "./firebase/firebase";





const jsx = (
	<div>
		<Landing />
	</div>


)

ReactDOM.render(jsx, document.getElementById("app"));

