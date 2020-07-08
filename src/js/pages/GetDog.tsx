import * as React from 'react'

class GetDog extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center mb-2'>
          <h3>Want this?</h3>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6 col-12'>
            <div className='card shadow'>
              <img
                className='card-img-top'
                src='https://img-comment-fun.9cache.com/media/ag5e59g/aXP49Qo5_700w_0.jpg'
                alt='Derp Husky'
              />
              <div className='card-body row'>
                <div className='col-6'>
                  <button className='btn btn-danger btn-block'>no.</button>
                </div>

                <div className='col-6'>
                  <button className='btn btn-success btn-block'>YES!!!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { GetDog }
