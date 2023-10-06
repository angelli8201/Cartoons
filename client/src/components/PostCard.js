import { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import { findUserById } from "../services/userService";

export default function PostCard({ post, setErrors }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (post) {
      async function fetchUser() {
        try {
          const userData = await findUserById(post.userId);
          setUser(userData);
        } catch (error) {
          console.error(error);
          setErrors(error);
        } finally {
          setLoading(false);
        }
      }

      fetchUser();
    }
  }, []);

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
      ) : (<Card key={post.postId} className="mb-3">
        <Card.Body>
          <Card.Title>Title: {post.title}</Card.Title>
          <Card.Text>{post.caption}</Card.Text>
          <Card.Text>Posted By: {user.userName ?? "Unknown"}</Card.Text>
          <Card.Text>RE: {post.reference}</Card.Text>
        </Card.Body>
      </Card>)}
    </>
  );
}
