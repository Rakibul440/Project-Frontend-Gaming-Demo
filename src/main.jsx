import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Card from "./pages/Card.jsx"
import Shop from "./pages/Shop.jsx"
import Game from "./pages/Game.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path : "/login",
        element : <Login />
      },
      {
        path: "/card",
        element: <Card />
      },
      {
        path : "/game",
        element : <Game />
      },
      {
        path: "/shop",
        element: <Shop />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
