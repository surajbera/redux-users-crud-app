/* libraries */
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'

/* utilities */
import { toggleTheme, selectTheme } from 'src/features/theme/themeSlice'

const Header = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    navigate(`/search?q=${searchTerm}`)
    setSearchTerm('')
  }

  return (
    <header className='shadow-md py-6 bg-white dark:bg-slate-700'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='flex flex-col gap-3 littleSmall:flex-row littleSmall:justify-between'>
          <div className='logo text-center'>
            <Link to='/' className='text-2xl font-bold italic hover:underline dark:text-white'>
              Users App
            </Link>
          </div>
          <div className='header-right-wrap flex gap-6 items-center justify-center'>
            <div className='search-bar-wrap'>
              <form onSubmit={onSubmit}>
                <input
                  type='text'
                  placeholder='Search...'
                  value={searchTerm}
                  onChange={handleChange}
                  className='shadow-md h-16 px-3 outline-none text-slate-500 focus:shadow-lg transition w-25 rounded-md text-sm dark:bg-slate-400 dark:text-white'
                />
              </form>
            </div>
            <div
              className='theme-switch cursor-pointer'
              onClick={() => {
                dispatch(toggleTheme())
              }}
            >
              {theme === 'light' ? (
                <BiSun className='text-2xl text-slate-500 dark:text-white' />
              ) : (
                <BiMoon className='text-2xl text-slate-500 dark:text-white' />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
