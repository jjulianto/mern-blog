import React from "react";
import "./blogItem.scss";
import { useHistory } from "react-router-dom";
import { Button, Gap } from "../../atoms";

const BlogItem = ({ title, image, body, name, date }) => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img src={image} alt="post" className="img-thumb" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {name} - {date}
        </p>
        <p className="body">{body.substr(0, 170)}....</p>
        <Gap height={20} />
        <Button
          title="view detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
