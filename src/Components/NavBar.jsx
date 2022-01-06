import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from "./nav.module.css"
import {Link} from "react-scroll"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
     justifyContent:"spaceEvenly"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:"white",color:"white"}} className={styles.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title ,styles.typo}>
            My PortFolio
          </Typography>
          <Link activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
          <Button color="inherit">About</Button>
        </Link>

        <Link activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
          <Button color="inherit">Skills</Button>
        </Link>

        <Link activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
           <Button color="inherit">Projects</Button>
        </Link>

        <Link activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
          <Button color="inherit">Contact</Button>
        </Link>          
        </Toolbar>
      </AppBar>
    </div>
  );
}
