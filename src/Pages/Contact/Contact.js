import React,{useState} from 'react'
// import Link from '@material-ui/core/Link'
// import email from '../../assets/contacticons/email.png'
// import linkedin from '../../assets/contacticons/linkedin.png'
// import medium from '../../assets/contacticons/medium.png'
// import twitter from '../../assets/contacticons/twitter.png'

import { TextField, Typography,Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
const useStyles=makeStyles(()=>({
    contactform:{
        display:"flex",
        flexDirection:"column",
        margin:20,
    },
    formfield:{
        margin:10,
    },
}));
const messages=[];

const Contact = () => {
    console.log(messages);
    const classes=useStyles();
    const [formData,setformData]=useState(
        {
            name:'',
            message:'',
        }
    );
    // const [message,setMessage]=useState('');
//     const handleChange=(e)=>{
// //    setName(e.target.value);

// }

// const handleMessage=(e)=>{
//     // setMessage(e.target.value);
//}
const submitHandler=(e)=>{
    console.log(e);
    console.log(formData);
    console.log(messages);
    if(formData!=null)
    messages.push(formData);

}
  
    return (
        <>
        <div>
            
            <Typography variant="h6">
            Looking to collaborate with me or Hire me?Great!
          
            </Typography>
            <form className={classes.contactform} onSubmit={(e)=>submitHandler(e)} >
            <TextField className={classes.formfield} required id="standard-basic" label="Name" autoComplete="off" value={formData.name} onChange={(e)=>setformData({...formData,name:e.target.value})} />
            <TextField className={classes.formfield} required id="standard-multiline-static" multiline rows={5} value={formData.message} onChange={(e)=>setformData({...formData,message:e.target.value})} label="Drop your Message"/>
            <Button type="submit" variant="contained"color="primary" >
                Submit
            </Button>
            {/* <input type="submit" vaue="Submit"> */}
           
          
            </form>
              <p>Total Visitors</p>
                {/* <Link href="/">
                    <img src={email} alt="email"/>
                </Link>
                <Link href="https://www.linkedin.com/in/tejaswini-vakkalagaddi/">
                    <img src={linkedin} alt="linkedin"/>
                 </Link>
                <Link href="https://powercoder1.medium.com/">
                    <img src={medium} alt="medium"/>
                </Link>
                <Link href="https://twitter.com/Tejaswi30533550">
                    <img src={twitter} alt="twiter"/>
                </Link> */}
            

        </div>
        </>
    )
}

export default Contact
