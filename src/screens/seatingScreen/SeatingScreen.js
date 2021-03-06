import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import styles from './SeatingScreen.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Seat from './Seat/Seat';
import { connect } from "react-redux"
import { updateNeighboursList } from "../../redux/neighbours/neighbours.actions"

function SeatingScreen(props) {

  const initial =
    [
      {
        id: 1,
        name: "Empty",
        occupied: false,
        selected: false,
        group: [1,2,5,6]
      },
      {
        id: 2,
        name: "Jessica",
        occupied: true,
        selected: false,
        group: [1,2,5,6]
      },
      {
        id: 3,
        name: "Empty",
        occupied: false,
        selected: false,
        group: [3,4,7,8]
      },
      {
        id: 4,
        name: "Empty",
        occupied: false,
        selected: false,
        group: [3,4,7,8]
      },
      {
        id: 5,
        name: "Martin",
        occupied: true,
        selected: false,
        group: [1,2,5,6]
      },
      {
        id: 6,
        name: "Naissa",
        occupied: true,
        selected: false,
        group: [1,2,5,6]
      },
      {
        id: 7,
        name: "Empty",
        occupied: false,
        selected: false,
        group: [3,4,7,8]
      },
      {
        id: 8,
        name: "Jack",
        occupied: true,
        selected: false,
        group: [3,4,7,8]
      },
      {
        id: 9,
        name: "Chaimae",
        occupied: true,
        selected: false,
        group: [9,10,13,14]
      },
      {
        id: 10,
        name: "Rob",
        occupied: true,
        selected: false,
        group: [9,10,13,14]
      },
      {
        id: 11,
        name: "Empty",
        occupied: false,
        selected: false,
        group: [11,12,15,16]
      },
      {
        id: 12,
        name: "Empty",
        occupied: false,
        selected: false,
        group: [11,12,15,16]
      },
      {
        id: 13,
        name: "Lara",
        occupied: true,
        selected: false,
        group: [9,10,13,14]
      },
      {
        id: 14,
        name: "Empty",
        occupied: false,
        selected: false,
        group: [9,10,13,14]
      },
      {
        id: 15,
        name: "Tom",
        occupied: true,
        selected: false,
        group: [11,12,15,16]
      },
      {
        id: 16,
        name: "Empty",
        occupied: false,
        selected: false,
        group: [11,12,15,16]
      }
    ];

  const [row1, setRow1] = useState(initial);

  function updateNeighbourList() {
    props.updateNeighboursList(row1);
  }

  function updateNeighbourListAlone() {
    props.updateNeighboursList(initial);
  }
  
  const isAlone = () => {
    var index = row1.findIndex(x => x.selected === true)
    if (index >= 0) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <div className={styles.topLevelContainer}>

        <div className={styles.teacherContainer}>
          <Card variant="outlined" elevation={3} className={styles.teacher} style={{ minWidth: '40%', maxWidth: '40%' }}>
            <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ backgroundColor: "lightgrey" }}>
              <Grid item>
                <CardContent >
                  <Typography variant="h5">Teacher</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>

          <Typography variant="h5">Pick a seat</Typography>
        </div>

        <div className={styles.seatContainer}>

          <div className={styles.seatColumn}>
            {row1.map(seat => {
              if (seat.id > 0 && seat.id <= 4) {
                return (
                  <div key={seat.id}>
                    <Seat seat={seat} row={row1} setRow={setRow1}></Seat>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className={styles.seatColumn}>
            {row1.map(seat => {
              if (seat.id > 4 && seat.id <= 8) {
                return (
                  <div key={seat.id}>
                    <Seat seat={seat} row={row1} setRow={setRow1}></Seat>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className={styles.seatColumn}>
            {row1.map(seat => {
              if (seat.id > 8 && seat.id <= 12) {
                return (
                  <div key={seat.id}>
                    <Seat seat={seat} row={row1} setRow={setRow1}></Seat>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className={styles.seatColumn}>
            {row1.map(seat => {
              if (seat.id > 12 && seat.id <= 16) {
                return (
                  <div key={seat.id}>
                    <Seat seat={seat} row={row1} setRow={setRow1}></Seat>
                  </div>
                );
              }
              return null;
            })}
          </div>

        </div>

        <div className={styles.buttonContainer}>
          <Box m={1}>
            <Button variant="contained" disabled={isAlone()} color="primary" onClick={updateNeighbourList}>
              <Link to="/zoom" className={styles.linkClass}>Join class with neighbours</Link>
            </Button>
          </Box>
          <Box m={1}>
            <Button variant="contained" color="secondary">
              <Link to="/zoom" className={styles.linkClass} onClick={updateNeighbourListAlone} >Join class alone</Link>
            </Button>
          </Box>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    neighbours: state.neighbours.neighbours
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNeighboursList: (neighbours) => dispatch(updateNeighboursList(neighbours)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatingScreen)
