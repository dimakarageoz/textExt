import React from 'react';
import $ from 'jquery';
// import './mystyle.css';
import Downmanu from './Downmanu.js';
import UserExit from './UserExit.js';



var	my_menu	=	[
		{
				button:	'Your friends',
				icon: 'glyphicon glyphicon-user',
				dropdown:	[
					         ['Friend list', 'cсылка1'],
									 ['Add new people',  'cсылка2'],
									 ['Delete friend',  'cсылка3']
								  ],
		},
		{
			button:	'Message',
			icon: 'glyphicon glyphicon-comment',
			url: "https://www.google.com.ua####"

		},
		{
				button:	'Groups',
				icon: 'glyphicon glyphicon-globe',
				dropdown:	[
					         ['Your groups', 'cсылка4'],
									 ['Make new group', 'cсылка5'],
									 ['Delete group', 'cсылка6']
								  ]
		},
		{
				button:	'Trip',
				icon: 'glyphicon glyphicon-road',
				dropdown:	[
					         ['Your trip', 'cсылка7'],
									 ['Create a new trip', 'cсылка8']
								  ]
		},
		{
				button:	'Foto',
				url: "https://www.google.com.ua$$$$$$",
				icon: 'glyphicon glyphicon-picture'
		},
		{
				button:	'Option',
				icon: 'glyphicon glyphicon-wrench',
				dropdown:	[
									 ['Edit details', 'cсылка9'],
					         ['Security', 'cсылка10'],
				           ['About the program', 'cсылка11'],
									 ['Cache', 'cсылка12'],
									 ['Assist', 'cсылка13']

								 ]
		}
];

var my_nick=['Mail or nickname'];




var	Menu	=	React.createClass({

	getInitialState: function(){
		return {
			links: []
		};
	},
	componentWillMount: function(){


		$.getJSON("./content.json", (data) => {
			const links = data.categories;

			this.setState({
				links,
			});
		})
		.fail(() => {
			console.log('fail');
		});
	},


		handleOnClick1: () => {

		  location.href =my_menu[1].url;
		},
		handleOnClick2: () => {
		  location.href =my_menu[4].url;
		},
		render:	function()	{
				var	data	=	my_menu;

				const links = this.state.links;

				links.forEach(button => {
						if(button.name==="Message")
						my_menu[1].url=button.href;
						if(button.name==="Foto")
						my_menu[4].url=button.href;
				});

				var handleOnClick1= this.handleOnClick1;
				var handleOnClick2= this.handleOnClick2;
				var	newMenu	=	data.map(function(item,	index)	{
					if(!item.dropdown)
					{
           if(item.button==="Message")
          {
						return(
						<div	key={index}>
								<button className=" list-group-item dropdown-toggle down" onClick={handleOnClick1}>
								<span className={item.icon}></span>
								{item.button}
								</button>
						</div>)
					}
					else
					{
						return(
						<div	key={index}>
								<button className=" list-group-item dropdown-toggle down" onClick={handleOnClick2}>
								<span className={item.icon}></span>
								{item.button}
								</button>
						</div>)
					}
				}
					else
					{
						return	(
								<div	key={index}>
										<button	className=" list-group-item dropdown-toggle" data-toggle="dropdown">
										<span className={item.icon}></span>
										{item.button}
										<span className="glyphicon glyphicon-chevron-down"></span>
										</button>
										<Downmanu  data={[item.dropdown]} links={links}	/>
								</div>
						)
					}
				})
				return	(
						<div	className="dropdown">
						  	<UserExit  data={my_nick}   links={links}/>
								{newMenu}
								<UserExit  data={['Exit']}  links={links}/>
						</div>
				);
		}
});

export default Menu;
