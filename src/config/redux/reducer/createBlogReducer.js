const initialState = {
  form: {
    title: "",
    image: "",
    body: "",
  },
  imagePreview: null,
};

const createBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return {
        ...state,
        form: {
          ...state.form,
          [action.formType]: action.formValue,
        },
      };
    case "SET_IMAGE_PREVIEW":
      return {
        ...state,
        imagePreview: action.payload,
      };
    default:
      return state;
  }
};

export default createBlogReducer;
