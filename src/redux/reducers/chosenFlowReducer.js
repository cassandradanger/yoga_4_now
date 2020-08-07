const chosenFlowReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CHOSEN_FLOW':
        return action.payload;
      default:
        return state;
    }
  };

  export default chosenFlowReducer;
  