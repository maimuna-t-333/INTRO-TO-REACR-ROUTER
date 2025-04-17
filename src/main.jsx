import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobile from './Components/Mobile/Mobile.jsx';
import Laptop from './Components/Laptop/Laptop.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PosttDetails from './Components/PosttDetails/PosttDetails.jsx';

const usersPromise=fetch('http://jsonplaceholder.typicode.com/users').then(res=>res.json())


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true, Component:Home},
      {path:'mobiles', Component:Mobile},
      {path:'laptop', Component:Laptop},
      {
        path:'users',
        loader:()=>fetch('http://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:'users2',
        element:<Suspense fallback={<span>Loading...</span>}>
          <Users2 usersPromise={usersPromise}></Users2>

        </Suspense>
      },
      {
        path:'users/:userID',
        loader:({params})=>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        Component:UserDetails,
      },
      {
        path:"posts",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
      },
      {
        path:'/posts/:postID',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        Component:PosttDetails,
      },
    ]
  },
  {
    path:"about",
    element: <div>About me here</div>
  },
  {
    path:"blogs",
    element: <div>All blogs are here</div>
  },
  {
    path:"app",
    Component:App
  },
  {
    path:"/app2",
    element: <App></App>
  },

  {
    path:"*",
    element: <h3>Not found:404</h3>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
