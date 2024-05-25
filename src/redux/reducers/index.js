const initialState = {
  packageData: [],
  destinationData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PACKAGE_DATA":
      return {
        ...state,
        packageData: action.payload,
      };
    case "SET_DESTINATION_DATA":
      return {
        ...state,
        destinationData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
