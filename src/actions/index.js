// TODO: add and export your own actions
import cities from '../cities.jsx';

export function setCities() {
  // TODO Simulate API
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function setActiveCity(activeCity) {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: activeCity
  }
}
