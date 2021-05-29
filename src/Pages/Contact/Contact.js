import React from 'react'
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


const Contact = () => {
    const classes=useStyles();
    return (
        <>
        <div>
            
            <Typography>
            <h3>Looking to collaborate with me or Hire me?Great!</h3>
            <h3>Feel free to Contact me on my socials</h3>
            </Typography>
            <form className={classes.contactform} >
            <TextField className={classes.formfield} required id="standard-basic" label="Name" autoComplete="off" />
            <TextField className={classes.formfield} required id="standard-multiline-static" multiline rows={5} label="Drop your Message"/>
            <Button variant="contained"color="primary" >
                Submit
            </Button>
            </form>
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
