const flowsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FLOWS':
        return action.payload;
      case 'SET_CHOSEN_FLOW':
        return action.payload;
      default:
        return state;
    }
  };

  export default flowsReducer;
  