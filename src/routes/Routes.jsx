import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";


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
    ]
);

export default router;