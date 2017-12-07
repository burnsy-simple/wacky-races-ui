import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as raceActions from '../../actions/raceActions';
import RaceList from './RaceList';
import {browserHistory} from 'react-router';

class RacesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  raceRow(race, index) {
    return <div key={index}>{race.name}</div>;
  }

  render() {
    const {races} = this.props;

    return (
      <div>
        <h1>Upcoming Races</h1>
        <RaceList races={races}/>
      </div>
    );
  }
}

RacesPage.propTypes = {
  races: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    races: state.races
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(raceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RacesPage);
