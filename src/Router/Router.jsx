import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products',
                element:<Products></Products>,
                loader:()=>fetch('https://dummyjson.com/products')
            },
            {
                path:"/products/:id",
                element:<ProductDetails></ProductDetails>,
                loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)

            }

        ]
    }
])

export default Router;