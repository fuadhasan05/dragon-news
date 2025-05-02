import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    element: <Home></Home>,
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json"),
                },
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
               {
                path: "/auth/login",
                element: <Login></Login>,
               },
               {
                path: "/auth/register",
                element: <Register></Register>
               },
            ]
        },
        {
            path: "/news-details/:id",
            element: <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader: () => fetch("/news.json"),
        }
    ]
);

export default router;