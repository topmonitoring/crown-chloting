const INITIAL_STATE = {
  currentUSer: null
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUSer: action.payload
      };

    default:
      return state;
  }
};
export default userReducer;
