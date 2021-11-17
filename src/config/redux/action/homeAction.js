import axios from "axios";

export const setDataBlog = () => (dispatch) => {
  axios
    .get("http://localhost:8000/v1/blog/posts")
    .then((result) => {
      const responseAPI = result.data;
      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
