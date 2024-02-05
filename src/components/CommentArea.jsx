import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CommentList from './CommentList'

const CommentArea = function (props) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button variant="danger" onClick={() => setShow(true)}>
        <i className="bi bi-chat-left-text-fill"></i>
      </Button>

      <Modal show={show} onHide={() => setShow(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{props.book.title} - Area Commenti</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <CommentList book={props.book} />
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CommentArea
