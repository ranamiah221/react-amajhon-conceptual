import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Statistics from "../pages/Statistics/Statistics";


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

            },
            {
                path:'/dashboard',
                element:<DashboardLayout></DashboardLayout>,
                children:[
                    {
                        path:'/dashboard/dashboard',
                        element:<Dashboard></Dashboard>
                    },
                    {
                        path:'/dashboard/statistics',
                        element:<Statistics></Statistics>
                    }
                ]
            }

        ]
    }
])

export default Router;