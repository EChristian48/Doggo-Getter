import * as React from 'react'

// jQuery
import * as $ from 'jquery'

// Custom Components
import { DogCard } from '../components/DogCard'
import { DogModal } from '../components/DogModal'
import { DogToast } from '../components/DogToast'

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

// Constants
// TODO: Move to another file
const DOG_MODAL_ID = 'dogModal'
const FAILED_TOAST_ID = 'failedToast'
const SUCCESS_TOAST_ID = 'successToast'

class GetDog extends React.Component<{}, GetDogState> {
  state: GetDogState = {
    currentDogImage: '',
  }
  failedToast: JQuery<HTMLElement>
  successToast: JQuery<HTMLElement>

  getNewDog = async () => {
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
      // Show toast and return
      this.failedToast.toast('show')
      return
    }

    this.successToast.toast('show')

    const db = await getDBInstance()
    // Add the entry to the database
    // or "Doggobase" as I call it
    db.put('Doggos', {
      imageUrl: this.state.currentDogImage,
      name: name,
    })
    // Close the modal
    $(`#${DOG_MODAL_ID}`).modal('hide')

    // The name says it
    this.getNewDog()
  }

  /**
   * Get a random dog from the Dog API
   * @return DogAPIResult
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

    // Register the toast
    this.failedToast = $(`#${FAILED_TOAST_ID}`).toast({ delay: 1500 })
    this.successToast = $(`#${SUCCESS_TOAST_ID}`).toast({ delay: 1500 })
  }

  render() {
    return (
      <>
        {/* Save Modal */}
        <DogModal id={DOG_MODAL_ID} onSaveHandler={this.onSaveHandler}>
          <DogToast id={FAILED_TOAST_ID}>Sorry, the name looks weird.</DogToast>
        </DogModal>

        <div className='container'>
          <div className='row justify-content-center'>
            <DogToast id={SUCCESS_TOAST_ID}>Looking good, saved.</DogToast>
          </div>

          <div className='row justify-content-center mb-2'>
            <h3>Want this?</h3>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-12'>
              {/* Dog image and buttons */}
              <DogCard
                imageUrl={this.state.currentDogImage}
                onNoHandler={this.getNewDog}
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
