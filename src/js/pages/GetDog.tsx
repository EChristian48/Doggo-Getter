import * as React from 'react'
import { DogCard } from '../components/DogCard/DogCard'

class GetDog extends React.Component {
  onNoHandler = () => {}
  onYesHandler = () => {}
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center mb-2'>
          <h3>Want this?</h3>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6 col-12'>
            <DogCard
              imageUrl='https://img-comment-fun.9cache.com/media/ag5e59g/aXP49Qo5_700w_0.jpg'
              onNoHandler={this.onNoHandler}
              onYesHandler={this.onYesHandler}
            />
          </div>
        </div>
      </div>
    )
  }
}

export { GetDog }
