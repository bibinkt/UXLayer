/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../Nav.react';
import { connect } from 'react-redux';

class HomePage extends Component {
	render() {
    const dispatch = this.props.dispatch;
    const { loggedIn } = this.props.data;

    return (
			<article>
				<div>
					<section className="text-section">
						{/* Change the copy based on the authentication status */}
						{loggedIn ? (
							<h1>You are logged in!</h1>
						) : (
							<h1>Welcome to Login Flow!</h1>
						)}
						<p>This initiative is basically to demonstrate the end to end application architecture including microservices ,API gateway and a powerfull UX layer</p>
						<p>To get the code behind this application, go to <a href="https://github.com/bibinkt/UXLayer.git">Github</a></p>
						<p>If your Gateway & microservice server has not configured then plz point this application login flow to Fakerequest.js . </p>
						<p>To point to the fake response server , uncomment line number 62 & 130 from actions/AppActions.js</p>
						{loggedIn ? (
							<Link to="/dashboard" className="btn btn--dash">Dashboard</Link>
						) : (
							<div>
								<Link to="/login" className="btn btn--login">Login</Link>
								<Link to="/register" className="btn btn--register">Register</Link>
							</div>
						)}
					</section>
					<section>
						<p>To configure & run it locally: follow the below steps</p>
						<h2> Install Node V6.9.1 </h2>
						<ol>
							<li><p> go to https://nodejs.org/en/download </p></li>
							<li><p>Select LTS [current release] to install the dependencies.</p></li>
							<li><p>Select your OS and click on installer</p></li>
						</ol>
						<h2> Install JAVA 1.8 </h2>
						<h2> Install Cassandra[NOSQL] V3.9.0 </h2>
						<ol>
							<li><p>go to https://academy.datastax.com/planet-cassandra/cassandra  </p></li>
							<li><p>Click on installer based on your OS type</p></li>
						</ol>
						<h2> Setup Cassandra[NOSQL] . Execute below script </h2>
						<ol>
							<li><p>get the DB script from https://academy.datastax.com/planet-cassandra/cassandra and execute in your local DB </p></li>
						</ol>
						<h2> For Running UX layer </h2>
						<ol>
							<li><p>Clone the repo using <code>git clone https://github.com/bibinkt/ProductService.git</code></p></li>
							<li><p>Run <code>npm install</code> to install the dependencies.</p></li>
							<li><p>Run <code>node server.js</code> to start the local web server</p></li>
						</ol>
						<h2> For Running API gateway </h2>
						<ol>
							<li><p>Clone the repo using <code>git clone https://github.com/bibinkt/nodeAPIGateway.git</code></p></li>
							<li><p>Run <code>npm install</code> to install the dependencies.</p></li>
							<li><p>Run <code>node gateway\index.js</code> to start the local web server</p></li>
						</ol>
						<h2> For Running Microservices </h2>
						<ol>
							<li><p>Clone the repo using <code>git clone https://github.com/bibinkt/ProductService.git</code></p></li>
							<li><p>Run <code>npm install</code> to install the dependencies.</p></li>
							<li><p>Run <code>node server.js</code> to start the local web server</p></li>
						</ol>
					</section>
					<section className="text-section">
						<h2>If you are biginner in React & Redux then strongly recomand you to go thrugh below tutorial </h2>
						<ul>
							<li>
								<p> NodeJS -> https://www.youtube.com/watch?v=-u-j7uqU7sI</p>
							</li>
							<li>
								<p> ReactJS -> https://www.youtube.com/watch?v=-AbaV3nrw6E</p>
							</li>
							<li>
								<p> Redux -> https://www.youtube.com/watch?v=DiLVAXlVYR0</p>
							</li>
							<li>
								<p> ES6 [ECMAScript] -> https://www.youtube.com/watch?v=ZJZfIw3P8No</p>
							</li>
						</ul>
					</section>
				</div>
			</article>
		);
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
