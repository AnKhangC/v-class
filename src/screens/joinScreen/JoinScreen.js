import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import styles from './JoinScreen.module.css';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Image from 'react-bootstrap/Image';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';


function JoinScreen() {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={require('../../Images/logo.png')} />
        </div>

        <div className={styles.fieldsContainer} >
          <Box m={1}>
            <TextField className={styles.formFields} id="filled-basic" label="Username" variant="filled" />
            <Tooltip
              placement="right"
              title={
                <>
                  <Typography color="white">
                    Username is the name that will be shown to other users. Can be anything but we suggest putting your real name so that your classmates recognize you.</Typography>
                </>
              }>
              <IconButton>
                <HelpIcon style={{ color: "#ffff" }}/>
              </IconButton>
            </Tooltip>
          </Box>
          <Box m={1}>
            <TextField className={styles.formFields} id="filled-basic" label="Meeting ID" variant="filled" />
            <Tooltip
              placement="right"
              title={
                <>
                  <Typography color="white">
                    Meeting ID is the ID of the Zoom meeting you are trying to join. As Zoom is not yet integrated for the alpha system, can be anything for now.</Typography>
                </>
              }>
              <IconButton>
                <HelpIcon style={{ color: "#ffff" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </div>

        <div className={styles.buttonContainer}>
          <Button variant="contained" color="primary" >
            <Link to="/seating" className={styles.linkClass}>Join Meeting</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default JoinScreen
