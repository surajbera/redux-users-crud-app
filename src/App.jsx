/* libraries */
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

/* components */
import { UserList } from 'src/components/Users'
import { UserDetail } from 'src/components/Users'
import { RedirectToUsers } from 'src/components/Users'

/* styles */
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/users' element={<UserList />} />
          <Route exact path='/users/:id' element={<UserDetail />} />
          <Route path='/' element={<RedirectToUsers />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
