import * as React from 'react'

import { Link } from 'react-router-dom'

// Custom Components
import { Jumbotron } from '../components/Jumbotron'

const Home: React.FC = () => {
  return (
    <>
      <Jumbotron />

      <div className='container'>
        <div className='row mb-4 bg-dark rounded pt-2'>
          <div className='col text-white'>
            <p>
              This is an unfinished project to satisfy my graduation in a
              bootcamp.
            </p>
            <p>Thank you for reading.</p>
            <p>
              Also thanks to <a href='https://dog.ceo/dog-api/'>Dog API</a> team
              for their creative work (IDK, just thanks dude)
            </p>
          </div>
        </div>
        <div className='row justify-content-center'>
          <Link to='get' className='btn btn-dark'>
            Get your dog now! (just a photo)
          </Link>
        </div>
      </div>
    </>
  )
}

export { Home }
