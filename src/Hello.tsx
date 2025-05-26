import React from 'react'
import { Link } from 'react-router-dom'

export default function Hello() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Link to="/about">
        <button>Go to About</button>
      </Link>
    </div>
  )
}
