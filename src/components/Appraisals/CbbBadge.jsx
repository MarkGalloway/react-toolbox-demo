import React from 'react';
import Chip from 'react-toolbox/lib/chip/Chip';


function CbbBadge({status}) {
  switch(status) {
    case "Complete":
      return (
        <Chip style={{backgroundColor: 'green', color: 'white'}}>
          CBB Complete
        </Chip>
      )
    case "Incomplete":
      return (
        <Chip style={{backgroundColor: 'red', color: 'white'}}>
          CBB Incomplete
        </Chip>
      )
    default:
      return (
        <Chip style={{backgroundColor: 'purple', color: 'white'}}>
          Not Bookable
        </Chip>
      )
  }
}

export default CbbBadge
