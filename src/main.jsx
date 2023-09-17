import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

// TailwindCSS
import "./assets/tailwind.css";

// Routes
import { Home } from "./routes/Home";
import { Projects } from "./routes/Projects";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
      errorElement: <h1>Error</h1>
  },
  {
    path: "/proyectos",
    element: <Projects />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<RouterProvider router={router}/>
);
