import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from '../pages/Login'
import App from '../App'
import SidebarMenu from "../components/SidebarMenu";
import PostContainer from "../components/PostContainer";
import SidebarContact from "../components/SidebarContact";
import useUserStore from "../store/user-store";


const guestRouter = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '*', element: <Navigate to='/' /> },
])


const userRouter = createBrowserRouter([
    {
        path: '/', element: <App />,
        children: [
            {
                path: '', element:
                    <div>
                        <SidebarMenu />
                        <PostContainer />
                        <SidebarContact />
                    </div>
            },
            { path: 'friends', element: <p>Friends Pages</p> },
            { path: '*', element: <Navigate  to='/'/> },
        ]

    },
])

export default function AppRouter() {
    const user = useUserStore((state)=> state.user)
    const finalRouter = user ? userRouter : guestRouter
    return (
        <RouterProvider router={finalRouter} />
    )
}