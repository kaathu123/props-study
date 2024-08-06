import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Parent from './Parent'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

import Nav from './Nav';


const router=createBrowserRouter([
  {
    path:'/parent',
    element:<Parent/>
  },
  {
    path:'/childone',
    element:<ChildOne/>
  },
  {
    path:'/childtwo',
    element:<ChildTwo/>
  },
  
{
    path:'/nav',
    element:<Nav/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
