import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Edit from './Edit'
import Unit from './Unit'
const App = () => (
  <Router>
    <div className='app-container'>
      {/* routing what files display on different url paths */}
      <Route exact path='/' component={Home} />
      <Route path='/edit' component={Edit} />
      <Route path='/unit' component={Unit} />
    </div>
  </Router>
)

export default App;
