import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import styles from './JoinScreen.css';

function JoinScreen() {
  return (
    <>
      <div>
        <Button variant="contained" color="primary">
          <Link to="/seating" className="link">Join Meeting</Link>
        </Button>
      </div>
    </>
  )
}

export default JoinScreen
