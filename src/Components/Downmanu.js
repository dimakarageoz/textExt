import React from 'react';


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
					<li><a href={item[0][1]} ><p>{item[0][0]}</p></a></li>
					<li><a href={item[1][1]} ><p>{item[1][0]}</p></a></li>
					<li><a href={item[2][1]} ><p>{item[2][0]}</p></a></li>
					</div>

				)
				break;
				case 2:
				return	(
					<div	key={index}>
					<li><a href={item[0][1]}><p>{item[0][0]}</p></a></li>
					<li><a href={item[1][1]}><p>{item[1][0]}</p></a></li>
					</div>
				)
				break;
				case 5:
				return	(
					<div	key={index}>
					<li><a href={item[0][1]} ><p>{item[0][0]}</p></a></li>
					<li><a href={item[1][1]} ><p>{item[1][0]}</p></a></li>
					<li><a href={item[2][1]} ><p>{item[2][0]}</p></a></li>
					<li><a href={item[3][1]} ><p>{item[3][0]}</p></a></li>
					<li className="go_Out"><a href={item[4][1]} ><p>{item[4][0]}</p></a></li>
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
