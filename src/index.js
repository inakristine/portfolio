import React from 'react';
import './scss/styles.scss';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import CV from './Pages/CV';

ReactDOM.render(
	<Router>
		<App>
			<Switch>
				<Route path='/'exact component={Home} />
				<Route path='/Contact' component={Contact} />
        <Route path='/About' component={About} />
        <Route path='/CV' component={CV} />
			</Switch>
		</App>
	</Router>,

	document.getElementById('root')
);
