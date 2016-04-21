import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/contact" component={Contact} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));

console.log('test');