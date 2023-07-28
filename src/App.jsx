
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)  

  const baseUrl = 'https://users-crud.academlo.tech/'
  const path = 'users'

  const [ 
    users, 
    getUsers, 
    createNewUser, 
    deleteUserById, 
    updateUser 
  ] = useFetch(baseUrl,setCloseForm)

  useEffect(() => {
    getUsers(path)
  }, [])  

  console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
   <div> 
    <div className='main-title'>
      <h1 className='main-header'>Users</h1>
      <button onClick={handleOpenForm} className='formuser__main__btn'>Add new user</button>
    </div>
    <FormUser
      createNewUser={createNewUser}
      updateInfo = {updateInfo}
      updateUser = {updateUser}
      setUpdateInfo = {setUpdateInfo}
      closeForm={closeForm}
      setCloseForm = {setCloseForm}
    />
    <div className='main-user-container'>
      {
        users?.map(user => (
          <UserCard
          key = {user.id}
          user = {user}
          deleteUserById = {deleteUserById}
          setUpdateInfo = {setUpdateInfo}
          handleOpenForm = {handleOpenForm}
          />
        ))
      }
    </div>
   </div>
  )
}

export default App
