import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Edit from './Edit'
import Unit from './Unit'
import Misc from './Misc'

function App() {
  return (
    <Router>
    <div className='app-container'>
      {/* routing what files display on different url paths */}
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/unit' element={<Unit/>} />
        <Route path='/misc' element={<Misc/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
