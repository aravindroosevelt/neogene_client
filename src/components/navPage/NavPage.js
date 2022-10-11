import React from 'react'
import Patients from '../../pages/patients'
import { Route,Routes } from 'react-router-dom'

export default function NavPage() {
  return (
   <Routes>
    <Route path='/patients' element={<Patients/>}/>
   </Routes>
  )
}
