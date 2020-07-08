import * as React from 'react'

type DogCardProps = {
  imageUrl: string
  onNoHandler: () => void
  onYesHandler: () => void
}

const DogCard: React.FC<DogCardProps> = (props) => {
  let content: JSX.Element
  if (props.imageUrl) {
    content = (
      <img
        className='card-img-top'
        src={props.imageUrl}
        alt='Your doggo candidate.'
      />
    )
  } else {
    content = (
      <div className='row justify-content-center my-4'>
        <div className='spinner-border'></div>
      </div>
    )
  }

  return (
    <div className='card shadow'>
      {content}
      <div className='card-body row'>
        <div className='col-6'>
          <button
            className='btn btn-danger btn-block'
            onClick={props.onNoHandler}
          >
            no.
          </button>
        </div>

        <div className='col-6'>
          <button
            className='btn btn-success btn-block'
            onClick={props.onYesHandler}
          >
            YES!!!
          </button>
        </div>
      </div>
    </div>
  )
}

export { DogCard }
