import React from "react"
import styles from "./skills.module.css"
import mongo from "../mongo.png"
import Redux from "../redux.svg";
import Roll from 'react-reveal/Roll';

const Skills =()=>{
    return(
        <div className={styles.wrappermain} id="skills">
            <div className={styles.wrapperhead}>
                <h2>MY SKILLS</h2>
                <hr/>
            </div>
            <div className={styles.wrapperskills}>
                <Roll left>
                <div  className={styles.wrapperskillset}>
                    <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" style= {{width:"100%"}}className={styles.img}/>
                </div>
                </Roll>

                <Roll right>
                <div className={styles.wrapperskillset}>
                    <img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_White.png" className={styles.img}/>
                </div>
                </Roll>

                <Roll left>
                <div className={styles.wrapperskillset}>
                    <img src="https://www.shariqueweb.com/wp-content/uploads/2015/06/css3.png" className={styles.img}/>
                </div>
                </Roll>

                <Roll right>
                <div className={styles.wrapperskillset}>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className={styles.img}/>
                </div>
                </Roll>

                <Roll left>
                <div className={styles.wrapperskillset}>
                    <img src={Redux} className={styles.img}/>
                </div>
                </Roll>

                <Roll right>
                <div className={styles.wrapperskillset}>
                    <img src={mongo} className={styles.img}/>
                </div >
                </Roll>
            </div>
        </div>
    )
}
export default Skills