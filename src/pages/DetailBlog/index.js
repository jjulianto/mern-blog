import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
import { Link } from "../../components";
import "./detailBlog.scss";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`http://localhost:8000/v1/blog/post/${id}`)
      .then((result) => {
        const responseAPI = result.data;
        setData(responseAPI.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);
  const history = useHistory();
  if (data.author) {
    return (
      <div className="detail-blog-wrapper">
        <img
          className="img-cover"
          src={`http://localhost:8000/${data.image}`}
          alt="thumb"
        />
        <p className="blog-title">{data.title}</p>
        <p className="blog-author">
          {data.author.name} - {data.createdAt}
        </p>
        <p className="blog-body">{data.body}</p>
        <Link title="Back to Home" onClick={() => history.push("/")} />
      </div>
    );
  }
  return <p>Loading data...</p>;
};

export default withRouter(DetailBlog);
