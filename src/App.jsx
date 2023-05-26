/* libraries */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

/* components */
import { RedirectToUsers } from 'src/components'
import { Header } from 'src/components'
import { useSelector } from 'react-redux'

/* pages */
import { Search } from 'src/pages'
import { Users } from 'src/pages'
import { UserDetail } from 'src/pages'

/* utilities */
import { selectTheme } from 'src/features/theme/themeSlice'

/* styles */
import './App.css'

function App() {
  const theme = useSelector(selectTheme)

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <>
      <Router>
        <Header />
        <main className='py-4'>
          <Routes>
            <Route exact path='/users' element={<Users />} />
            <Route exact path='/users/:id' element={<UserDetail />} />
            <Route exact path='/search' element={<Search />} />
            <Route exact path='/' element={<RedirectToUsers />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
