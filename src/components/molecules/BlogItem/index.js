import React from "react";
import { RegisterBackground } from "../../../assets";
import "./blogItem.scss";
import { useHistory } from "react-router-dom";
import { Button, Gap } from "../../atoms";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img src={RegisterBackground} alt="post" className="img-thumb" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat minus
          voluptates, facere porro libero suscipit nesciunt ducimus sed
          molestias mollitia pariatur itaque voluptate autem neque voluptatibus
          molestiae delectus quibusdam quidem!
        </p>
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
