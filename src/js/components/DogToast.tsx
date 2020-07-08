import * as React from 'react'

type DogToastProps = {
  id: string
}

const DogToast: React.FC<DogToastProps> = (props) => {
  return (
    <div className='toast hide' id={props.id}>
      <div className='toast-body'>{props.children}</div>
    </div>
  )
}

export { DogToast }
