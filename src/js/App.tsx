import * as React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { NavItem } from './components/Navbar/NavItem'
import { Jumbotron } from './components/Jumbotron'

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar>
          <NavItem href='home'>Home</NavItem>
          <NavItem href='get'>Get Dog</NavItem>
          <NavItem href='saved'>Your Dog</NavItem>
        </Navbar>

        <Jumbotron />
      </>
    )
  }
}

export { App }
