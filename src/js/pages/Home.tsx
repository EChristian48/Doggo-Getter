import * as React from 'react'

// Custom Components
import { Jumbotron } from '../components/Jumbotron'

const Home: React.FC = () => {
  return (
    <>
      <Jumbotron />
      <div className='container'>
        <div className='row justify-content-center'>
          <button className='btn btn-dark'>Get your dog now!</button>
        </div>
      </div>
    </>
  )
}

export { Home }
