import React from 'react'
import Approutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
 const router = createBrowserRouter(Approutes)
 return<>
  <RouterProvider router={router}/>
 </>
}

export default App