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

  if (isLoading)
    return <div className='max-w-5xl mx-auto px-6 text-base dark:text-white'>Loading...</div>
  if (isError)
    return <div className='max-w-5xl mx-auto px-6 text-base dark:text-white'>Error...</div>
  if (user)
    return (
      <div className='max-w-5xl mx-auto px-6'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='px-6 py-4'>
            <div className='flex items-center my-5'>
              <div className='mr-6 flex-shrink-0'>
                <img src={user.avatar} alt='' className='rounded-full w-7 h-7' />
              </div>
              <div className='ui-break-words'>
                <div>
                  <Link to={`/users/${user.id}`} className='text-base hover:underline font-600'>
                    {user.name}
                  </Link>
                </div>
                <div className='text-sm'>{user.email}</div>
              </div>
            </div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-6 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              {user.gender}
            </span>
            <Link
              to='/'
              className='inline-block bg-gray-200 rounded-full px-6 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:underline'
            >
              Back To Users
            </Link>
          </div>
        </div>
      </div>
    )
}

export default UserDetail
