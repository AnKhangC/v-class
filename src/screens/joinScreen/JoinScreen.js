import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import styles from './JoinScreen.module.css';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Image from 'react-bootstrap/Image';

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
          </Box>
          <Box m={1}>
            <TextField className={styles.formFields} id="filled-basic" label="Meeting ID" variant="filled" />
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
