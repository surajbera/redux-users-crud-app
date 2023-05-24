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

  if (isLoading) return <div className='max-w-5xl mx-auto px-6'>Loading...</div>
  if (isError) return <div className='max-w-5xl mx-auto px-6'>Error</div>
  if (users.length > 0)
    return (
      <div className='max-w-5xl mx-auto px-6'>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    )
}

export default Users
