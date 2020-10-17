import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import styles from './SeatingScreen.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function SeatingScreen() {
  return (
    <>
      <div className={styles.topLevelContainer}>
        <div className={styles.teacherContainer}>
          <Card variant="outlined" elevation={3} className={styles.teacher}>
            <CardContent>
              <Typography variant="h5" component="h2">Teacher</Typography>
            </CardContent>
          </Card>
        </div>

        <div className={styles.seatContainer}>
          seats
        </div>

        <div className={styles.buttonContainer}>
          <Button variant="contained" color="primary">
            <Link to="/zoom" className={styles.linkClass}>Join class with neighbours</Link>
          </Button>
          <Button variant="contained" color="secondary">
            <Link to="/zoom" className={styles.linkClass}>Join class alone</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default SeatingScreen
