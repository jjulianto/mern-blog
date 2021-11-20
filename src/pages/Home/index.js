import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";
import { Button, BlogItem, Gap } from "../../components";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./home.scss";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const history = useHistory();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this post?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(`http://localhost:8000/v1/blog/post/${id}`)
              .then((result) => {
                console.log(result);
                dispatch(setDataBlog(counter));
              })
              .catch((err) => {
                console.log(err);
              });
          },
        },
        {
          label: "No",
          onClick: () => console.log("user do not delete this post"),
        },
      ],
    });
  };
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
            _id={blog._id}
            onDelete={confirmDelete}
          />
        ))}
      </div>
      <div className="pagination">
        <Button title="&#8592; previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button title="next &#8594;" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
