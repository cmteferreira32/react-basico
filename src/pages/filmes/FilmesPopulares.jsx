import React, { useEffect, useState } from 'react'
import { Row, Card, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {

    apiFilmes.get('movie/popular?language=pt-BR').then(resultado => {
      setFilmes(resultado.data.results)

    })
  }, [])

  return (
    <div>


      <h1><b>Filmes Populares</b></h1>

      <Row>
        {filmes.map(item => (
          <Col md={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path }/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                 <b>{item.original_title}</b> 
                </Card.Text>
                <Card.Text>
                  Popularidade: {item.popularity}
                </Card.Text>
                <Card.Text>
                  Idioma Original: {item.original_language}
                </Card.Text>
                      <Link className="btn btn-danger" to={'/filmes/' + item.id }><b>Assistir</b></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default FilmesPopulares