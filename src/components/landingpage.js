import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import picofme from "../Assets/picofme.jpg";



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={picofme}
              alt="Drew Martin"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Drew Martin | Software Developer</h1>
\            <hr/>

          <p> Python | Java | C/C++ | HTML/CSS | JavaScript | React | Vue | R | SQL </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/drew-martin-556436225/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/drew-m7" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
