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
    <header className='shadow-md py-4'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='flex justify-between items-center'>
          <div className='logo'>
            <Link to='/' className='text-2xl font-bold italic hover:underline'>
              Users App
            </Link>
          </div>
          <div className='search-bar-wrap'>
            <form onSubmit={onSubmit}>
              <input
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={handleChange}
                className='shadow h-16 px-3 outline-none text-slate-500 focus:shadow-md transition w-25 rounded-md text-sm'
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
