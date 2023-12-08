import React, { useState } from 'react'
import { days, students, subjects, weeks } from '../data'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import Table from './Table'
import Studentroom from './Studentroom'


export default function Root() {
  const location=useLocation()

  return(
  <div>
    {/* {location.pathname!=='/'?
    <>
    <Studentroom/>
    
     </>
     :''} */}
   
    
     <Outlet/>
    </div>
  )
}
