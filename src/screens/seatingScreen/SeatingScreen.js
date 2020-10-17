import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

function SeatingScreen() {
  return (
    <>
      <Button variant="contained" color="primary">
        <Link to="/zoom" className="link">Join meeting with neighbours</Link>
      </Button>
    </>
  )
}

export default SeatingScreen
