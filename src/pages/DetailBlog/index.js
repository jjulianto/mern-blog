import React from "react";
import { RegisterBackground } from "../../assets";
import { Link } from "../../components";
import "./detailBlog.scss";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBackground} alt="thumb" />
      <p className="blog-title">Title Post</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        perferendis iste deleniti placeat, sapiente veritatis porro rem non nisi
        voluptates inventore doloribus hic? Laborum culpa deserunt saepe
        veritatis adipisci ab?
      </p>
      <Link title="Back to Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
