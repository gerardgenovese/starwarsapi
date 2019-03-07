import React from "react";

const Header = () => {

	var title = String.raw`
 ___| |_  ___  _____ __      _  ___  _____ ___
/ __| __|/ _  |  __/ \ \ /\ / // _  |  __// __|
\__ | |_  (_| | |     \ V  V /  (_| | |   \__ |
|___/\__|\__,_|_|      \_/\_/  \__,_|_|   |___/
	`;
	return (
		<div id="header">
			<pre> {title} </pre>
		</div>
	)
};

export default Header;