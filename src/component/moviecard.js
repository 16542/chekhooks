
import React from 'react'
import { Card } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'

const Moviecard = ({movie}) => {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
   <StarRatingComponent value={movie.rate} />
  </Card.Body>
</Card>
    )
}

export default Moviecard
