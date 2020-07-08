import * as React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

// Custom Components
import { Navbar } from './components/Navbar/Navbar'
import { NavItem } from './components/Navbar/NavItem'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

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
            <h1>Get</h1>
          </Route>

          <Route path='/saved'>
            <h1>Saved</h1>
          </Route>
        </Switch>

        <Footer />
      </HashRouter>
    )
  }
}

export { App }
