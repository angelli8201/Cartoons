import { useState, useEffect } from "react";
import { Card, Spinner, Button } from "react-bootstrap";
import { findUserById } from "../services/userService";
import { deletePostById } from "../services/postService";
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ post, setErrors }) {
  
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState(null);
  const { user } = useAuth();
  const userId = user ? user.userId : null;
  const navigate = useNavigate();


  const handleDelete = async () => {
    try {
      await deletePostById(post.postId);
      navigate("/");
      
    
    } catch (error) {
      console.error("Error deleting post:", error);
    } 
  };

  const fetchUser = async () => {
    try {
      const user = await findUserById(post.userId);
      setAuthor(user);
    } catch (error) {
      console.error("Error finding post user:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchUser();
      setLoading(false);
    };

    fetchData();
  }, [post.userId]);

  return (
    <>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "10vh", color: "cyan" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Card key={post.postId} className="mb-3">
          <Card.Body>
            <Card.Title style={{ color: 'blue', fontSize: '2em' }}>Title: {post.title}</Card.Title>
            <Card.Text style={{fontSize: '1.5em' }}>{post.caption}</Card.Text>
            <Card.Text>Posted By: {author ? author.userName : "Unknown"}</Card.Text>
            <Card.Text>RE: {post.reference}</Card.Text>
            
            {userId === post.userId && (
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
}