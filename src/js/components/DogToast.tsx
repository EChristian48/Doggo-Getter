import * as React from 'react'

const DogToast: React.FC = () => {
  return (
    <div className='toast hide'>
      <div className='toast-header'>
        <strong className='mr-auto'>Bootstrap</strong>
        <small>11 mins ago</small>
        <button type='button' className='ml-2 mb-1 close' data-dismiss='toast'>
          <span>&times;</span>
        </button>
      </div>
      <div className='toast-body'>Hello, world! This is a toast message.</div>
    </div>
  )
}

export { DogToast }
