import React from 'react'
import UserTable from '../../components/Admin/UserTable'
import Header from '../../components/Admin/Header'

const UserDetailsPage = () => {
  return (
    <>
        <Header title={"User Details"} />
        <UserTable/>
    </>
  )
}

export default UserDetailsPage