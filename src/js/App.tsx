import * as React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

// Custom Components
import { Navbar } from './components/Navbar/Navbar'
import { NavItem } from './components/Navbar/NavItem'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { GetDog } from './pages/GetDog'
import { SavedDogs } from './pages/SavedDogs'

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navbar>
          <NavItem href='home'>Home</NavItem>
          <NavItem href='get'>Get Dog</NavItem>
          <NavItem href='saved'>Your Dog</NavItem>
        </Navbar>

        <Switch>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/get'>
            <GetDog />
          </Route>

          <Route path='/saved'>
            <SavedDogs />
          </Route>
        </Switch>

        <Footer />
      </HashRouter>
    )
  }
}

export { App }
