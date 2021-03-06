import React from 'react';
import Webcam from "react-webcam";
import ReactDOM from 'react-dom'

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);

    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style = {{width : '150px' , height : '115px'}}
        />
      </>
    );
  };
  
  ReactDOM.render(<WebcamCapture />, document.getElementById("root"));
  
  export default WebcamCapture
  