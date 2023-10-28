import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1 className="about-title">Who Am I?</h1>
        <hr className="about-divider" />
        <p className="about-description">
          I am Drew! I'm a software developer who is passionate about solving business problems with technical solutions.
        </p>
      </div>
    );
  }
}

export default About;
