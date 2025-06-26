import { useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
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
    <Suspense fallback={<img className="animate-spin" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgb4Nz2RvY2RVfU_qpqL8fqQGGgKC3wNwDCADd0qTfhE-24UGyfdaIia-XsArjnr8HlvIL1fzVDwxYI7l26IluluPOC6IJ67kZ5PJmh77n1PjQsz2CLPj4zv0ZSLpuw01mJZSQ1Lmm4Zile/s800/computer_bar5_load.png" />}>
      {/* <button onClick={() => setUser(!user)} className="btn btn-primary">
        《 LOGIN ≒ LOGOUT 》
      </button> */}
      <RouterProvider router={finalRouter} />
    </Suspense>
  );
}

export default AppRouter;
