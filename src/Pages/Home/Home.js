
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
        Hi, I'm Tejaswini. I recently completed my graduation in ECE from NITW. I have worked with various technologies like Web development and App Development. I'm a programmer.
        I'm currently interning as a front-end developer at a start-up. I'm looking for Full-time SDE opportunities. I'm always open to collaborate with like-minded people and do projects.
        </Typography>
        <Button style={{width:200,margin:20,}}variant="contained" color="primary" href="https://drive.google.com/file/d/1T_-6-pXO9Pav08AfYpbxqzXXazM6VhKl/view?usp=sharing">
        Resume
        </Button>
        <Button style={{margin:10}} variant="contained" color="default" >
         Tools and Technologies
        </Button>
        <Skills/>
        </div>
    )
}

export default Home

// Over the recent years,
// I participated in various hackathons and collaborated with cool developers and designers to create 
// solutions for some prevalent problems. 
// Over the recent years,
// I participated in various hackathons and collaborated with cool developers and designers to create 
// solutions for some prevalent problems. 