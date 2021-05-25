
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import {Button} from '@material-ui/core'
import Skills from './Skills'

// const useStyles = makeStyles((theme) => ({
  //   content: {
  //     flexGrow: 1,
  //     padding: theme.spacing(3),
  //     transition: theme.transitions.create('margin', {
  //       easing: theme.transitions.easing.sharp,
  //       duration: theme.transitions.duration.leavingScreen,
  //     }),
  //     marginLeft: -drawerWidth,
  //   },
  //   contentShift: {
  //     transition: theme.transitions.create('margin', {
  //       easing: theme.transitions.easing.easeOut,
  //       duration: theme.transitions.duration.enteringScreen,
  //     }),
  //     marginLeft: 0,
  //   },
  // }));
  
const Home = () => {
   
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Typography paragraph>
        Hello everyone, This is Tejaswini. I recently completed my under graduation in ECE from NITW.
        I'm interested in doing projects which can solve our daily-life problems.I also did  
        web applications related to the same. I'm looking for Full Time SDE opportunities.
        I have keen interest in Data Structures and Algorithms and applying them using various technologies
        to build web apps and mobile apps to solve daily life problems. I also participate in hackathons
        and coding contests. I like to collaborate with like minded people and do projects.
        </Typography>
        <Button style={{width:200,margin:20,}}variant="contained" color="primary" href="https://drive.google.com/file/d/18CKrruHOccymYYLHFP0JNjWGNIK1w2yD/view?usp=sharing">
        Resume
        </Button>
        <Button variant="contained" color="default" >
         Tools and Technologies
        </Button>
        <Skills/>
        </div>
    )
}

export default Home
