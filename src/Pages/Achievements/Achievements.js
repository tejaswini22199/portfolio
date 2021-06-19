import React from 'react'
import Achievement from './Achievement/Achievement'
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
  

    
const data=[
    {
        Title:"Won off the Leash Hack Award in Corgi Hacks for building project which is based on the given theme by MLH using css,javascript,html,bootstrap",
        Link:"https://devpost.com/software/corgihunt",
    },
    {
        Title:"Awarded Merit Scholarship (Top 5% out of 140 students at NITW)",
        Link:"/",
    }
]
const Achievements = () => {
    const classes = useStyles();
    return (
        <div>
         <div className={classes.root}>
             <Grid container spacing={3}>
                
                {
                    data.map((d,index)=>{
                    return <Grid key={index}  item xs={12} sm={4}><Achievement data={d}/></Grid>
                    
                })
                }
                
            </Grid>
        </div>
           
        </div>
    )
}

export default Achievements
