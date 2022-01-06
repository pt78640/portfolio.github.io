import { Button, StylesProvider } from "@material-ui/core"
import React, { useState } from "react"
import styles from "./project.module.css" 
import Modal from '@material-ui/core/Modal';
import Zoom from 'react-reveal/Zoom';


const Projects=()=>{
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)
    const [open2,setOpen2] = useState(false)
        const handleOpen = () => {
          setOpen(true);
        };
      
        const handleOpen1 = () => {
            setOpen1(true);
          };
          const handleOpen2 = () => {
            setOpen2(true);
          }; 

        const handleClose = () => {
          setOpen(false);
        };
        const handleClose1 = () => {
            setOpen1(false);
          };
          const handleClose2 = () => {
            setOpen2(false);
          };
      
        const body = (
          <div className={styles.modal}>
              <ul>
                <li><h3>Ubuy clone</h3></li>
                <li><h5>Ubuy is one of the best online shopping stores to offer a collection of Handbags, Dresses, Cosmetics, Jewellery, Jeans,
T shirts and Shoes.</h5></li>
                <li><h5>Completed in 4 days with a team of total 3 web developers.</h5></li>
                <li><h5>Tech Stack: JavaScript, Html, CSS</h5></li>
                <li><h5>My role: Developed billing page and sign-up/login page with all required functionality and validations.</h5></li>
              </ul>
              <div className={styles.btn}>
                <a href="https://github.com/pt78640/ubuywebsite.github.com.git" style={{textDecoration:"none"}}><Button variant="contained" color="primary">View SourceCode</Button></a>
              </div>
          </div>
        );

        const body1 = (
            <div className={styles.modal}>
              <ul>
                <li><h3>Zoomcar Clone</h3></li>
                <li><h5>Zoomcar, is an Indian self-drive car rental company, headquartered in Bangalore, India.</h5></li>
                <li><h5>Completed in 4 days with a team of total 6 web developers.</h5></li>
                <li><h5>Tech Stack: JavaScript, Html, CSS, Mongodb , Nodejs</h5></li>
                <li><h5>My role: Developed sign-up/login page and Car booking page with all required functionalities. Appointed as leader of the team.Secured 3rd positions among all teams</h5></li>
              </ul>
              <div className={styles.btn}>
                <a href="https://github.com/Ranjan1501/Zoomcar_full_Stack.git" style={{textDecoration:"none"}}><Button variant="contained" color="primary">View SourceCode</Button></a>
              </div>
            </div>
          );

          const body2 = (
            <div className={styles.modal}>
                <ul>
                <li><h3>YouTube Clone</h3></li>
                <li><h5>YouTube is the 2nd largest search engine next to Google. People upload more than 100 hours of video per minute to YouTube
.</h5></li>
                <li><h5>created an YouTube mini project with the help of YouTube api.
</h5></li>
                <li><h5>Tech Stack: JavaScript, Html, CSS</h5></li>
               </ul>
              <div className={styles.btn}>
                <a href="https://github.com/pt78640/youtubesearch.github.io.git" style={{textDecoration:"none"}}><Button variant="contained" color="primary">View SourceCode</Button></a>
              </div>
            </div>
          );
    return(
        <div className={styles.wrappermain} id="project">
            <div className={styles.wrapperhead}>
                <h2>MY WORKS</h2>
                <hr/>
            </div>
            <div className={styles.wrapperproject}>
            <Zoom bottom>
                <div className={styles.singleproject}>
                    <div className={styles.singleprojectimg}>
                        <img src="ubuy.jpg" className={styles.img}/>
                    </div>
                    <div className={styles.singleprojectcontent}>
                        <div className={styles.singleprojectbutton}>
                            <Button  variant="contained" color="secondary" style={{margin:"5px"}} onClick={handleOpen}>Know More</Button>
                            
                        </div>
                    </div>
                </div>
                </Zoom>
                <Zoom bottom>
                <div className={styles.singleproject}>
                <div className={styles.singleprojectimg}>
                        <img src="zoomcar.jpg" className={styles.img}/>
                    </div>
                    <div className={styles.singleprojectcontent}>
                        <div className={styles.singleprojectbutton}>
                            <Button  variant="contained" color="secondary" style={{margin:"5px"}} onClick={handleOpen1}>Know More</Button>
                           
                        </div>
                    </div>
                </div>
                </Zoom>
                <Zoom bottom>
                <div className={styles.singleproject}>
                <div className={styles.singleprojectimg}>
                        <img src="youtube.jpg" className={styles.img}/>
                    </div>
                    <div className={styles.singleprojectcontent}>
                        <div className={styles.singleprojectbutton}>
                            <Button  variant="contained" color="secondary" style={{margin:"5px"}} onClick={handleOpen2}>Know More</Button>
                            
                        </div>
                    </div>
                </div>
                </Zoom>
            </div>

            <div>
                <Modal open={open} onClose={handleClose}>
                    {body}
                </Modal>
            </div>
            <div>
                <Modal open={open1} onClose={handleClose1}>
                    {body1}
                </Modal>
            </div>
            <div>
                <Modal open={open2} onClose={handleClose2}>
                    {body2}
                </Modal>
            </div>

        </div>
    )
}
export default Projects