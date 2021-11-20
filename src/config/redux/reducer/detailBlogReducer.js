const initialState = {
  data: [],
};

const detailBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DETAIL_DATA_BLOG":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default detailBlogReducer;
