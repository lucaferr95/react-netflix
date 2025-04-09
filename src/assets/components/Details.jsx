import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const MovieDetails = () => {
  const { movieId } = useParams(); // Prende il movieId dalla URL
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState("1");

  const OMDB_API_KEY = "339d3413"; // Sostituisci con la tua API Key
  const OMDB_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movieId}`;

  const COMMENTS_URL = `https://striveschool-api.herokuapp.com/api/comments/${movieId}`;
  const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y0ZWJhNzgxYjBkZDAwMTUwYTdhM2UiLCJpYXQiOjE3NDQyMDk4MjYsImV4cCI6MTc0NTQxOTQyNn0.dQPLbpvuTLXrohSc8CePEr1AC2qwaNPwvK9bL3OfOAs"; // Sostituisci con il tuo token di autenticazione

  useEffect(() => {
    setIsLoading(true);
    fetch(OMDB_URL)
      .then((response) => {
        if (!response.ok) {
          setError("Errore nel recupero dei dettagli del film");
          return;
        }
        return response.json();
      })
      .then((movieData) => {
        setMovie(movieData);
        setError(null);
        fetch(COMMENTS_URL, {
          headers: {
            Authorization: AUTH_TOKEN,
          },
        })
          .then((commentsRes) => {
            if (!commentsRes.ok) {
              setError("Errore nel recupero dei commenti");
              return;
            }
            return commentsRes.json();
          })
          .then((commentsData) => {
            setComments(commentsData);
            setIsLoading(false);
          })
          .catch(() => {
            setError("Errore durante il recupero dei commenti");
            setIsLoading(false);
          });
      })
      .catch(() => {
        setError("Errore durante il recupero dei dettagli del film");
        setIsLoading(false);
      });
  }, [movieId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentData = {
      comment: newComment,
      rate: rating,
      elementId: movieId,
    };

    fetch(COMMENTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify(newCommentData),
    })
      .then((response) => {
        if (!response.ok) {
          setError("Errore nell'invio del commento");
          return;
        }
        return response.json();
      })
      .then((updatedComments) => {
        setComments(updatedComments);
        setNewComment("");
        setRating("1");
      })
      .catch(() => {
        setError("Errore nell'invio del commento");
      });
  };

  if (isLoading) return <div className="m-5">Caricamento in corso...</div>;
  if (error) return <Alert variant="danger" className="m-5">{error}</Alert>;

  return (
    <main className='bg-dark d-flex flex-column min-vh-100'>
    <Container className="my-4 bg-info py-5 my-2">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>
                <strong>Anno:</strong> {movie.Year}<br />
                <strong>Genere:</strong> {movie.Genre}<br />
                <strong>Trama:</strong> {movie.Plot}<br />
                <strong>Rating IMDB:</strong> {movie.imdbRating}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <h4>Commenti</h4>
          {comments.length > 0 ? (
            <ul className="list-group">
              {comments.map((comment, i) => (
                <li className="list-group-item" key={i}>
                  <strong>{comment.author}</strong>: {comment.comment} (Rating: {comment.rate})
                </li>
              ))}
            </ul>
          ) : (
            <p>Nessun commento disponibile.</p>
          )}

          {/* Form per inviare nuovi commenti */}
          <h5>Aggiungi un commento:</h5>
          <Form onSubmit={handleCommentSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Commento</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Voto</Form.Label>
              <Form.Control
                as="select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Aggiungi Commento</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </main>
  );
};

export default MovieDetails;
