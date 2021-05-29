import React from 'react'
import Project from './Project'
import {projects} from './Data';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
const Projects = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <Grid container spacing={3}>
                
                {
                    projects.map((project,index)=>{
                    return <Grid key={index}  item xs={12} sm={4}><Project project={project}/></Grid>
                    
                })
                }
                
            </Grid>
        </div>
    )
}

export default Projects
