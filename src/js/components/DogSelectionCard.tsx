import * as React from 'react'

type DogSelectionCardProps = {
  imageUrl: string
  onNoHandler: () => void
  modalId: string
}

const DogSelectionCard: React.FC<DogSelectionCardProps> = (props) => {
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
            data-toggle='modal'
            data-target={`#${props.modalId}`}
          >
            YES!!!
          </button>
        </div>
      </div>
    </div>
  )
}

export { DogSelectionCard }
