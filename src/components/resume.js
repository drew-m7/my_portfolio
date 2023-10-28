import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import picofme from "../Assets/picofme.jpg";


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={picofme}
                alt="Drew Martin"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Drew Martin</h2>
            <h4 style={{color: 'black'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #1999c0', width: '50%'}}/>
            <p> Programming languages: .NET/C#, Java, C/C++, Python, JavaScript, SQL, R, HTML/CSS <br></br>
                <br></br>
                Significant coursework: data structures and algorithms, database design, UI/UX design, computer architecture, distributed systems, operating systems, software security, graphics, computation theory, and mathematics<br></br>
                <br></br>
                Experience with analytical thinking and technical problem solving, leadership, team collaboration, and strong communication skills</p>
            <hr style={{borderTop: '3px solid #1999c0', width: '50%'}}/>
            <h5>Address</h5>
            <p>IL, USA</p>
            <h5>Phone</h5>
            <p>(309) 613-1986</p>
            <h5>Email</h5>
            <p>drewmartin997@gmail.com</p>
            {/* <h5>Web</h5>
            <p>TODO.com</p> */}
            <hr style={{borderTop: '3px solid #1999c0', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Roanoke Benson High School"
              schoolDescription="National Honor Society, Beta Club "
               />

              <Education
              startYear={2018}
              endYear={2020}
              schoolName="Illinois Central College"
              schoolDescription="Associate of Arts, Information Systems - Technical Emphasis "
               />

               <Education
                 startYear={2020}
                 endYear={2022}
                 schoolName="Illinois State University"
                 schoolDescription="Bachelor of Science, Computer Science "
                  />
                <hr style={{borderTop: '3px solid #1999c0'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Cloudpoint Geospatial | GIS Analyst"
              jobDescription="Responsible for handling large amounts of data, analyzing data with attention to detail, and determining where to store data in web map applications for clients, played a vital role in developing several web map applications for various clients"
              jobDescription2="Developed strong soft skills and technical expertise through active communication between coworkers and clients "
              />

              <Experience
                startYear={2021}
                endYear={2022}
                jobName="Mirus Research | Software Developer"
                jobDescription="Worked individually and on small teams to develop new features and enhancements of existing web applications, and researched various technical solutions based on customer specifications"
                jobDescription2="Developed skills to work with several code repositories, local development, and CI/CD techniques using various languages such as Python and JavaScript along with many different technologies, frameworks, and API’s, frontend development mainly in Vue.js, backend development mainly in Python"
                />

<             Experience
                startYear={2022}
                jobName="Nussbaum Transportation | Software Developer"
                jobDescription="Develop and maintain user-facing applications using .NET framework and C# to deliver robust and user-friendly software solutions"
                jobDescription2="Collaborate with cross-functional teams to design and implement SQL database systems, ensuring efficient data storage and retrieval for applications, and optimizing query performance"
                jobDescription3="Participate in the full software development lifecycle, from requirements analysis and design to coding, testing, and deployment, resulting in timely project delivery and customer satisfaction"
                jobDescription4="Troubleshoot and resolve software defects, improving application stability and enhancing the overall user experience"
                jobDescription5="Implement software enhancements and updates, keeping applications aligned with evolving business requirements and technological advancements"
                />
              <hr style={{borderTop: '3px solid #1999c0'}} />
              
              <h2>Skills</h2>
              <Skills
                skill=".NET/C#"
                progress={900}
              />
              <Skills
                skill="Javascript"
                progress={750}
              />
              <Skills
                skill="HTML/CSS"
                progress={750}
              />
              <Skills
                skill="Java"
                progress={770}
              />
              <Skills
                skill="Python"
                progress={850}
              />
              <Skills
                skill="C/C++"
                progress={650}
              />
              <Skills
                skill="Vue"
                progress={750}
              />
              <Skills
                skill="React"
                progress={680}
              />
              <Skills
                skill="R"
                progress={300}
              />
              <Skills
                skill="SQL"
                progress={750}
              />
              <Skills
                skill="UI/UX Design"
                progress={600}
              />
              <Skills
                skill="Frontend Dev"
                progress={780}
              />
              <Skills
                skill="Backend Dev"
                progress={550}
              />
              <Skills
                skill="Graphic Design"
                progress={700}
              />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
