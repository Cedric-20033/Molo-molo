import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import "./App.css"
import { Navigation } from "./composants/navigation";
import { Home } from "./composants/pages/homes";
import { ProductProvider } from "./composants/context/ProductContext";
import { Shop } from "./composants/pages/shop";

const route = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: 'erreur',
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: ':id',
        element: <div>detail</div>
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/epargne',
        element: <div>'epargne'</div>
      },
      {
        path: '/contact',
        element: <div>'contact'</div>
      },
      {
        path: '*',
        element: 'page non trouvé'
      }
    ]
  }
])


function App() {

  return (
    <ProductProvider> {/* fournir les données de produit a tous les composants */}
      <RouterProvider router={route} />
    </ProductProvider>
  )

}

export default App
