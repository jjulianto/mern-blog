import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";
import { Button, BlogItem, Gap } from "../../components";
import "./home.scss";

const Home = () => {
  const { dataBlog } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDataBlog());
  }, [dispatch]);
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => (
          <BlogItem
            key={blog._id}
            image={`http://localhost:8000/${blog.image}`}
            title={blog.title}
            body={blog.body}
            name={blog.author.name}
            date={blog.createdAt}
          />
        ))}
      </div>
      <div className="pagination">
        <Button title="&#8592; previous" />
        <Gap width={20} />
        <Button title="next &#8594;" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
