import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postToAPI, setForm, setImagePreview } from "../../config/redux/action";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import "./createBlog.scss";

const CreateBlog = () => {
  const { form, imagePreview } = useSelector(
    (state) => state.createBlogReducer
  );
  const { title, body } = form;
  const dispatch = useDispatch();

  const history = useHistory();

  const onSubmit = () => {
    postToAPI(form);
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImagePreview(URL.createObjectURL(file)));
  };
  return (
    <div className="blog-post">
      <Link title="Back to Home" onClick={() => history.push("/")} />
      <p className="title">Create New Blog Post</p>
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
        <Button title="save" onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
