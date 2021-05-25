
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Front-end Web developer Intern', 'Hacker at MLH', 'Computer Science QA Expert at Chegg','Mentor at Kharagpur winter of code'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Working with technologies like React-js,Material-UI to build front-end web application of a stealth start-up which is based on  ecommerce.`;
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
  const classes=useStyles();
  const steps=getSteps();
  const [activeStep, setActiveStep] = React.useState(0);
  return(
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
      {
         steps.map((step,index)=>(
           <Step key={step}>
             <StepLabel onClick={(e)=>setActiveStep(e.target.textContent-'0'-1)}>
            {step}
             </StepLabel>
             <StepContent>
             <Typography>{getStepContent(index)}</Typography>
             </StepContent>
           </Step>
         ))
      }
      </Stepper>
    </div>
  )
}
// export default function Experince() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep} orientation="vertical">
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//             <StepContent>
//               <Typography>{getStepContent(index)}</Typography>
//               <div className={classes.actionsContainer}>
//                 <div>
//                   <Button
//                     disabled={activeStep === 0}
//                     onClick={handleBack}
//                     className={classes.button}
//                   >
//                     Back
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleNext}
//                     className={classes.button}
//                   >
//                     {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                   </Button>
//                 </div>
//               </div>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length && (
//         <Paper square elevation={0} className={classes.resetContainer}>
//           <Typography>All steps completed - you&apos;re finished</Typography>
//           <Button onClick={handleReset} className={classes.button}>
//             Reset
//           </Button>
//         </Paper>
//       )}
//     </div>
//   );
// }

