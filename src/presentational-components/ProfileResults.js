import React from 'react'

import Candidate from './Candidate'

export default class SearchProfiles extends React.Component{

	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.queries.submit === false){
			return false
		}
		this.props.reset()
		return true
		
	}
	render(){
		
		let props = this.props.queries
		

		let filteredCandidates = (props.candidates).filter((d)=>{
			let age = (new Date()).getFullYear() - parseInt(d.dob.slice(0,4));


			if(this.props.queries.gender === 'any'){
				return age >= props.startAge && age <= props.endAge
			}else{
				return d.gender === props.gender && age >= props.startAge && age <= props.endAge
			}
		})

		let candidates = filteredCandidates.map((product, index)=>{
			return (<Candidate details ={product} key={index}/>)
		})

		return(
			<div>
				<div>
				    <h2>{candidates.length} Candidates Found</h2>
				      	<ul>
				          {candidates}
				        </ul>
				</div>
			</div>
		);
	}
}