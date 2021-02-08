import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class ActiveCity extends Component {

  componentWillMount() {
    // TODO dispatch an action to update the Redux State Tree
  }

  

  render() {
    console.log(this.props.activeCity.slug);


    const imageUrl = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`

    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={imageUrl} width="100%"/>
      </div>
    )
  }

}

function mapReduxStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  }
}

export default connect(mapReduxStateToProps, null)(ActiveCity);
