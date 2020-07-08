import * as React from 'react'

class SavedDogs extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg'
                alt='Fox'
              />
              <div className='card-body'>
                <h5>Fox go Floof</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { SavedDogs }
