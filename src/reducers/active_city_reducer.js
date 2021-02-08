const activeCityReducer = (state, action) => {
  if (state === undefined) {
    return { name: "London", address: "14-22 Elder St, London E1 6BT", slug: "london" };
  }
  if (action.type === 'SET_ACTIVE_CITY') {
    return action.payload;
  } else {
    return state;
  }

  // switch(action.type) {
  //   case 'SET_ACTIVE_CITY':
  //     return action.payload;
  //   default:
  //     return state;
  // }
};

export default activeCityReducer;