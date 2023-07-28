import './styles/UserCard.css'

const UserCard = ( {user, deleteUserById, setUpdateInfo, handleOpenForm } ) => {

  const handleDelete = () => {
    deleteUserById('users', user.id )
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpenForm()

  }
    
  return (
    <article className='user'>
      <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
      <hr className='user__line' />
      <ul className='user__information'>
        <li className='user__item'>
          <span className='user__label'>Email</span>
          <span className='user__value'><i className='bx bx-envelope user__icon' >{user.email}</i></span>
        </li>
        <li className='user__item'>
          <span className='user__label'>Birthday</span> 
          <span className='user__value'><i className='bx bx-gift user__icon' >{user.birthday}</i></span>
        </li>
      </ul>
      <hr className='user__line' />
      <footer className='user__footer'>
        <button onClick={handleDelete} className='trash'><i className='bx bx-trash'></i></button>
        <button onClick={handleUpdate} className='edit'><i className='bx bx-edit-alt' ></i></button>
      </footer>
    </article>
  )
}

export default UserCard