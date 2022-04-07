import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {

    const params = useParams()

    const [filme, setFilme] = useState({})

    useEffect(() => {
  
      apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
        setFilme(resultado.data)
  
      })
    }, [])

  return (
    <div>
        <h1><b>{filme.title}</b></h1>
    </div>
  )
}

export default FilmesDetalhes