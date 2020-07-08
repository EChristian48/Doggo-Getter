import * as React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='navbar fixed-bottom'>
      <div className='container justify-content-between'>
        <p className='my-0'>Made by: Erick Christian</p>
        <div>
          <a href='https://github.com/EChristian48/Doggo-Getter'>GitHub</a> -{' '}
          <a href='https://www.instagram.com/erick.christian.p/'>Instagram</a> -{' '}
          <a href='https://twitter.com/erickch_'>Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
