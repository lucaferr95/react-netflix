import { Col, Container, Row, Card, Spinner, ListGroup } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MovieDetails = function () {
  const params = useParams()
  const navigate = useNavigate()

  const [details, setDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [isLoadingComments, setIsLoadingComments] = useState(true)

  const [newComment, setNewComment] = useState({
    comment: '',
    rate: '',
    elementId: params.movieId,
  })

  // Aggiorna elementId se cambia movieId
  useEffect(() => {
    setNewComment((prev) => ({ ...prev, elementId: params.movieId }))
  }, [params.movieId])

  // Fetch dettagli film
  useEffect(() => {
    const URLID = 'http://www.omdbapi.com/?apikey=339d3413&i=' + params.movieId

    fetch(URLID)
      .then((response) => response.json())
      .then((singleMovie) => {
        if (singleMovie.Response === 'False') {
          setIsLoading(false)
          navigate('/404')
        } else {
          setDetails(singleMovie)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.log('Errore nel fetch:', error)
        setIsLoading(false)
        navigate('/404')
      })
  }, [params.movieId, navigate])

  // Fetch commenti
  const fetchComments = () => {
    const COMMENT_API =
      'https://striveschool-api.herokuapp.com/api/comments/' + params.movieId

    fetch(COMMENT_API, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y0ZWJhNzgxYjBkZDAwMTUwYTdhM2UiLCJpYXQiOjE3NDQxNDYyNjAsImV4cCI6MTc0NTM1NTg2MH0.Vi1qyyeKsYpOGYsG5rdiWOiR6BhX8fVdxXQZ3sXiUr0',
      },
    })
      .then((response) => response.json())
      .then((comments) => {
        setComments(comments)
        setIsLoadingComments(false)
      })
      .catch((error) => {
        console.log('Errore nel fetch dei commenti:', error)
        setIsLoadingComments(false)
      })
  }

  useEffect(() => {
    fetchComments()
  }, [params.movieId])

  // Invia commento
  const sendComments = (e) => {
    e.preventDefault()

    const COMMENT_API = 'https://striveschool-api.herokuapp.com/api/comments/'

    fetch(COMMENT_API, {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y0ZWJhNzgxYjBkZDAwMTUwYTdhM2UiLCJpYXQiOjE3NDQxNDYyNjAsImV4cCI6MTc0NTM1NTg2MH0.Vi1qyyeKsYpOGYsG5rdiWOiR6BhX8fVdxXQZ3sXiUr0',
      },
    })
      .then((res) => {
        if (res.ok) {
          alert('Commento inviato!')
          setNewComment({ comment: '', rate: '', elementId: params.movieId })
          fetchComments()
        } else {
          throw new Error("Errore nell'invio del commento")
        }
      })
      .catch((err) => {
        console.error(err)
        alert("Si è verificato un errore durante l'invio del commento")
      })
  }

  return (
    <Container fluid className="bg-dark text-white py-4">
      <Row className="justify-content-center">
        {/* Colonna della Card del film */}
        <Col xs={12} md={6}>
          {isLoading ? (
            <Spinner variant="success" animation="border" />
          ) : (
            <Card className="text-center my-3">
              <Card.Img
                variant="top"
                src={details.Poster}
                className="d-block w-100"
                style={{ height: '550px', objectFit: 'cover' }}
              />
              <Card.Body className="bg-info text-dark">
                <Card.Title className="text-danger fs-4">
                  Title: {details.Title}
                </Card.Title>
                <Card.Text className="fst-italic">
                  Genre: {details.Genre}
                </Card.Text>
                <Card.Text>
                  Ratings: {details.Ratings?.[0]?.Value}
                </Card.Text>
                <ListGroup className="mb-3">
                  {isLoadingComments ? (
                    <ListGroup.Item>Caricamento commenti...</ListGroup.Item>
                  ) : comments.length > 0 ? (
                    comments.map((comment) => (
                      <ListGroup.Item key={comment._id}>
                        {comment.comment} – <em>{comment.author}</em>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>Nessun commento trovato.</ListGroup.Item>
                  )}
                </ListGroup>
                <Link to="/menu" className="btn btn-danger">
                  Torna al menu!
                </Link>
              </Card.Body>
            </Card>
          )}
        </Col>

        {/* Colonna per inserimento commento */}
        <Col xs={12} md={4}>
          <Card className="bg-secondary text-white my-3">
            <Card.Body>
              <Card.Title>Aggiungi un commento</Card.Title>
              <form onSubmit={sendComments}>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Commento
                  </label>
                  <textarea
                    id="comment"
                    className="form-control"
                    value={newComment.comment}
                    required
                    onChange={(e) =>
                      setNewComment({
                        ...newComment,
                        comment: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rate" className="form-label">
                    Voto (1-5)
                  </label>
                  <select
                    id="rate"
                    className="form-select"
                    value={newComment.rate}
                    required
                    onChange={(e) =>
                      setNewComment({ ...newComment, rate: e.target.value })
                    }
                  >
                    <option value="">Seleziona un voto</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-light w-100">
                  Invia Commento
                </button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
