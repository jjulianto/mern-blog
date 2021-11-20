import React from "react";
import "./blogItem.scss";
import { useHistory } from "react-router-dom";
import { Button, Gap } from "../../atoms";

const BlogItem = ({ title, image, body, name, date, _id }) => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img src={image} alt="post" className="img-thumb" />
      <div className="content-detail">
        <div className="title-wrapper">
          <p className="title">{title}</p>
          <div className="edit-wrapper">
            <p
              className="edit"
              onClick={() => history.push(`/create-blog/${_id}`)}
            >
              Edit
            </p>{" "}
            | <p className="delete">Delete</p>
          </div>
        </div>
        <p className="author">
          {name} - {date}
        </p>
        <p className="body">{body.substr(0, 170)}....</p>
        <Gap height={20} />
        <Button
          title="view detail"
          onClick={() => history.push(`/detail-blog/${_id}`)}
        />
      </div>
    </div>
  );
};

export default BlogItem;
