import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Roles from './components/Roles';
import Users from './components/Users';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Roles /></App>,
  },
  {
    path: "/roles",
    element:  <App><Roles /></App>,
  },
  {
    path: "/users",
    element: <App><Users /></App>,
  },
]);


root.render(
  <React.StrictMode>
    	<Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

