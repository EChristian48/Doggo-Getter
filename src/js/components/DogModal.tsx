import * as React from 'react'

type DogModalProps = {
  id: string
  onSaveHandler: (name: string) => void
}

type DogModalState = {
  name: string
}

class DogModal extends React.Component<DogModalProps, DogModalState> {
  state: DogModalState = {
    name: '',
  }

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    })
  }

  /**
   * Reset current state
   * @return void
   */
  resetState = () => {
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <div className='modal fade' id={this.props.id}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            {/* Modal Header */}
            <div className='modal-header'>
              <h5 className='modal-title'>Give it a name</h5>
              <button className='close' data-dismiss='modal'>
                <span>&times;</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className='modal-body'>
              <input
                className='form-control'
                type='text'
                name='name'
                id='name'
                placeholder='Doggo name...'
                value={this.state.name}
                onChange={this.onChangeHandler}
              />
            </div>

            {/* Modal Footer */}
            <div className='modal-footer'>
              {/* Cancel Button */}
              <button
                className='btn btn-secondary'
                data-dismiss='modal'
                onClick={this.resetState}
              >
                nah.
              </button>

              {/* Save Button */}
              <button
                className='btn btn-primary'
                onClick={() => this.props.onSaveHandler(this.state.name)}
              >
                yes pls
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { DogModal }
