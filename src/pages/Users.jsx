/* libraries */
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

/* utilities */
import { selectUsers } from 'src/features/users/usersSlice'
import { getUsers } from 'src/features/users/usersThunks'

/* components */
import { UserCard } from 'src/components'

const Users = () => {
  const dispatch = useDispatch()

  const users = useSelector(selectUsers)
  const isLoading = useSelector((state) => state.users.isLoading)
  const isError = useSelector((state) => state.users.isError)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (isLoading)
    return <div className='max-w-5xl mx-auto px-6 text-base dark:text-white'>Loading...</div>
  if (isError) return <div className='max-w-5xl mx-auto px-6 text-base dark:text-white'>Error</div>
  if (users.length > 0)
    return (
      <div className='max-w-5xl mx-auto px-6'>
        <div className='grid gap-4 grid-cols-1 littleSmall:grid-cols-2 md:grid-cols-3'>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
}

export default Users
