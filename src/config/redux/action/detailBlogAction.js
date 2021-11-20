import axios from "axios";

export const detailDataBlog = (id) => (dispatch) => {
  axios
    .get(`http://localhost:8000/v1/blog/post/${id}`)
    .then((result) => {
      const responseAPI = result.data;
      dispatch({ type: "DETAIL_DATA_BLOG", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
