import React from 'react'

export default class Interval extends React.Component{

	render(){
		return(
			<div className="interval"> 
				<div> Age </div>
				<input value={this.props.startAge} onChange={this.props.handleStartInterval}/>
				<div> To </div>
				<input value={this.props.endAge} onChange={this.props.handleEndInterval}/>
			</div>
		)
	}
}