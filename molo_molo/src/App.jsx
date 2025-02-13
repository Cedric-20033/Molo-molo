import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import "./App.css"
import { Navigation } from "./composants/navigation";
import { Home } from "./composants/pages/homes";


const route = createBrowserRouter([
  {
    path : '/',
    element: <Navigation />,
    errorElement : 'erreur',
    children : [
      {
        path : '/',
        element: <Outlet />,
        children: [
          {
            path: '/',
            element: <Home />,
            loader: () => fetch('https://dummyjson.com/products')
          },
          {
            path: ':id',
            element: <div>detail</div>
          }
        ]
      },
      {
        path: '/shop',
        element: <div>'boutique'</div> 
      },
      {
        path: '/epargne',
        element: <div>'epargne'</div> 
      },
      {
        path: '/contact',
        element : <div>'contact'</div> 
      },
      {
        path : '*',
        element: 'page non trouvé'
      }
    ]
  }
])


function App() {

  return <RouterProvider router={route} />

}

export default App
