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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/layout";
import LandingPage from "./pages/landingpage";
import Login from "./pages/loginpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ Wrap all pages with Layout (Header stays)
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <Login /> },
    ],
  },
  { path: "*", element: <p>Page Not Found</p> }, // Catch-all route
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
