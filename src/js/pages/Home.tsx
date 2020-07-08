import * as React from 'react'

import { Link } from 'react-router-dom'

// Custom Components
import { Jumbotron } from '../components/Jumbotron'

const Home: React.FC = () => {
  return (
    <>
      <Jumbotron />

      <div className='container'>
        <div className='row justify-content-center'>
          <Link to='get' className='btn btn-dark'>
            Get your dog now!
          </Link>
        </div>
      </div>
    </>
  )
}

export { Home }