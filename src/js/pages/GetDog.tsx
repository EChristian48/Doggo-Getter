import * as React from 'react'

// jQuery and Bootstrap
import * as $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Custom Components
import { DogCard } from '../components/DogCard'
import { DogModal } from '../components/DogModal'

// IDB
// TODO: Should just use localStorage
import { getDBInstance } from '../database'

type GetDogState = {
  currentDogImage: string
}

interface DogAPIResult {
  message: string
  status: string
}

const DOG_MODAL_ID = 'dogModal'

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

  onSaveHandler = async (name: string) => {
    if (!name.match(/^[a-z ,.'-]+$/i)) {
      return
    }

    const db = await getDBInstance()
    // Add the entry to the database
    // or "Doggobase" as I call it
    db.put('Doggos', {
      imageUrl: this.state.currentDogImage,
      name: name,
    })

    // Close the modal
    $(`#${DOG_MODAL_ID}`).modal('hide')
  }

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
