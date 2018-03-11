import React from 'react'
import $ from 'jquery'

import RadioButtons from '../presentational-components/RadioButtons'
import Interval from '../presentational-components/Interval'
import ProfileResults from '../presentational-components/ProfileResults'

export default class LonelyHeartsApp extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			gender: 'any',
			startAge: 0,
			endAge: 1000,
			candidates:undefined,
			submit:false

		}

		this.handleRadioButton = this.handleRadioButton.bind(this)
		this.handleAddMore = this.handleAddMore.bind(this)
		this.handleStartInterval = this.handleStartInterval.bind(this)
		this.handleEndInterval = this.handleEndInterval.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleReset = this.handleReset.bind(this)
		this.resetFilter = this.resetFilter.bind(this)
		this.reduceToTen = this.reduceToTen.bind(this)
	}

	componentWillMount(){
		$.ajax({
		  url: 'https://randomuser.me/api/?results=10',
		  dataType: 'json',
		  success: (data)=> {
		    this.setState({
		    	candidates:data.results
		    })
		  }
		});
     
	}

	handleRadioButton(event){
		this.setState({
			gender:event.target.value
		})

	}

	handleAddMore(event){
		$.ajax({
		  url: 'https://randomuser.me/api/?results=10',
		  dataType: 'json',
		  success: (data)=> {
		  	let combinedArray = [...this.state.candidates, ...data.results]
		    this.setState({
		    	candidates:combinedArray,
		    	submit:true
		    })
		  }
		});
	}

	handleStartInterval(event){
		this.setState({
			startAge: event.target.value
		})
	}

	handleEndInterval(event){
		this.setState({
			endAge: event.target.value
		})
	}

	handleSubmit(event){
		this.setState({
			submit:true
		})
	}

	handleReset(event){
		this.setState({
			gender: 'any',
			startAge: 0,
			endAge: 1000,
			submit:true		
		})
	}

	resetFilter(event){
		this.setState({
			submit:false
		})
	}

	reduceToTen(event){
		let reducedArray = this.state.candidates.slice(0,10)

		this.setState({
			submit:true,
			candidates: reducedArray

		})
	}

	render(){

		return(
			<div>
				<div id="userPreferences">
					<h3> Search Criteria </h3>

					<Interval startAge={this.state.startAge} handleStartInterval={this.handleStartInterval} endAge={this.state.endAge} handleEndInterval={this.handleEndInterval}/>

					<RadioButtons gender={this.state.gender} handleRadio={this.handleRadioButton}/>

					<button type="button" onClick={this.handleReset} className="btn btn-default">Reset</button>
	          		<button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Filter</button>

	          		<h3> Want More Candidates?! </h3>
	          		<button type="submit" onClick={this.reduceToTen} className="btn btn-default">Only Want 10?</button>
	          		<button type="submit" onClick={this.handleAddMore} className="btn btn-primary">Add More!</button>
				</div>

				<div id="searchResults">
					{this.state.candidates !== undefined && <ProfileResults reset={this.resetFilter} queries={this.state} /> }
				</div>
			</div>
		)
	}
}