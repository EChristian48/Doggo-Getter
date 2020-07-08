import * as React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

// Custom Components
import { Navbar } from './components/Navbar/Navbar'
import { NavItem } from './components/Navbar/NavItem'
import { Jumbotron } from './components/Jumbotron'

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
            <Jumbotron />
          </Route>

          <Route path='/get'>
            <Jumbotron />
          </Route>

          <Route path='/saved'>
            <Jumbotron />
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}

export { App }
