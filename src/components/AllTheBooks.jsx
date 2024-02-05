// DATA IMPORTS

import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'

// COMPONENT IMPORTS

import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import SingleBook from './SingleBook'
import SideCommentArea from './SideCommentArea'

// COMPONENT FUNCTION

class AllTheBooks extends Component {
  state = {
    genreSelected: fantasy,
    searchText: '',
    bookSelected: null,
  }

  setBook = (book) => {
    this.setState({ bookSelected: book })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  filter = () => {
    const filteredBooks = []
    for (let i = 0; i < this.state.genreSelected.length; i++) {
      if (
        this.state.genreSelected[i].title
          .toLowerCase()
          .indexOf(this.state.searchText) !== -1
      ) {
        filteredBooks.push(this.state.genreSelected[i])
      }
    }
    return filteredBooks
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row className="mb-3">
            <Col xs={12} md={8} lg={6} xxl={4} className="d-flex">
              <Dropdown className="me-2">
                <Dropdown.Toggle variant="dark">Generi</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => this.setState({ genreSelected: fantasy })}
                  >
                    Fantasy
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ genreSelected: history })}
                  >
                    History
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ genreSelected: horror })}
                  >
                    Horror
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ genreSelected: romance })}
                  >
                    Romance
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ genreSelected: scifi })}
                  >
                    Sci-Fi
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form className="flex-grow-1" onSubmit={this.handleSubmit}>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={this.state.searchText}
                  onChange={(e) =>
                    this.setState({ searchText: e.target.value })
                  }
                />
              </Form>
            </Col>
          </Row>
        </Container>
        <Container fluid className="mb-5">
          <Row>
            <Col xs={6} lg={8} xxl={9}>
              <Container fluid className="px-0">
                <Row
                  xs={1}
                  md={2}
                  lg={3}
                  xl={4}
                  xxl={5}
                  className="g-3 border-end"
                >
                  {this.state.searchText === '' ? (
                    this.state.genreSelected.map((book) => {
                      return (
                        <SingleBook
                          book={book}
                          key={book.asin}
                          bookSelected={this.state.bookSelected}
                          setBook={this.setBook}
                        />
                      )
                    })
                  ) : this.filter().length !== 0 ? (
                    this.filter().map((book) => {
                      return (
                        <SingleBook
                          book={book}
                          key={book.asin}
                          bookSelected={this.state.bookSelected}
                          setBook={this.setBook}
                        />
                      )
                    })
                  ) : (
                    <h1 className="flex-grow-1 text-center text-secondary mt-5">
                      Nessun libro trovato.
                    </h1>
                  )}
                </Row>
              </Container>
            </Col>
            <Col xs={6} lg={4} xxl={3}>
              {this.state.bookSelected ? (
                <>
                  <h4 className="mb-4">
                    Area commenti -{' '}
                    <span className="fst-italic">
                      {this.state.bookSelected.title}
                    </span>
                  </h4>
                  <SideCommentArea bookSelected={this.state.bookSelected} />
                </>
              ) : (
                <h3>Nessun libro selezionato</h3>
              )}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

// EXPORT

export default AllTheBooks
