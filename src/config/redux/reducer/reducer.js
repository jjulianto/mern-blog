const initialState = {
  dataBlog: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DATA_BLOG":
      return {
        ...state,
        dataBlog: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
