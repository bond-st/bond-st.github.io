import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Edit from './Edit'
import Unit from './Unit'

function App() {
  return (
    <Router>
    <div className='app-container'>
      {/* routing what files display on different url paths */}
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/unit' element={<Unit/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
