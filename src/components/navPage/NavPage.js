import React from 'react'
import Patients from '../../pages/Patients'
import Patient from '../../pages/Patient'
import { Route,Routes } from 'react-router-dom'
import Tasks from '../../pages/tasks/Tasks'
import Dashboard from '../../pages/dashboard/Dashboard'
import User from '../../pages/user/User'


export default function NavPage() {
  return (
   <Routes>
    <Route path='/patients' element={<Patients/>}/>
    <Route path='/patient/:id' element={<Patient/>}/>
    <Route path='/tasks' element={<Tasks></Tasks>}/>
    <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
    <Route path='/user' element={<User></User>}/>

   </Routes>
  )
}
