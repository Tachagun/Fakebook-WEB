import { useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import loadingIcon from "../assets/loading.svg";
// import Friend from "../pages/Friend";
// import Profile from "../pages/Profile";
// import Login from "../pages/Login";
// import Home from "../pages/Home";

const Login = lazy(() => import("../pages/Login"));
const Profile = lazy(() => import("../pages/Profile"));
const Home = lazy(() => import("../pages/Home"));
const Friend = lazy(() => import("../pages/Friend"));

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/ads", element: <p>Advertising</p> },
  { path: "*", element: <Navigate to="/" replace /> },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="text-4xl py-4 border">Header</div>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "friends", element: <Friend /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

function AppRouter() {
  let user = null;
  // let user = "andy";
  // const [user, setUser] = useState(false);
  const finalRouter = user ? userRouter : guestRouter;

  return (
    // <Suspense fallback={<p className="text-4xl">〘 LOADING... 〙</p>}>
    <Suspense fallback={<img className="animate-spin w-1/5 h-1/5 m-auto mt-70" src={loadingIcon} />}>
      {/* <button onClick={() => setUser(!user)} className="btn btn-primary">
        《 LOGIN ≒ LOGOUT 》
      </button> */}
      <RouterProvider router={finalRouter} />
    </Suspense>
  );
}

export default AppRouter;
