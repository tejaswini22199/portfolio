
import React from 'react';

// import {Paper} from '@material-ui/core'
import './Experience.css'

function getSteps() {
  return ['Front-end Web developer Intern', 'Hacker at MLH', 'Computer Science QA Expert at Chegg','Mentor at Kharagpur winter of code'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Worked with technologies like React-js,Material-UI to build front-end web application of a stealth start-up which is based on  ecommerce.`;
    case 1:
      return 'Participated in Various Hackathons and Have contributed to projects as a front-end web and application developer, working in domains like React-js and React-Native, collaborating with designers and backend developers to create solutions for various problems.';
    case 2:
      return `Solved doubts of Various students in subjects like Matlab,DBMS,Data Structures and Algoritms`;
    case 3:
      return `Mentored more than 10 students in their Open Source Contributions and taught basics of github`;
    default:
      return 'Unknown step';
  }
}
export default function Experience()
{
  // const classes=useStyles();
  const steps=getSteps();

  // const [activeStep, setActiveStep] = React.useState(0);
  return(
    // <Paper >
    //  {
    steps.map((step,index)=>{
      return (  <div key= {index}>
      <div className="timeline">
  <div className="container right">
    <div className="content">
      <h2>{step}</h2>
      <p>{getStepContent(index)}</p>
    </div>
  </div>
</div>
</div>

      )
     
    })
 
    // }
    // </Paper>
  )
  };