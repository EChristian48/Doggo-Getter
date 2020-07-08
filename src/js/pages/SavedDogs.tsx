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
                className='card-img-top'
              />
              <div className='card-body'>
                <h5 className='card-title'>Fox go Floof</h5>
                <button className='btn btn-danger'>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { SavedDogs }
