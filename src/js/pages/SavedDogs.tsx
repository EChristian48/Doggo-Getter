import * as React from 'react'

// Custom components
import { SavedDogCard } from '../components/SavedDogCard'

import { DoggoEntry, getDBInstance } from '../database'

const SavedDogs: React.FC = () => {
  const [dogs, setDogs] = React.useState<DoggoEntry[]>([])

  const getSavedDogs = async () => {
    const db = await getDBInstance()
    const dogs = await db.getAll('Doggos')

    setDogs(dogs)
  }

  React.useEffect(() => {
    getSavedDogs()
  }, [])

  console.log('hai')

  return (
    <div className='container'>
      <div className='row'>
        {dogs.map((dog) => {
          return <SavedDogCard key={dog.imageUrl} dog={dog} />
        })}
      </div>
    </div>
  )
}

export { SavedDogs }
