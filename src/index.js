import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import Layout from './components/Layout';
import About from './page/About';
import Contact from './page/contact';
import User from './page/user';
import ErrorPage from './components/ErrorPage';
import { Counter } from './features/counter/Counter';
import { UseState } from './app/hooks/use-state/UseState';
import { UseEffect } from './app/hooks/use-effect/UseEffect';
import Home from './page/Home';
import UserList from './page/user/UserList';
import UseMemo from './app/hooks/memo'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        path: "",
        element: <Home />,
        // loader: teamLoader,
      },
      {
        path: "use-effect",
        element: <UseEffect />,
        // loader: teamLoader,
      },
      {
        path: "use-state",
        element: <UseState />,
        // loader: teamLoader,
      },
      {
        path: "use-memo",
        element: <UseMemo />,
        // loader: teamLoader,
      },
      {
        path: "about",
        element: <About />,
        // loader: teamLoader,
      },
      {
        path: "contact",
        element: <Contact />,
        // loader: teamLoader,
      },
      {
        path: "user-list",
        element: <UserList />,
        errorElement: <ErrorPage />,
        // loader: teamLoader,
      },

      {
        path: "user",
        element: <User />,
        errorElement: <ErrorPage />,
        // loader: teamLoader,
      },
      
      {
        path: "user/:userid",
        element: <User />,
        errorElement: <ErrorPage />,
        // loader: teamLoader,
      },
      {
        path: "counter",
        element: <Counter />,
      
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
