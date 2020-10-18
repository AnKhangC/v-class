import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import styles from './ZoomScreen.module.css'

var names = ["Mike", "Alexis", "Antoine", "Sam", "Farouk"];

function ZoomScreen() {
  return(
    <div className = {styles.global}>

      <div className = {styles.zoom}>
        <img className = {styles.zoomImage} src={require('./NoParticipation1.jpg')} />
      </div>
      <div className = {styles.chatBox}>
        <div className = {styles.participantList}>
          <h1>Neighbors</h1>
          <ul>
            {names.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </div>
        <div className = {styles.liveChat}>
          <p>liveChat</p>
        </div>
        <div className = {styles.message}>
          <p>Message</p>
        </div>
      </div>

    </div>
  );
}

// class ZoomScreen extends React.Component {

//   render(){
//     return(
//       <div className = "global">
//         "Test";

//         <div className = "zoom">

//         </div>
//         <div className = "chatBox">
//           <div className = "participantList">
//           <p>Wow</p>
//           </div>
//           <div className = "liveChat">

//           </div>
//         </div>

//       </div>
//     );
//   }

// }

export default ZoomScreen
