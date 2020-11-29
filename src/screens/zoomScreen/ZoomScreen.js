import React from 'react'
import styles from './ZoomScreen.module.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { Button } from '@material-ui/core';
import WebcamCapture from './webcam.js'
import IconButton from '@material-ui/core/IconButton';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import MicOffIcon from '@material-ui/icons/MicOff';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import ReactPlayer from 'react-player'
import Image from 'react-bootstrap/Image';


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


class ZoomScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      names: ["Jessica", "Martin", "Naissa", "Jack", "Chaimae"],
      neighbourMessageHistory: [],
      neighbourMessage: '',
      allMessageHistory: [],
      allMessage: '',
      helloMessageBank: ["Hello", "Heyyy", "Hey what's up", "Hey guyss", "Hii"],
      questionAnswerMessageBank: ["Idk", "I don't really know", "I think so", "Yeahh", "Probably", "I wasn't paying attention lol"],
      counter: 0,
      showNeighboursChat: true,
      showAllChat: true,
      muted: false,
      video: true
    }

    this.handleChangeAll = this.handleChangeAll.bind(this);
    this.updateAllMesssageHistory = this.updateAllMesssageHistory.bind(this);
    this.handleChangeNeighbour = this.handleChangeNeighbour.bind(this);
    this.updateNeighbourMesssageHistory = this.updateNeighbourMesssageHistory.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.getRandomName = this.getRandomName.bind(this);
    this.getRandomHello = this.getRandomHello.bind(this);
    this.isAlone = this.isAlone.bind(this);
    this.neighboursChat = this.neighboursChat.bind(this);
    this.allChat = this.allChat.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);
    this.allChatHandleMinimize = this.allChatHandleMinimize.bind(this);
    this.getGroup = this.getGroup.bind(this)

    this.toggleMute = this.toggleMute.bind(this);
    this.toggleVideo = this.toggleVideo.bind(this);

    if (this.isAlone()) {
      this.state.names = [];
    } else {
      var neighbourName = this.props.neighbours.filter(seat => this.getGroup().includes(seat.id) && seat.name !== "Empty").map(seat => seat.name);
      this.state.names = neighbourName;
    }

  }

  handleMinimize() {
    this.setState({ showNeighboursChat: !this.state.showNeighboursChat })
  }

  allChatHandleMinimize() {
    this.setState({ showAllChat: !this.state.showAllChat })
  }

  toggleMute() {
    this.setState({ mute: !this.state.mute })
  }

  toggleVideo() {
    this.setState({ video: !this.state.video })
  }

  allChat() {
    return (
      <div className={styles.allChatBox}>
        <div className={styles.allChatTitle}>
          <h1>All Chat</h1>
        </div>
        <div className={styles.allChat}>
          <ul>
            {this.state.allMessageHistory.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </div>
        <div className={styles.message}>
          <input type="text" value={this.state.allMessage} placeholder="Message..." onChange={this.handleChangeAll}
            onKeyDown={this.handleKeyDown} />
          <Button type="button" onClick={this.updateAllMesssageHistory}>Send</Button>
        </div>
      </div>
    );
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
        <div className={styles.neighbourChat}>
          <ul>
            {this.state.neighbourMessageHistory.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </div>
        <div className={styles.message}>
          <input type="text" value={this.state.neighbourMessage} placeholder="Message..." onChange={this.handleChangeNeighbour}
            onKeyDown={this.handleKeyDown} />
          <Button type="button" onClick={this.updateNeighbourMesssageHistory}>Send</Button>
        </div>
      </div>
    );
  }



  //When send button is clicked for all chat
  handleChangeAll(event) {
    this.setState({ allMessage: event.target.value });
  }

  //When send button is clicked for neighbour chat
  handleChangeNeighbour(event) {
    this.setState({ neighbourMessage: event.target.value });
  }

  //When enter key is pressed
  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.updateAllMesssageHistory();
      this.updateNeighbourMesssageHistory();
    }
  }

  //Update messageHistory for all chat with message from sender
  updateAllMesssageHistory() {
    if (this.state.allMessage !== '') {
      this.setState({ allMessageHistory: this.state.allMessageHistory.concat('You: ' + this.state.allMessage) });
      this.setState({ allMessage: '' });
    }

    //Send random message from imaginary neighbors
    if (this.state.names.length !== 0 && this.state.allMessage !== '') {
      setTimeout(() => {
        if (this.state.counter === 0) {
          this.setState({ allMessageHistory: this.state.allMessageHistory.concat(this.getRandomName() + ": " + this.getRandomHello()) });
          setTimeout(() => {
            this.setState({ allMessageHistory: this.state.allMessageHistory.concat(this.getRandomName() + ": " + this.getRandomHello()) });
          }, 500);
          this.setState({ counter: this.state.counter + 1 });
        } else {
          this.setState({ allMessageHistory: this.state.allMessageHistory.concat(this.getRandomName() + ": " + this.getRandomQuestionAnswer()) });
          setTimeout(() => {
            this.setState({ allMessageHistory: this.state.allMessageHistory.concat(this.getRandomName() + ": " + this.getRandomQuestionAnswer()) });
          }, 1000);
        }
      }, 1000);
    }
  }

  //Update messageHistory for neighbour chat with message from sender
  updateNeighbourMesssageHistory() {
    if (this.state.neighbourMessage !== '') {
      this.setState({ neighbourMessageHistory: this.state.neighbourMessageHistory.concat('You: ' + this.state.neighbourMessage) });
      this.setState({ neighbourMessage: '' });
    }


    //Send random message from imaginary neighbors

    if (this.state.names.length !== 0 && this.state.neighbourMessage !== '') {
      setTimeout(() => {
        if (this.state.counter === 0) {
          this.setState({ neighbourMessageHistory: this.state.neighbourMessageHistory.concat(this.getRandomName() + ": " + this.getRandomHello()) });
          setTimeout(() => {
            this.setState({ neighbourMessageHistory: this.state.neighbourMessageHistory.concat(this.getRandomName() + ": " + this.getRandomHello()) });
          }, 500);
          this.setState({ counter: this.state.counter + 1 });
        } else {
          this.setState({ neighbourMessageHistory: this.state.neighbourMessageHistory.concat(this.getRandomName() + ": " + this.getRandomQuestionAnswer()) });
          setTimeout(() => {
            this.setState({ neighbourMessageHistory: this.state.neighbourMessageHistory.concat(this.getRandomName() + ": " + this.getRandomQuestionAnswer()) });
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

  getGroup() {
    var index = this.props.neighbours.findIndex(x => x.selected === true)
    return this.props.neighbours[index].group;
  }

  render() {
    return (
      <div className={styles.global}>
        <div className={styles.outerFrame}>
          <div className={styles.zoom}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=jGwO_UgTS7I"
              autoPlay
              muted
              playing={true}
            />
          </div>
          <div className={styles.videosFrame}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8S4GDVF2klk"
              autoPlay
              muted
              width={"150px"}
              height={"115px"}
              playing={true}
            />
            <Image className={styles.icon} src={require('./noCameraUser.png')} />
            {this.state.video && <WebcamCapture></WebcamCapture>}
            {!this.state.video && <Image className={styles.icon} src={require('./noCameraUser.png')} />}
          </div>
          <div className={styles.chatFrame} >
            {this.state.showAllChat ? <this.allChat /> : null}
            {(this.state.showNeighboursChat && !this.isAlone()) ? <this.neighboursChat /> : null}
          </div>
        </div>
        <div className={styles.leaveButton}>
          {!this.state.mute && <IconButton style={{ backgroundColor: '#ffff' }} onClick={this.toggleMute}>
            <MicIcon/>
            <h4>Mute</h4>
          </IconButton>}
          {this.state.mute && <IconButton style={{ backgroundColor: '#ffff' }} onClick={this.toggleMute}>
            <MicOffIcon/>
            <h4>UnMute</h4>
          </IconButton>}
          
          {this.state.video && <IconButton style={{ backgroundColor: '#ffff' }} onClick={this.toggleVideo}>
            <VideocamIcon/>
            <h4>Stop video</h4>
          </IconButton>}
          {!this.state.video && <IconButton style={{ backgroundColor: '#ffff' }} onClick={this.toggleVideo}>
            <VideocamOffIcon/>
            <h4>Start video</h4>
          </IconButton>}
          
          <Button style={{ backgroundColor: '#ffff' }}>
            <Link to="/seating" className={styles.linkClass} style={{ color: 'black' }}>Change Seat</Link>
          </Button>
          { !this.state.showAllChat  && <Button style={{ backgroundColor: '#ffff' }} onClick={this.allChatHandleMinimize}>Show Chat</Button> }
          { this.state.showAllChat  && <Button style={{ backgroundColor: '#ffff' }} onClick={this.allChatHandleMinimize}>Hide Chat</Button> }
          { !this.state.showNeighboursChat && <Button disabled={this.isAlone()} style={{ backgroundColor: '#ffff', fontSize: '9px' }} onClick={this.handleMinimize}>Show Neighbours Chat</Button> }
          { this.state.showNeighboursChat && <Button disabled={this.isAlone()} style={{ backgroundColor: '#ffff', fontSize: '9px' }} onClick={this.handleMinimize}>Hide Neighbours Chat</Button> }
          
          <Button type="button" variant="contained">
            <Link to="/" className={styles.linkClass}>Leave</Link>
          </Button>
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
