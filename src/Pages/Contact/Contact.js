import React from 'react'
// import Link from '@material-ui/core/Link'
import email from '../../assets/contacticons/email.png'
import linkedin from '../../assets/contacticons/linkedin.png'
import medium from '../../assets/contacticons/medium.png'
import twitter from '../../assets/contacticons/twitter.png'
import { Typography } from '@material-ui/core'
const Contact = () => {
    return (
        <div>
            
            <Typography>
            <h1>Looking to collaborate with me or Hire me?Great!</h1>
            <h3>Feel free to Contact me on my socials</h3>
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
            </Typography>

        </div>
    )
}

export default Contact
