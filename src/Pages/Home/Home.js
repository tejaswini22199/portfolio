
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React,{useState} from 'react';
import {Button,Link} from '@material-ui/core';
import tejaswini from '../../assets/home/tejaswini.jfif';
import Skills from './Skills'
 
  const useStyles = makeStyles((theme)=>({
      root:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      },
      head:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
      },
      textContent:{
         width:'70%',
        backgroundColor:'#ffe6ff',
        borderRadius:'15px',
         padding:'10px',
      },
      imageBackground:{
        backgroundColor:'#ffe6ff',
        borderRadius:'15px',
         padding:'10px',
      },
     
      btn2:{
        margin:"10",
      },
      image:{
        height:'200px',
        borderRadius:'15px',
      },
      link:{
        marginRight:'10px',
        cursor:'pointer',
        textDecoration: 'none',
        textColor:'pink',
        fontSize:'20px',
      }
  }))
const Home = () => {
   const [Home,setHome]=useState(true);
   const classes=useStyles();
    return (
        <div className={classes.root}>
          <div className={classes.head}>
          <Link to="/home" onClick={()=>setHome(true)} className={classes.link}>
             Home
          </Link>
          <Link to="/about" onClick={()=>setHome(false)} className={classes.link}>
            About
          </Link>
          </div>
        { Home
        ?
           <div className={classes.imageBackground}>
           <img src={tejaswini} alt="tejaswini" className={classes.image}/>
           <h2>Software Engineer</h2>
           </div>
        :
        <Typography className={classes.textContent} paragraph>
         Hi, I'm Tejaswini. I recently completed my graduation in ECE from NITW. But found computer science interesting because I love creating websites and apps.
         I'm looking for Full-time SDE opportunities. I'm always open to collaborate with like-minded people and do projects. I also do freelancing!!I can create a portfolio,website using mern stack or a react native app for you.
        </Typography>
        
}
        
        <Button className={classes.btn2} variant="contained"  color="primary" >
         Tools and Technologies
        </Button>
        <Skills/>
        </div>
    )
}

export default Home
