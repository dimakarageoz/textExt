import React from 'react';
import { Link } from 'react-router';

var	Downmanu =	React.createClass({

	render:	function()	{

		var	data	=	this.props.data;
		const links = this.props.links;


		data.forEach(button => {
			button.forEach(url => {

				links.forEach(button => {
					button.dropdown.forEach(menuItem => {
						const href = menuItem.text;
						if(url[0]===href)
						{url[1]=menuItem.href}
					});
				});

			});
		});
		var	Downli	=	data.map((item,	index)=>{

			switch (item.length) {
				case 3:
				return	(
					<div	key={index}>
					<li><Link to={item[0][1]} ><p>{item[0][0]}</p></Link></li>
					<li><Link to={item[1][1]} ><p>{item[1][0]}</p></Link></li>
					<li><Link to={item[2][1]} ><p>{item[2][0]}</p></Link></li>
					</div>

				)
				break;
				case 2:
				return	(
					<div	key={index}>
					<li><Link to={item[0][1]}><p>{item[0][0]}</p></Link></li>
					<li><Link to={item[1][1]}><p>{item[1][0]}</p></Link></li>
					</div>
				)
				break;
				case 5:
				return	(
					<div	key={index}>
					<li><Link to={item[0][1]} ><p>{item[0][0]}</p></Link></li>
					<li><Link to={item[1][1]} ><p>{item[1][0]}</p></Link></li>
					<li><Link to={item[2][1]} ><p>{item[2][0]}</p></Link></li>
					<li><Link to={item[3][1]} ><p>{item[3][0]}</p></Link></li>
					<li className="go_Out"><Link to={item[4][1]} ><p>{item[4][0]}</p></Link></li>
					</div>
				)
				break;
				default:
			}

		})
		return	(
			<ul	className="dropdown-menu dropdown-menu-right">
			{Downli}
			</ul>

		);
	}
});

export default Downmanu;
