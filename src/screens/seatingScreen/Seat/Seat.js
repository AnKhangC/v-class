import React from 'react'
import Button from '@material-ui/core/Button';
import styles from './Seat.module.css'

function Seat(props) {

  function onClick() {
    let index = props.row.findIndex(x => x.id === props.seat.id); 

    if (props.row[index].occupied === true) {
      return;
    } else {
      var newRow = props.row.slice();
      for (var i = 0; i < newRow.length; i++) {
        if (newRow[i].selected === true) {
          newRow[i].selected = false;
        }
      }
      props.row[index].selected = true;
      props.setRow(newRow);
    }
  }

  const isSelectedGroup = () => {
    var selectedIndex = props.row.findIndex(x => x.selected === true);
    if (selectedIndex >= 0) {
      return props.row[selectedIndex].group.includes(props.seat.id)
    } else {
      return false;
    }
  }

  return (
    <>
      <div className={styles.seat}>
        <Button
          onClick={onClick}
          className={styles.circle}
          variant="contained"
          style={{
            borderRadius: 25,
            margin: 10,
            minWidth: '50px',
            maxWidth: '50px',
            minHeight: '50px',
            maxHeight: '50px',
            backgroundColor: ((props.seat.occupied === true) ? "grey" : ((props.seat.selected === true) ? "blue" : "white"))
          }}
        />
        <p className={isSelectedGroup() ? styles.nameSelectedGroup : styles.name}>{props.seat.selected === true && "My Seat"}</p>
        <p className={isSelectedGroup() ? styles.nameSelectedGroup : styles.name}>{props.seat.selected === false && props.seat.name}</p>
      </div>
    </>
  )
}

export default Seat

