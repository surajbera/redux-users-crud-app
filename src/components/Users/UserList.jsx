/* libraries */
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

/* utilities */
import { selectUsers } from 'src/features/users/usersSlice'
import { getUsers } from 'src/features/users/usersThunks'

const UserList = () => {
  const dispatch = useDispatch()

  const users = useSelector(selectUsers)
  const isLoading = useSelector((state) => state.users.isLoading)
  const isError = useSelector((state) => state.users.isError)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return <>{users.length > 1 && users.map((user) => <div key={user.id}>{user.name}</div>)}</>
}

export default UserList
