// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Custom CSS
import '../css/style.css'

// React
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Components
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
