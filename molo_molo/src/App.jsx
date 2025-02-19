import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import "./App.css"
import { Navigation } from "./composants/navigation";
import { Home } from "./composants/pages/homes";
import { ProductProvider } from "./composants/context/ProductContext";
import { Shop } from "./composants/pages/shop";
import { ErreurFetchProduits } from "./composants/autres/erreurFetchProduits";

const route = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <div>
      <Navigation />
      <ErreurFetchProduits error={'erreur inconnue'}/>
    </div>,
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
        element: <ErreurFetchProduits error={"page non trouvé! la page que vous essayez de contacter n'existe plus, elle a peut-être été déplacée ou suprimée"} />
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
