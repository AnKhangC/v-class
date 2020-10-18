import React from 'react'
import styles from './ZoomScreen.module.css'
import { connect } from "react-redux"

class ZoomScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      names: ["Mike", "Alexis", "Antoine", "Sam", "Farouk"], 
      messageHistory: ["Alexis: Hello", "Antoine: Heyy"],
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.updateMesssageHistory = this.updateMesssageHistory.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleKeyDown(e){
    console.log(this.props.neighbours)
    if (e.key === 'Enter') {
      this.updateMesssageHistory();
    }
  }

  updateMesssageHistory(){
    if(this.state.message !== ''){
      this.setState({messageHistory: this.state.messageHistory.concat('You: ' + this.state.message)});
      this.setState({message: ''});
    }
  }

  render(){
    return(
      <div className = {styles.global}>
        <div className = {styles.zoom}>
          <img className = {styles.zoomImage} src={require('./NoParticipation1.jpg')} />
        </div>
        <div className = {styles.chatBox}>
          <div className = {styles.participantList}>
            <h1>Neighbors</h1>
            <ul>
              {this.state.names.map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </ul>
          </div>
          <div className = {styles.liveChat}>
            <ul>
            {this.state.messageHistory.map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </ul>
          </div>
          <div className = {styles.message}>
            <input type = "text" value={this.state.message} placeholder = "Message..." onChange = {this.handleChange} 
            onKeyDown = {this.handleKeyDown}/>
            <button type = "button" onClick = {this.updateMesssageHistory}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    neighbours: state.neighbours.neighbours
  }
}

export default connect(mapStateToProps)(ZoomScreen)
