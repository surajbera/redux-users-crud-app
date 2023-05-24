import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
  const gender = user.gender.toLowerCase()

  return (
    <div
      className={`shadow-md rounded-md p-4 ${gender === 'male' ? 'bg-blue-100' : 'bg-pink-100'}`}
    >
      <div className='flex items-center'>
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
    </div>
  )
}

export default UserCard
