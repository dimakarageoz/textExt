import React from 'react';


var UserExit =React.createClass({

	render: function () {
		var data = this.props.data;
		var name = this.props.links;

if(data!='Exit')
{
name.forEach(button => {
	if(button.nick)
  data=[button.nick];
});
}

		var newUserExit	=	data.map(function(item,	index)	{
			if(item==='Exit'){
				return(
					<div key={index}>
          <a className="navmenu-brand " href="#http://TripNavigator/Exit#">{item}</a>
					</div>
				)
			}
			else {
				return(
					<div key={index} >
          <a className="navmenu-brand nick" href="http://localhost:2000/">{item}</a>
					</div>
				)
			}
		})
		return(
			<ul	className="nav navmenu-nav">
					{newUserExit}

			</ul>
		);
	}
});

export default UserExit;
