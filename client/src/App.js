import logo from './logo.svg';
import './App.css';
import * as React from "react";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Login_Student from './pages/Login_Student';
import Login_Admin from './pages/Login_Admin';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./style.scss"
const Layout = () =>{
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
         path: "/",
         element: <Home/>
      },
    ]
  },
  {
    path: "/loginstudent",
    element: <Login_Student/>
    
  },
  {
    path: "/loginadmin",
    element: <Login_Admin/>
    
  },
  
]);
function App() {
  return (
    <div className="App">
      <div className="container">  
      <RouterProvider router ={router} />
      
      </div>
    </div>
  );
}

export default App;
