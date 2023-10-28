import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div className="skill-container">
            <div className="skill-text">{this.props.skill}</div>
            <div className="progress-bar-container">
              <ProgressBar style={{ width: '100%', backgroundColor: '#ccc' }}>
                <div className="progress" style={{ width: this.props.progress, backgroundColor: '#1999c0' }}></div>
              </ProgressBar>
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
