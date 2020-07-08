import * as React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='navbar fixed-bottom'>
      <div className='container justify-content-between'>
        <p className='my-0'>
          ❤️ <a href='https://dog.ceo/dog-api/'>Dog API</a>
        </p>

        <p className='my-0'>
          <a href='https://github.com/EChristian48/Doggo-Getter'>GitHub</a> -{' '}
          <a href='https://www.instagram.com/erick.christian.p/'>Instagram</a> -{' '}
          <a href='https://twitter.com/erickch_'>Twitter</a>
        </p>
      </div>
    </footer>
  )
}

export { Footer }
