import FormErrors from "./FormErrors";
import { Col, Card, CardBody, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

export default function CartoonDetailDisplay({
  data,
  handleImageError,
  toggleAddPostForm,
  matchedPosts,
  errors,
  setErrors,
  handleDelete,
}) {
  return (
    <>
      <Col sm={12} md={6}>
        <Card className="w-100">
          <Card.Img
            variant="top"
            src={data.image}
            alt={data.title}
            onError={handleImageError}
          />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
          </Card.Body>
          <CardBody>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Year: {data.year}</ListGroup.Item>
              <ListGroup.Item>
                Creator: {data.creator.join(", ")}
              </ListGroup.Item>
              <ListGroup.Item>Rating: {data.rating}</ListGroup.Item>
              <ListGroup.Item>Genre: {data.genre.join(", ")}</ListGroup.Item>
              <ListGroup.Item>
                Runtime: {data.runtime_in_minutes} minutes
              </ListGroup.Item>
              <ListGroup.Item>Episodes: {data.episodes}</ListGroup.Item>
            </ListGroup>
          </CardBody>
          <Card.Body>
            <Link className="btn btn-success btn-block w-100" to={"/cartoons"}>
              Go Back <i className="bi bi-skip-backward h-100"></i>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6}>
        <div className="post-scroll-container p-2 mb-2">
          <Button
            variant="primary"
            className="btn-block w-100 mb-2"
            onClick={toggleAddPostForm}
          >
            {" "}
            Post <i className="bi bi-file-earmark-plus"></i>
          </Button>
          <FormErrors error={errors} />
          {matchedPosts.length === 0 ? (
            <div>No posts for this cartoon... yet!</div>
          ) : (
            matchedPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                setErrors={setErrors}
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>
      </Col>
    </>
  );
}
