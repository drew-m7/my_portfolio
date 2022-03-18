import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div>
        <h1><b>&nbsp;&nbsp;A Little About Me!</b></h1>
        <hr style={{borderTop: '3px solid #0c2094', width: '29%'}}/>

        {/* Don't mind all my nbsp here... */}
        <h4>
          &nbsp;&nbsp;I am Drew Martin, I grew up in the small town of Roanoke, IL and I am 22 years old. I attended Roanoke-Benson High Scool.
          I finished my associates degree in &nbsp;&nbsp;information systems in 2020 at Illinois Central College.
        
          I did my bachelors degree in computer science at Illinois State University!
        
          Along the way, I've had some really &nbsp;&nbsp;cool opportunities to intern at <a href="https://www.cloudpointgeo.com/">Cloudpoint Geospatial</a> and <a href="https://mirus.io/">Mirus Research</a>.
          When I am not working or learning something new, I am usually spending time with friends or &nbsp;&nbsp;family, or enjoying the outdoors. You may find me snowboarding, kayaking, fishing, hiking, or wakeboarding
          depending on the time of the year. I also like to spend time &nbsp;&nbsp;working on or driving my old Jeep!
          <br></br>
          {/* <hr style={{borderTop: '3px solid #0c2094', width: '29%'}}/> */}
          <br></br>
          &nbsp;&nbsp;I have had many different jobs over the years, from automotive detailing to landscaping and construction! My most relevant work has been at Cloutpoint Geo and Mirus &nbsp;&nbsp;Research.
          <br></br>
          <br></br>
          &nbsp;&nbsp;At Cloudpoint Geo I worked as a GIS intern to gather data, analyze data, and improve web map applications built with arcGIS. In 2021, I began working
          at Mirus &nbsp;&nbsp;Research, a super cool software company in Bloomington, IL, where I was able to gain some amazing experience as a developer. My focus was 
          mainly on frontend &nbsp;&nbsp;dev, working with Vue.js, but I also occasionally worked on backend with Python. I have been able to work on developing some really cool new features for various &nbsp;&nbsp;clients,
          track down bugs, work on accessibility of client's web applications, and gain a ton of new skills related to software development and CI/CD!  
          <br></br>
          <br></br>
          &nbsp;&nbsp;I am passionate about helping people through understanding and solving problems to improve their lives and meet their needs, and am always eager to learn &nbsp;&nbsp;something new or tackle a challenging problem!
          I am always open to new and interesting opportunities!


        </h4>
      </div>
    )
  }
}

export default About;
