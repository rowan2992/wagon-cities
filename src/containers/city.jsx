import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {

  // componentWillMount() {
  //   // TODO dispatch an action to update the Redux State Tree
  //   this.props.setActiveCity()
  // }
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  };

  render() {
    return (
      <div className="city list-group-item" onClick={this.handleClick}>{this.props.city.name}</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);
