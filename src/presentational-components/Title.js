import React from 'react'

export default class Title extends React.Component{
	render(){
		return (
			  <div className="header">
			    	<h1>{this.props.name}</h1>
			  </div>
		)
	}

}