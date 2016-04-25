import React from 'react';
import {browserHistory, Router, Route, Link} from 'react-router';
//have to be logged in

// Read Now button from details to read page
	//button is on the details page (martin)
	//directs to the read page (nate)
export default React.createClass({
	clickReadNow: function(e){
		e.preventDefault();
		

	},
	render: function() {
		return (
			<form onSubmit ={this.clickReadNow}>
				<button type='submit'>Read Now</button>
			</form>	
		);
	}
});

//ROUTER
// situation: path will be determined by the index of the story we are on now, not just 
// 			any story. so not a fetch/get thing. 
			
	<Router history={browserHistory}>
			<Route path='/stories/:storyId/read' component={Dontknowyet}</Route>
	</Router>