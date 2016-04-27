import $ from 'jquery';
import Backbone from 'backbone';
import {sync, errorHandler} from './ajax';
Backbone.sync = sync;
$.ajaxSetup({
	headers: {
		Accept: 'application/json'
	},
	beforeSend: function(xhr) {
		let error = this.error;
		if(error) {
			this.error = function(xhr) {
				errorHandler(xhr, error);
			};
		}
	}
});

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Stories from './components/pages/Stories';
import Read from './components/pages/Read';
import Details from './components/pages/Details';
import Login from './components/pages/Login';
import CategoryPage from './components/pages/Categories';
import Admin from './components/pages/Admin';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/contact" component={Contact} />
			<Route path="/stories" component={Stories} />
			<Route path="/stories/:categoryId" component={CategoryPage} />
			<Route path="/stories/:storyId/details" component={Details} />
			<Route path="/stories/:storyId/read" component={Read} />
			<Route path="/login" component={Login}/>
			<Route path="/add-user" component={Admin}/>
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));




