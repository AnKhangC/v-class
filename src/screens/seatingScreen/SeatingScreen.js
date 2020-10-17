import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import styles from './SeatingScreen.module.css'

function SeatingScreen() {
  return (
    <>
      <div>
        <Button variant="contained" color="primary">
          <Link to="/zoom" className={styles.linkClass}>Join meeting with neighbours</Link>
        </Button>
      </div>
    </>
  )
}

export default SeatingScreen
