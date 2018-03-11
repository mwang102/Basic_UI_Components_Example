import React from 'react'
import { Popover, OverlayTrigger} from 'react-bootstrap/lib'


export default class Candidate extends React.Component{

	render(){

		let { dob, name, picture, email, cell, phone } = this.props.details,
			combinedName = name['first'] + ' ' + name['last'],
			age = (new Date()).getFullYear() - parseInt(dob.slice(0,4));

		let contactPopOver = (
		  <Popover id="popover-trigger-hover-focus" title="Contact Info">
		    <strong>Phone Number</strong> {phone}
		    <br/>
		    <strong>Cell Number</strong> {cell}
		    <br/>
		    <strong>Email</strong> {email}
		  </Popover>
		);

		return(
			<div>
				<li>
					<img className="photo" alt="person" src={picture.thumbnail}/>
					<span className="name lead">{combinedName}</span>
					<span className="age lead">{age}</span>
					<OverlayTrigger trigger={'focus'} placement="right" overlay={contactPopOver}>
					      <button>Contact</button>
					</OverlayTrigger>
				
				</li>		
			</div>
		)
	}
}