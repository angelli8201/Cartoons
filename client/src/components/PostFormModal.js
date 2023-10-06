import { Button, Modal, Form } from "react-bootstrap";

export default function PostFormModal({
  showModal,
  setShowModal,
  handleInputChange,
  handleAddPost,
  toggleAddPostForm,
  newPost,
}) {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Caption</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="caption"
              value={newPost.caption}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Reference</Form.Label>
            <Form.Control
              type="text"
              name="reference"
              value={newPost.reference}
              disabled
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={(e) => handleAddPost(e)}>
          Add Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
