import React from 'react'
import styles from './ZoomScreen.module.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { Button } from '@material-ui/core';


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


class ZoomScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      names: ["Jessica", "Martin", "Naissa", "Jack", "Chaimae"],
      neighboursMessageHistory: [],
      message: '',
      helloMessageBank: ["Hello", "Heyyy", "Hey what's up", "Hey guyss", "Hii"],
      questionAnswerMessageBank: ["Idk", "I don't really know", "I think so", "Yeahh", "Probably", "I wasn't paying attention lol"],
      counter: 0,
      showNeighboursChat: true,
      showAllChat : true
    }

    this.handleChange = this.handleChange.bind(this);
    this.updateMesssageHistory = this.updateMesssageHistory.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.getRandomName = this.getRandomName.bind(this);
    this.getRandomHello = this.getRandomHello.bind(this);
    this.isAlone = this.isAlone.bind(this);
    this.neighboursChat = this.neighboursChat.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);

    if (this.isAlone()) {
      this.state.names = [];
    }
  }

  handleMinimize() {
    this.setState({showNeighboursChat : !this.state.showNeighboursChat})
  }

  neighboursChat() {
    return (
      <div className={styles.chatBox}>
        <div className={styles.participantList}>
        <h1>Neighbors</h1>
          <ul>
            {this.state.names.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </div>
        <div className={styles.liveChat}>
          <ul>
            {this.state.neighboursMessageHistory.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </div>
        <div className={styles.message}>
          <input type="text" value={this.state.message} placeholder="Message..." onChange={this.handleChange}
            onKeyDown={this.handleKeyDown} />
          <Button type="button" onClick={this.updateMesssageHistory}>Send</Button>
        </div>
      </div>
    );
  }

  //When send button is clicked
  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  //When enter key is pressed
  handleKeyDown(e) {
    //console.log(this.props.neighbours)
    if (e.key === 'Enter') {
      this.updateMesssageHistory();
    }
  }

  //Update messageHistory with message from sender
  updateMesssageHistory() {
    if (this.state.message !== '') {
      this.setState({ neighboursMessageHistory: this.state.neighboursMessageHistory.concat('You: ' + this.state.message) });
      this.setState({ message: '' });
    }


    //Send random message from imaginary neighbors
    if (this.state.names.length !== 0) {
      setTimeout(() => {
        if (this.state.counter === 0) {
          this.setState({ neighboursMessageHistory: this.state.neighboursMessageHistory.concat(this.getRandomName() + ": " + this.getRandomHello()) });
          setTimeout(() => {
            this.setState({ neighboursMessageHistory: this.state.neighboursMessageHistory.concat(this.getRandomName() + ": " + this.getRandomHello()) });
          }, 500);
          this.setState({ counter: this.state.counter + 1 });
        } else {
          this.setState({ neighboursMessageHistory: this.state.neighboursMessageHistory.concat(this.getRandomName() + ": " + this.getRandomQuestionAnswer()) });
          setTimeout(() => {
            this.setState({ neighboursMessageHistory: this.state.neighboursMessageHistory.concat(this.getRandomName() + ": " + this.getRandomQuestionAnswer()) });
          }, 1000);
        }
      }, 1000);
    }
  }

  //Get random name from name bank
  getRandomName() {
    return this.state.names[getRandomInt(this.state.names.length)]
  }

  //Get random greeting from greetings bank
  getRandomHello() {
    return this.state.helloMessageBank[getRandomInt(this.state.helloMessageBank.length)]
  }

  //Get random answer from answer bank
  getRandomQuestionAnswer() {
    return this.state.questionAnswerMessageBank[getRandomInt(this.state.questionAnswerMessageBank.length)]
  }

  isAlone() {
    var index = this.props.neighbours.findIndex(x => x.selected === true)
    if (index >= 0) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div className={styles.global}>
        <div className={styles.outerFrame}>
          <div className={styles.zoom}>
            <img className={styles.zoomImage} src={require('./NoParticipation1.jpg')} />
          </div>
          <div className={styles.chatFrame} >
          {(this.state.showNeighboursChat && !this.isAlone()) ? <this.neighboursChat /> : null }
          </div>
        </div>
        <div className={styles.leaveButton}>
          <Button type="button" variant="contained">
            <Link to="/" className={styles.linkClass}>Leave</Link>
          </Button>
          <Button disabled = {this.isAlone()} style={{ backgroundColor: '#ffff'}}  onClick={this.handleMinimize}>Neighbours Chat</Button>
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
