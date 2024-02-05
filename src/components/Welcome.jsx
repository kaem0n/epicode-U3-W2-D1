import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="light">
            <Alert.Heading>Benvenuto!</Alert.Heading>
            <p>
              Questa è la migliore libreria online dell'intero web! Seleziona il
              tuo genere preferito e scorri il nostro catalogo alla ricerca di
              un bel libro da leggere! C'è molta scelta perciò prenditi del
              tempo!
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome
