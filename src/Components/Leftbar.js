import React from 'react';
import Menu from './Menu.js'

var Leftbar=React.createClass({
	render: ()=>{
		return(
			<div className="app">
					<Menu   />
			</div>
		); }
	});

export default Leftbar;
