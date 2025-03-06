// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import Root from './pages/landingpage';
// // import LoginForm from './Components/LoginForm';



// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Root />,
// //     children: [
// //       {
// //         path: '/',
// //         element: <p>I am Child element</p>,
// //       },

// //       {
// //         path: "login",
// //         element: <LoginForm />
// //       },

// //       {
// //         path: '*',
// //         element: <p>Something went Wrong</p>
// //       }
// //     ],
// //   },
// // ]);

// // function App() {
// //   return <RouterProvider router={router} />;
// // }

// // export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LandingPage from "./pages/landingpage";
// import Login from "./pages/loginpage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "*",
//     element: <p>Page Not Found</p>,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/layout";
import Landingpage from "./pages/landingpage";
import Login from "./pages/loginpage";
import Signup from "./pages/signuppage";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/Profile";
function App() {
    const authContext = useContext(AuthContext);
    console.log("AuthContext inside App:", authContext);  // ✅ Debugging log

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Landingpage />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />

            </Route>
        </Routes>
    );
}

export default App;
