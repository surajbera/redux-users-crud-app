/* libraries */
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

/* utilities */
import { getUsers } from 'src/features/users/usersThunks'
import { selectUsers } from 'src/features/users/usersSlice'

/* components */
import { UserCard } from 'src/components'

const Search = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const isLoading = useSelector((state) => state.users.isLoading)
  const isError = useSelector((state) => state.users.isError)
  const [queryString] = useSearchParams()
  const searchTerm = queryString.get('q')

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (isLoading) return <div className='max-w-5xl mx-auto px-6 text-base'>Loading...</div>
  if (isError) return <div className='max-w-5xl mx-auto px-6 text-base'>Error...</div>

  if (searchTerm === null) {
    return <div className='max-w-5xl mx-auto px-6 text-base'>Please enter a search term...</div>
  }

  if (users) {
    const searchResults = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })

    if (searchResults.length > 0) {
      return (
        <div className='max-w-5xl mx-auto px-6'>
          <div className='grid grid-cols-3 gap-4'>
            {searchResults.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      )
    } else {
      return <div className='max-w-5xl mx-auto px-6 text-base'>No search results...</div>
    }
  } else {
    return <div className='max-w-5xl mx-auto px-6 text-base'>No users...</div>
  }
}

export default Search
