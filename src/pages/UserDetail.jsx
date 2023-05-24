/* libraries */
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

/* utilities */
import { getUser } from 'src/features/users/usersThunks'
import { selectSelectedUser } from 'src/features/users/usersSlice'

const UserDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(selectSelectedUser)
  const isLoading = useSelector((state) => state.users.isLoading)
  const isError = useSelector((state) => state.users.isError)

  useEffect(() => {
    dispatch(getUser(id))
  }, [dispatch, id])

  if (isLoading) return 'Loading...'
  if (isError) return 'Error...'
  if (user)
    return (
      <div>
        <div>{user.name}</div>
        <Link to='/users'>Back To Home</Link>
      </div>
    )
}

export default UserDetail
