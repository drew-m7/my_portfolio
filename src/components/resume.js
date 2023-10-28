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
            <p> Programming languages: .NET/C# | Java, C/C++, Python, JavaScript, SQL, R, HTML/CSS <br></br>
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
              schoolDescription="GPA: 3.97/4.0, National Honor Society, Beta Club "
               />

              <Education
              startYear={2018}
              endYear={2020}
              schoolName="Illinois Central College"
              schoolDescription="GPA: 3.7/4.0, Associate of Arts, Information Systems - Technical Emphasis "
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
                jobDescription="Work with my team to develop robust business applications to user specifications, and implement technical solutions based on user specifications"
                jobDescription2="Work with .NET framework to build winform applications working with the full software development lifecycle from requirements analysis, to testing, coding, and deoloyment of applications, resulting in timely project delivery while keeping up with evolving business changes and technological advancements."
                />
              <hr style={{borderTop: '3px solid #1999c0'}} />
              
              <h2>Skills</h2>
              <Skills
                skill=".NET/C#"
                progress={95}
              />
              <Skills
                skill="Javascript"
                progress={75}
              />
              <Skills
                skill="HTML/CSS"
                progress={75}
              />
              <Skills
                skill="Java"
                progress={77}
              />
              <Skills
                skill="Python"
                progress={85}
              />
              <Skills
                skill="C/C++"
                progress={65}
              />
              <Skills
                skill="Vue"
                progress={75}
              />
              <Skills
                skill="React"
                progress={58}
              />
              <Skills
                skill="R"
                progress={30}
              />
              <Skills
                skill="SQL"
                progress={75}
              />
              <Skills
                skill="UI/UX Design"
                progress={59}
              />
              <Skills
                skill="Frontend Dev"
                progress={78}
              />
              <Skills
                skill="Backend Dev"
                progress={45}
              />
              <Skills
                skill="Graphic Design"
                progress={59}
              />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
