import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand href="#home">
          <div id="logo" className="fw-bold d-flex align-items-center fs-3">
            <i className="bi bi-book me-2"></i> Bookshelf
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
