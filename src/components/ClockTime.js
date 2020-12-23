import React from 'react';
import { 
    MDBContainer,
} from 'mdbreact';

const ClockTime = (props) => {
  
  // Format time into displayed string
  function formatTime(time) {

    if (time < 10) {
      time = "0" + time
    } else {
      time = time.toString()
    }

    return time;
  }

  var clockText = formatTime(props.minutes) + 
    ":" + formatTime(props.seconds) + 
    "." + formatTime(props.milliseconds);


  // Apply optional red text if mins < 1
  let textStyle = {}
  if (props.redText && props.minutes < 1) {
    textStyle = {
      color: 'darkred'
    }
  }

  return (
    <MDBContainer className="text-center">
        <p style={textStyle} className="clockText"><strong>{clockText}</strong></p>
    </MDBContainer>
  );
};

export default ClockTime;