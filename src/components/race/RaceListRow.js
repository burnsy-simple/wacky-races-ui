import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const getType = function(type) {
  switch(type) {
    case 0: 
      return "Thoroughbred";
    case 1:
      return "Greyhounds";
    case 2:
      return "Harness";
    default:
     return "Unknown";
  }
};

const RaceListRow = ({race}) => {
  return (
    <tr>
      <td><Link to={'/race/' + race.id}>{race.name}</Link></td>
      <td>{getType(race.type)}</td>
      <td>{race.start_at}</td>
      <td>{race.close_at}</td>
    </tr>
  );
};

RaceListRow.propTypes = {
  race: PropTypes.object.isRequired
};

export default RaceListRow;
