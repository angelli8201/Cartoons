import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findCartoonById } from "../services/cartoonApi2D";
import { findAllPosts } from "../services/postService";
import { useAuth } from "../components/AuthProvider";
import PlaceHolderImage from "../images/placeholder-girl.jpg";
import PostFormModal from "../components/PostFormModal";
import CartoonDetailDisplay from "../components/CartoonDetailDisplay";
import { Row, Spinner } from "react-bootstrap";
import "../styles/ViewCartoonDetail.css";

export default function ViewCartoonDetail() {
  const { cartoonId } = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const { user, signedIn, errors, setErrors } = useAuth();

  const navigate = useNavigate();

  const [newPost, setNewPost] = useState({
    title: "",
    caption: "",
    reference: "",
    userId: "",
  });
  const [matchedPosts, setMatchedPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleImageError = (e) => {
    e.target.src = PlaceHolderImage;
  };

  useEffect(() => {
    if (!signedIn) {
      navigate("/");
    }
  },[signedIn, navigate]);

  useEffect(() => {
    if (cartoonId) {
      async function fetchCartoon() {
        try {
          const cartoonData = await findCartoonById(cartoonId);
          setData(cartoonData);
          setMatchedPosts(
            posts.filter((post) => post.reference === cartoonData.title)
          );
        } catch (error) {
          console.error(error);
          setErrors(error);
        } finally {
          setLoading(false);
        }
      }

      fetchCartoon();
    }
  }, [cartoonId]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postData = await findAllPosts();
        setPosts(postData);
        setMatchedPosts(posts.filter((post) => post.reference === data.title));
      } catch (error) {
        console.error(error);
        setErrors(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [data]);

  const toggleAddPostForm = () => {
    setShowModal(true);
    setIsAddingPost(!isAddingPost);
    setNewPost({ title: "", caption: "", reference: data.title, userId: user.userId });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  // TODO: add logic from service to add post
  const handleAddPost = () => {
    const updatedPosts = [
      ...posts,
      {
        
        ...newPost,
        userId: user.userId,
      },
    ];
    setPosts(updatedPosts);
    setMatchedPosts(
      updatedPosts.filter((post) => post.reference === data.title)
    );
    setShowModal(false);
  };

  return (
    <div className="cartoon-container mt-4">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "87vh", color: "cyan" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : data.length === 0 ? (
        <div className="alert alert-warning py-4">No cartoons found.</div>
      ) : (
        <Row>
          <CartoonDetailDisplay
            data={data}
            handleImageError={handleImageError}
            toggleAddPostForm={toggleAddPostForm}
            matchedPosts={matchedPosts}
            errors={errors}
            setErrors={setErrors}
            user={user}
          />
        </Row>
      )}
      <PostFormModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleInputChange={handleInputChange}
        handleAddPost={handleAddPost}
        newPost={newPost}
      />
    </div>
  );
}
