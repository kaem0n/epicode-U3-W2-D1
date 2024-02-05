// COMPONENT IMPORTS

import { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import CommentArea from './CommentArea'

// COMPONENT FUNCTION

class SingleBook extends Component {
  state = {
    selected: false,
  }

  setSelected = () => {
    this.setState({ selected: true })
    this.props.setBook(this.props.book)
  }

  componentDidMount() {
    if (this.props.bookSelected === this.props.book) {
      this.setSelected()
    }
  }

  render() {
    return (
      <Col>
        <Card
          className={
            this.state.selected && this.props.book === this.props.bookSelected
              ? 'border-4 border-danger h-100'
              : 'h-100'
          }
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={this.setSelected}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div className="mb-2">
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Subtitle>
                <Badge bg="danger">ASIN: {this.props.book.asin}</Badge>
              </Card.Subtitle>
            </div>
            <div>
              <Card.Text className="m-0">
                <span className="fw-bold">Categoria:</span>{' '}
                {toCapitalize(this.props.book.category)}
              </Card.Text>
              <Card.Text>
                <span className="fw-bold">Prezzo:</span>{' '}
                {fixPrice(String(this.props.book.price))}€
              </Card.Text>
              <div className="d-flex">
                <Button
                  variant="dark"
                  className="flex-grow-1 me-2 px-0"
                  onClick={this.setSelected}
                >
                  Seleziona <i className="bi bi-cart-plus-fill"></i>
                </Button>
                <CommentArea book={this.props.book} />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

// OTHER FUNCTIONS

const fixPrice = (str) => {
  let text = str.replace('.', ',')
  if (text.slice(text.indexOf(',')).length === 2) {
    text += '0'
  } else if (text.indexOf(',') === -1) {
    text += ',00'
  }
  return text
}

const toCapitalize = (str) => {
  let text
  if (str === 'scifi') {
    text = 'Sci-Fi'
  } else {
    const textArray = str.split('')
    textArray[0] = textArray[0].toUpperCase()
    text = textArray.join('')
  }
  return text
}

// EXPORT

export default SingleBook
