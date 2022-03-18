import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import picofme from "../Assets/picofme.jpg";


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Drew Martin</h2>
            <img
              src={picofme}
              alt="Drew, how cool is this dude!"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Contact me!</p>
          </Cell>
          <Cell col={6}>
            <h2>Let's Talk!</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{color: '#0c2094', fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (309) 613-1986
                  </ListItemContent>
                </ListItem>

               

                <ListItem>
                  <ListItemContent style={{color: '#0c2094', fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    drewmartin997@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{color: '#0c2094', fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-instagram" aria-hidden="true"/>
                      @drewbmartin99
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{color: '#0c2094', fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-snapchat" aria-hidden="true"/>
                      @drewmartin99
                    </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
