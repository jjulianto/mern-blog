import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { detailDataBlog } from "../../config/redux/action/detailBlogAction";
import { Link } from "../../components";
import "./detailBlog.scss";

const DetailBlog = (props) => {
  const { data } = useSelector((state) => state.detailBlogReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(detailDataBlog(id));
  }, [props, dispatch]);
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
