import { Button } from "@material-ui/core"
import React from "react"
import styles from "./about.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const About =()=>{
    const handleLinkedIn=()=>{
        window.open("https://www.linkedin.com/in/priyanshi-tiwari-493357192","_blank",'height=700,width=600,left=10,top=10,,scrollbars=yes,menubar=no');
    }
    const handleGit=()=>{
        window.open("https://github.com/pt78640","_blank",'height=700,width=600,left=10,top=10,,scrollbars=yes,menubar=no');
    }
    return(
        <>
            {/* <div className={styles.wrappermain} > */}
                <div className={styles.wrapperlayer} id="about">
                    
                
                    <div className={styles.wrapperpic}>
                        <img src="priyanshi.jpg"  className={styles.mypic}/>
                    </div>
                    <div className={styles.wrapperabout}>
                        
                            <h2 style={{color:"pink"}}>Hello, My name is Priyanshi Tiwari and <br/>I am a FullStack Web Developer. </h2>
                            <h4 style={{color:"white"}}>I completed my Computer Science Engineering from<br/> MITS college Rayagada and wanted to learn more in Development.
                                After <br/>some time I came to know about MASAI where I learnt the whole<br/> fullstack web development. 
                                Through my portfolio you will get to know about <br/>my skills and projects.
                            </h4>
                            <div className={styles.icons}>
                                <a  className={styles.button} href="https://drive.google.com/file/d/1kiwH_PBtWWMREPyl8-W2pujZdpG0-KPi/view?usp=sharing"><Button variant="contained" color="secondary" >Download Resume</Button></a>
                                <div className={styles.eachicons}>
                                    <LinkedInIcon onClick={handleLinkedIn}/>
                                    <GitHubIcon onClick={handleGit}/>
                                </div>
                            </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
export default About