/* libraries */
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    navigate(`/search?q=${searchTerm}`)
    setSearchTerm('')
  }

  return (
    <header>
      <div className='logo'>
        <Link to='/'>Users App</Link>
      </div>
      <div className='search-bar-wrap'>
        <form onSubmit={onSubmit}>
          <input type='text' placeholder='Search...' value={searchTerm} onChange={handleChange} />
        </form>
      </div>
    </header>
  )
}

export default Header
