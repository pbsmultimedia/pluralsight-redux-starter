import React from 'react';
import {Link} from  'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>Lorem..</p>
          <Link to="about" className="btn btn-primary btn-lg">
            Learn more
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
