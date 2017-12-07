import React, {PropTypes} from 'react';
import RaceListRow from './RaceListRow';

const RaceList = ({races}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Start At</th>
        <th>Bets Close</th>
      </tr>
      </thead>
      <tbody>
      {races.map(race =>
        <RaceListRow key={race.id} race={race}/>
      )}
      </tbody>
    </table>
  );
};

RaceList.propTypes = {
  races: PropTypes.array.isRequired
};

export default RaceList;
