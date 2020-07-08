import * as React from 'react'

import { DoggoEntry, getDBInstance } from '../database'

type SavedDogCard = {
  dog: DoggoEntry
}

const SavedDogCard: React.FC<SavedDogCard> = (props) => {
  const deleteMe = async (imageUrl: string) => {
    const db = await getDBInstance()
    await db.delete('Doggos', imageUrl)

    location.reload()
  }

  return (
    <div className='col-12 col-md-6 col-lg-4 my-2'>
      <div className='card'>
        <img
          src={props.dog.imageUrl}
          alt={props.dog.name}
          className='card-img-top'
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.dog.name}</h5>
          <button
            className='btn btn-danger'
            onClick={() => deleteMe(props.dog.imageUrl)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export { SavedDogCard }
