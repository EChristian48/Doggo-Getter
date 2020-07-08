import * as React from 'react'
import { DogCard } from '../components/DogCard'
import { DogModal } from '../components/DogModal'

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
  onNoHandler = async () => {
    // Reset the image
    this.setState({
      currentDogImage: '',
    })

    // Get a new image
    const dogResult = await this.getDog()

    // Set the image
    this.setState({
      currentDogImage: dogResult.message,
    })
  }
  onSaveHandler = () => {}

  /**
   * Get a random dog from the Dog API
   * @return Promise<DogAPIResult>
   */
  async getDog() {
    const result = await fetch('https://dog.ceo/api/breeds/image/random')
    return result.json() as Promise<DogAPIResult>
  }

  async componentDidMount() {
    // Get a random image
    const dogResult = await this.getDog()
    this.setState({
      currentDogImage: dogResult.message,
    })
  }

  render() {
    // Id for modal and the button trigger
    const DOG_MODAL_ID = 'dogModal'

    return (
      <>
        {/* Save Modal */}
        <DogModal id={DOG_MODAL_ID} onSaveHandler={this.onSaveHandler} />

        <div className='container'>
          <div className='row justify-content-center mb-2'>
            <h3>Want this?</h3>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Dog image and buttons */}
              <DogCard
                imageUrl={this.state.currentDogImage}
                onNoHandler={this.onNoHandler}
                modalId={DOG_MODAL_ID}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export { GetDog }
