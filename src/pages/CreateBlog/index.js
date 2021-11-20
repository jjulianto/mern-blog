import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  postToAPI,
  updateToAPI,
  setForm,
  setImagePreview,
} from "../../config/redux/action";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import "./createBlog.scss";

const CreateBlog = (props) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const { form, imagePreview } = useSelector(
    (state) => state.createBlogReducer
  );
  const { title, body } = form;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      setIsUpdate(true);
      axios
        .get(`http://localhost:8000/v1/blog/post/${id}`)
        .then((result) => {
          const responseAPI = result.data;
          const data = responseAPI.data;
          dispatch(setForm("title", data.title));
          dispatch(setImagePreview(`http://localhost:8000/${data.image}`));
          dispatch(setForm("body", data.body));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props, dispatch]);

  const onSubmit = () => {
    const id = props.match.params.id;
    if (isUpdate) {
      updateToAPI(form, id);
      history.push("/");
    } else {
      postToAPI(form);
      history.push("/");
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImagePreview(URL.createObjectURL(file)));
  };
  return (
    <div className="blog-post">
      <Link title="Back to Home" onClick={() => history.push("/")} />
      <p className="title">{isUpdate ? "Update" : "Create New"} Blog Post</p>
      <Input
        title="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload img={imagePreview} onChange={(e) => onImageUpload(e)} />
      <TextArea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={20} />
      <div className="button-action">
        <Button title={isUpdate ? "update" : "save"} onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default withRouter(CreateBlog);
