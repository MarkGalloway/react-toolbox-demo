import React from 'react';
import Chip from 'react-toolbox/lib/chip/Chip';


const propTypes = {
  status: React.PropTypes.string.isRequired
}

function CbbBadge({status}) {
  switch(status) {
    case "Complete":
      return (
        <Chip className="Appraisals-cbb-badge Appraisals-cbb-complete">
          CBB Complete
        </Chip>
      )
    case "Incomplete":
      return (
        <Chip className="Appraisals-cbb-badge Appraisals-cbb-incomplete">
          CBB Incomplete
        </Chip>
      )
    default:
      return (
        <Chip className="Appraisals-cbb-badge Appraisals-cbb-not-bookable">
          Not Bookable
        </Chip>
      )
  }
}

CbbBadge.propTypes = propTypes;

export default CbbBadge
