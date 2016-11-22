/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <article>
        <section className="text-section">
          <h1>Dashboard</h1>
          <p>Welcome, you are logged in!</p>
          <p>This initiative is basically to demonstrate the end to end application architecture including microservices ,API gateway and a powerfull UX layer .Below diagram showcase the tech stack which is been leveraged on each layer.</p>
      </section>
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
export default connect(select)(Dashboard);
