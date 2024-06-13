import React from 'react'
import { Link } from 'react-router-dom'

//Importo Link y cambio el ancla por el link para poder redireccionar desde Welcome a Paint

export const Welcome = ({ ficha }) => {
  return (
    <>
      <h1>instrumento de evaluación</h1>
      <h2>Ficha: {ficha} </h2>
      <Link to='/paint'>Ingresar</Link>
    </>
  )
}
