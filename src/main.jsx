import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from "./components/Layout/layout"
import Login from "./components/Login/login"
import Register from "./components/Register/register"
import Home from "./components/Home/home"
import Proposal from "./components/Proposal/proposal"
import { Provider } from 'react-redux'
import store from './redux/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path='proposal' element={<Proposal />}></Route>
    </Route>
  )
)


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
