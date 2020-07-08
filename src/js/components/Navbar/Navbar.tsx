import * as React from 'react'

const Navbar: React.FC = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-transparent container'>
      <a className='navbar-brand' href='/#/home'>
        <img
          src='https://upload.wikimedia.org/wikipedia/en/6/63/Feels_good_man.jpg'
          width={50}
          height={50}
          alt='Pepe the Frog'
          loading='lazy'
        />
      </a>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarContent'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarContent'>
        <ul className='navbar-nav mr-auto'>{props.children}</ul>
      </div>
    </nav>
  )
}

export { Navbar }
