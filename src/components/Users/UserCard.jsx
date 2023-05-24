import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
  return (
    <div>
      <Link to={`/users/${user.id}`} className='text-base'>
        {user.name}
      </Link>
    </div>
  )
}

export default UserCard
