import Main from "../layouts/Main"
import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            }
        ]
    },
    {
        path: '*',
        element: <div>Error</div>
    }
])

export default router;