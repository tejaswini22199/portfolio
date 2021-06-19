import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Typography,} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
const useStyles=makeStyles(()=>({
    // contactform:{
    //     display:"flex",
    //     flexDirection:"column",
    //     margin:20,
    // },
    // formfield:{
    //     margin:10,
    // },
    root:{
        marginLeft:'25%',
        marginRight:'25%',
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    icons:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    link:{
        margin:'10px',
    },
    btn2:{
        margin:"20px",
       
        
      },
      
}));
// const messages=[];

const Contact = () => {
  //  console.log(messages);
    const classes=useStyles();
    // const [formData,setformData]=useState(
    //     {
    //         name:'',
    //         message:'',
    //     }
    // );
    // const [message,setMessage]=useState('');
//     const handleChange=(e)=>{
// //    setName(e.target.value);

// }

// const handleMessage=(e)=>{
//     // setMessage(e.target.value);
//}
// const submitHandler=(e)=>{
//     console.log(e);
//     console.log(formData);
//     console.log(messages);
//     if(formData!=null)
//     messages.push(formData);

//}
  
    return (
        <>
        <div className={classes.root}>
            
            <Typography className={classes.text} variant="h5">
            Looking to collaborate with me or Hire me?Great!
          
            </Typography>
            {/* <form className={classes.contactform} onSubmit={(e)=>submitHandler(e)} >
            <TextField className={classes.formfield} required id="standard-basic" label="Name" autoComplete="off" value={formData.name} onChange={(e)=>setformData({...formData,name:e.target.value})} />
            <TextField className={classes.formfield} required id="standard-multiline-static" multiline rows={5} value={formData.message} onChange={(e)=>setformData({...formData,message:e.target.value})} label="Drop your Message"/>
            <Button type="submit" variant="contained"color="primary" >
                Submit
            </Button> */}
            {/* <input type="submit" vaue="Submit"> */}
           
          
            {/* </form> */}
              

                {/* <Link href="/">
                    <img src={email} alt="email"/>
                </Link> */}
                <Button className={classes.btn2} variant="contained"  color="primary" href="mailto:tejaswini22199@gmail.com" >
              
               Mail me
             
                </Button>
                <div className={classes.icons}>
                <Link className={classes.link} href="https://www.linkedin.com/in/tejaswini-vakkalagaddi/">
                    <LinkedInIcon fontSize="large"/>
                 </Link>
                
                <Link className={classes.link}  href="https://twitter.com/Tejaswi30533550">
                    <TwitterIcon fontSize="large"/>
                </Link> 
                <Link className={classes.link}  href="https://github.com/tejaswini22199">
                    <GitHubIcon fontSize="large"/>
                </Link>
                </div>

        </div>
        </>
    )
}

export default Contact
