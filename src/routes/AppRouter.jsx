import { useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import loadingIcon from "../assets/loading.svg";
import { useUserStore } from "../stores/userStore";
import UserLayout from "../layouts/UserLayout";
// import Friends from "../pages/Friend";
// import Profile from "../pages/Profile";
// import Login from "../pages/Login";
// import Home from "../pages/Home";

const Login = lazy(() => import("../pages/Login"));
const Profile = lazy(() => import("../pages/Profile"));
const Home = lazy(() => import("../pages/Home"));
const Friends = lazy(() => import("../pages/Friends"));

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/ads", element: <p>Advertising</p> },
  { path: "*", element: <Navigate to="/" replace /> },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,   
    children: [
      { index: true, element: <Home /> },
      { path: "friends", element: <Friends /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

function AppRouter() {
  const user = useUserStore(state=>state.user)
  const finalRouter = user ? userRouter : guestRouter;

  return (
    // <Suspense fallback={<img className="animate-spin w-1/5 h-1/5 m-auto mt-70" src={loadingIcon} />}>
    <Suspense>
      <RouterProvider key={user?.id} router={finalRouter} />
    </Suspense>
  );
}

export default AppRouter;
