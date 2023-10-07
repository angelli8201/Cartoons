import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { deletePostById } from "../services/postService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
import FormErrors from "../components/FormErrors";

import "../styles/Posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState([]);
  const { signedIn } = useAuth();
  const navigate = useNavigate();
  const cartoonDetail = false;

  useEffect(() => {
    if (!signedIn) {
      navigate("/");
    }
  }, [signedIn, navigate]);

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:8080/cartoons/post");
    if (response.ok) {
      setPosts(await response.json());
    } else {
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (post) => {
    try {
      await deletePostById(post.postId);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
      setErrors(error);
    }
  };

  return (
    <>
      <Link
        className="btn btn-primary btn-lg w-100 mt-4 posts-page-add-btn"
        to="/postform"
      >
        Make a Post <i className="bi bi-file-earmark-plus"></i>
      </Link>
      <div className="posts-page-container">
        <div
          className="row mb-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div className="col-12">
            <FormErrors errors={errors} />
          </div>
          <div className="col-6">
            <iframe
              src="https://giphy.com/embed/dJD0xpWqYDkic"
              width="100%"
              height="365"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
              //   style={{ margin: "10px" }}
            />
          </div>
          <div className="col-6">
            <iframe
              src="https://giphy.com/embed/YAnpMSHcurJVS"
              width="100%"
              height="360"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
              //   style={{ margin: "10px" }}
            />
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="alert alert-warning py-4 mt-2">
            No posts found.
            <br />
            Do you want to add a post?
          </div>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              handleDelete={handleDelete}
              setErrors={setErrors}
              cartoonDetail={cartoonDetail}
            />
          ))
        )}
      </div>
    </>
  );
}
