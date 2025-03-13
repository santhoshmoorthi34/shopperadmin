import React from 'react'
import './admi.css'
import Sidebar from '../sidebar/sidebar'
import { Route, Routes } from 'react-router-dom'
import Addproduct from '../addproduct/addproduct'
import Liastproduct from '../listproduct/liastproduct'


const Admin = () => {
  return (
    <div className='admin'>
<Sidebar/>
<Routes>
  <Route path='/addproduct' element={<Addproduct/>}/>
  <Route path='/listproduct' element={<Liastproduct/>}/>

</Routes>

    </div>
  )
}

export default Admin
