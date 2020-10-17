import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import styles from './JoinScreen.module.css'

function JoinScreen() {
  return (
    <>
      <div>
        <Button variant="contained" color="primary" style={{minWidth: '50%', maxWidth: '50%', minHeight: '100px', maxHeight: '100px'}}>
          <Link to="/seating" className={styles.linkClass}>Join Meeting</Link>
        </Button>
      </div>
    </>
  )
}

export default JoinScreen
