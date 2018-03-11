// YOUR CODE HERE

import React from 'react'
import ReactDOM from 'react-dom'

import Title from './presentational-components/Title'
import LonelyHeartsApp from './components/LonelyHeartsApp'

class Layout extends React.Component{
	render(){
		return (
			<div>
				<Title name = "Lonely Hearts Dating Service"/>
					<div className="container text-center">
						<LonelyHeartsApp/>
					</div>
			</div>
		)
	}
}

const app = document.getElementById('app')

ReactDOM.render(<Layout/>, app)