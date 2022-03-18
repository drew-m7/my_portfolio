import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 1){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: '#1cb0dd'}} >Python Project #1</CardTitle>
            <CardText>
            A collection of simple Python programs I work on for fun!
            </CardText>
            <CardActions border>
            <Button colored> <a href="https://github.com/drew-m7/Random-stuff">GitHub</a></Button>
              {/* <Button colored>CodePen</Button> */}
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: '#1cb0dd'}} >Python Project #2</CardTitle>
            <CardText>
            A simple Python program that shows working with classes and inheritance.
            </CardText>
            <CardActions border>
            <Button colored> <a href="https://github.com/drew-m7/Python-Classes">GitHub</a></Button>
              {/* <Button colored>CodePen</Button> */}
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: '#1cb0dd'}} >Python Project #3</CardTitle>
            <CardText>
            A super cool Python project for checking the legality of chess moves!
            </CardText>
            <CardActions border>
            <Button colored> <a href="https://github.com/drew-m7/Chess-Moves">GitHub</a></Button>
              {/* <Button colored>CodePen</Button> */}
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: '#1cb0dd'}} >React Portfolio</CardTitle>
            <CardText>
            My personal portfolio website built with React, Node.js, and npm. This project helped me learn some new skills with building and deploying a React project!
            </CardText>
            <CardActions border>
            <Button colored> <a href="https://github.com/drew-m7/my_portfolio">GitHub</a></Button>
              {/* <Button colored>CodePen</Button> */}
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        
        </div>


      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: '#1cb0dd'}} >Various Other Projects</CardTitle>
          <CardText>
            My GitHub has several other projects and I am always adding more! Some other projects to check out are written in Java, C, C++, OpenGL, and R.
            A lot of these have to do with data structures and algorithms.
          </CardText>
          <CardActions border>
          <Button colored> <a href="https://github.com/drew-m7?tab=repositories">GitHub</a></Button>
            {/* <Button colored>CodePen</Button> */}
            {/* <Button colored>Live Demo</Button> */}
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
         {/* Project 2 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: '#1cb0dd'}} >C++ Programming</CardTitle>
          <CardText>
            Several C++ projects related to binary search trees, AVL trees, and splay trees!
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </CardText>
          <CardActions border>
          <Button colored> <a href="https://github.com/drew-m7/CPP-Programs">GitHub</a></Button>
            {/* <Button colored>CodePen</Button> */}
            {/* <Button colored>Live Demo</Button> */}
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: '#1cb0dd'}} >R Project</CardTitle>
          <CardText>
            This is a group project done while researching R language in my concepts of programming languages class. R is a super cool and powerful tool for 
            statistical computing and graphing!
            <br></br>
            <br></br>
          </CardText>
          <CardActions border>
          <Button colored> <a href="https://github.com/drew-m7/R-Project-Progams">GitHub</a></Button>
            {/* <Button colored>CodePen</Button> */}
            {/* <Button colored>Live Demo</Button> */}
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 4 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: '#1cb0dd'}} >Java RMI</CardTitle>
          <CardText>
            Here is a RMI(remote method invocation) written in java between a client and server!
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </CardText>
          <CardActions border>
          <Button colored> <a href="https://github.com/drew-m7/Java-RMI">GitHub</a></Button>
            {/* <Button colored>CodePen</Button> */}
            {/* <Button colored>Live Demo</Button> */}
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React Portfolio</Tab>
          <Tab>Python Projects</Tab>
          <Tab>Other Projects</Tab>
          {/* <Tab>TODO</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
