/* libraries */
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

/* utilities */
import { selectUsers } from 'src/features/users/usersSlice'
import { getUsers } from 'src/features/users/usersThunks'

const Users = () => {
  const dispatch = useDispatch()

  const users = useSelector(selectUsers)
  const isLoading = useSelector((state) => state.users.isLoading)
  const isError = useSelector((state) => state.users.isError)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  if (users.length > 0)
    return users.map((user) => (
      <div key={user.id}>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </div>
    ))
}

export default Users
