import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="text-center mt-4">
      <h2>Sezione non trovata</h2>
      <p>
        Vuoi tornare in <Link to="/">HOME</Link>?
      </p>
      <p>
        Puoi anche utilizzare questo{' '}
        <Button variant="primary" onClick={() => navigate('/')}>
          BUTTON
        </Button>
      </p>
    </div>
  )
}

export default NotFound
