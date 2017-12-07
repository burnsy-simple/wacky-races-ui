import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as raceActions from '../../actions/raceActions';
import toastr from 'toastr';

export class RaceDetailPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      race: Object.assign({}, props.race),
      errors: {},
      saving: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.race.id != nextProps.race.id) {
      this.setState({race: Object.assign({}, nextProps.race)});
    }
  }

  render() {
    return (
      <RaceDetails
        race={this.state.race}
        errors={this.state.errors}
      />
    );
  }
}

RaceDetailPage.propTypes = {
  race: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
RaceDetailPage.contextTypes = {
  router: PropTypes.object
};

function getRaceById(races, id) {
  const race = races.filter(race => race.id == id);
  if (race) return race[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const raceId = ownProps.params.id; // from the path `/race/:id`

  let race = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (raceId && state.races.length > 0) {
    race = getRaceById(state.races, raceId);
  }

  return {
    race: race
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(raceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceDetailPage);
