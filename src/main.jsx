import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import AllProducts from './components/AllProducts/AllProducts';
import Laptops from './components/Laptops/Laptops';
import SmartWatches from './components/SmartWatches/SmartWatches';
import Phones from './components/Phones/Phones';
import MacBooks from './components/MacBooks/MacBooks';
import Accessories from './components/Accessories/Accessories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        children:[
          {
            path:'/allProducts',
            element:<AllProducts></AllProducts>
          },
          {
            path:'/laptops',
            element:<Laptops></Laptops>
          },
          {
            path:'/smartWatches',
            element:<SmartWatches></SmartWatches>
          },
          {
            path:'/phones',
            element:<Phones></Phones>
          },
          {
            path:'/macBooks',
            element:<MacBooks></MacBooks>
          },
          {
            path:'/accessories',
            element:<Accessories></Accessories>
          }
        ]
      },
      {
         path:'/statistics',
         element:<Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
