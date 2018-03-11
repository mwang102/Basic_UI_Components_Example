import React from 'react'

export default class RadioButtons extends React.Component{

	render(){
		return(
			<div>
				<h4> Gender: </h4>
				<div className ='radio'>
					<label>
						<input onChange={this.props.handleRadio} checked={this.props.gender === 'any'} type='radio' value='any'/>
						Any
					</label>
				</div>
				<div className ='radio'>
					<label>
						<input onChange={this.props.handleRadio} checked={this.props.gender === 'male'} type='radio' value='male'/>
						Male
					</label>
				</div>
				<div className ='radio'>
					<label>
						<input onChange={this.props.handleRadio} checked={this.props.gender === 'female'} type='radio' value='female'/>
						Female
					</label>
				</div>
			</div>
		)
	}


}