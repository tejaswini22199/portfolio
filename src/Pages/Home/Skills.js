import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import react from '../../assets/skillicons/react.png'
import javascript from '../../assets/skillicons/javascript.png'
import html from '../../assets/skillicons/html.png'
import git from '../../assets/skillicons/git.png'
import css from '../../assets/skillicons/css.png'
import cpp from '../../assets/skillicons/cpp.png'
import bootstrap from '../../assets/skillicons/bootstrap.png'
import materialui from '../../assets/skillicons/materialui.png'
import figma from '../../assets/skillicons/figma.png'
import node from '../../assets/skillicons/node.png'
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
    margin:'50px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const skills=[
    {
        Image:cpp,
        Name:"C++"
    },
    {
        Image:javascript,
        Name:"Java Script"
    },
    {
        Image:react,
        Name:"Reactjs"
    },
    {
        Image:react,
        Name:"SQL"
    },
    {
        Image:node,
        Name:"Node js"
    },
  
    {
        Image:figma,
        Name:"Figma"
    },
    {
        Image:git,
        Name:"Github"
    },
    {
        Image:html,
        Name:"HTML"
    },
    {
        Image:css,
        Name:"CSS"
    },
    {
        Image:bootstrap,
        Name:"Boot strap"
    },
    {
        Image:materialui,
        Name:"Material-UI"
    },
   
]
export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {
             skills.map((skill,index)=>{
                 
                 return(
            <Grid key={index} item xs={6} sm={2}>
            <Paper className={classes.paper}>
                <img src={skill.Image} alt={skill.Name}></img>
                <Typography>
                    {skill.Name}
                </Typography>
            </Paper>
          </Grid>)
        })   
}       
      </Grid>
    </div>
  );
}
