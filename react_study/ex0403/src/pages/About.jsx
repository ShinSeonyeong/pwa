import React from 'react'
import { useParams } from 'react-router-dom'

export default function About() {
  const params = useParams();
  console.log(params)
  return (
    <div>About</div>
  )
}
