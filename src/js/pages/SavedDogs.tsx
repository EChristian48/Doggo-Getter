import * as React from 'react'

// Custom components
import { SavedDogCard } from '../components/SavedDogCard'

class SavedDogs extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <SavedDogCard />
          <SavedDogCard />
          <SavedDogCard />
          <SavedDogCard />
          <SavedDogCard />
          <SavedDogCard />
          <SavedDogCard />
          <SavedDogCard />
          <SavedDogCard />
          <SavedDogCard />
          <SavedDogCard />
          <SavedDogCard />
        </div>
      </div>
    )
  }
}

export { SavedDogs }
