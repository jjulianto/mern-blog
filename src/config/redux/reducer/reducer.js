const initialState = {
  dataBlog: [],
  page: {
    currentPage: 1,
    totalPage: 1,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DATA_BLOG":
      return {
        ...state,
        dataBlog: action.payload,
      };
    case "UPDATE_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
