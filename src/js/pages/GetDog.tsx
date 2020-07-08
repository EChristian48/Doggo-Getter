import * as React from 'react'
import { DogCard } from '../components/DogCard'

type GetDogState = {
  currentDogImage: string
}

interface DogAPIResult {
  message: string
  status: string
}

class GetDog extends React.Component<{}, GetDogState> {
  state: GetDogState = {
    currentDogImage: '',
  }
  onNoHandler = () => {}
  onYesHandler = () => {}

  async componentDidMount() {
    const result = await fetch('https://dog.ceo/api/breeds/image/random')
    const resultJSON: DogAPIResult = await result.json()

    this.setState({
      currentDogImage: resultJSON.message,
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center mb-2'>
          <h3>Want this?</h3>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6 col-12'>
            <DogCard
              imageUrl={this.state.currentDogImage}
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
