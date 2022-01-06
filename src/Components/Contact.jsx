import React from "react"
import styles from "./contact.module.css"
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import emailjs from "emailjs-com"
import { TextField } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import Fade from 'react-reveal/Fade';


const Contact=()=>{

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_9ts4xw8', 'template_a6tpd7n', e.target, 'user_Tod49PPn3IyE6Gbs6Rxal')
        .then((result) => {
            alert("Message successfully sent"+"\n"+"Thank you for contacting")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

    }
    const handleClick=()=>{
        
        window.open("https://www.linkedin.com/in/priyanshi-tiwari-493357192","_blank",'height=700,width=600,left=10,top=10,,scrollbars=yes,menubar=no');
    }

    return(
      <div className={styles.wrappermain} id="contact">
          <div className={styles.wrapperhead}>
            <h3>CONTACT</h3>
            <hr/>
          </div>
          <div className={styles.contactmain}>
              <Fade left>
            <div className={styles.wrappercontact}>
                <form className={styles.wrappercontactform} onSubmit={sendEmail}>
                    <h4>Write an Email to me for contacting or hiring purpose.</h4>
                    <div className={styles.text1}>
                        <TextField variant="outlined" name="name" label="Name" style={{width:"100%"}}></TextField>
                    </div>

                    <div className={styles.text2}>
                        <TextField variant="outlined" name="email" label="Email" className={styles.text2}></TextField>
                    </div >

                    <div className={styles.text3}>
                        <TextField variant="outlined" name="subject" label="Subject" className={styles.text3}></TextField>
                    </div>

                    <div className={styles.text4}>
                        <TextField variant="outlined" name="message" label="Message" className={styles.text4}></TextField>
                    </div>
                    <input type="submit" className={styles.submit} value="Send"></input>
                </form>
            </div>
            </Fade>
            <Fade right>
            <div className={styles.contactdetails}>
                <h2 className={styles.headings}>Contact Info</h2>
                <div className={styles.infobox} onClick={handleClick}><LinkedInIcon className={styles.contacticons}/>:Priyanshi Tiwari</div>
                <div className={styles.infobox}><PhoneIcon className={styles.contacticons}/>: 8917418926</div>
                <div className={styles.infobox}><AlternateEmailIcon className={styles.contacticons}/>: pt1601224034@gmail.com</div>
                <div className={styles.infobox}><HomeIcon className={styles.contacticons}/>: Odisha, India</div>
            </div>
            </Fade>
          </div>
      </div>
    )
}
export default Contact