import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

// TailwindCSS
import "./assets/tailwind.css";

// Routes
import { Home } from "./routes/Home";
import { Calificaciones } from "./routes/Calificaciones";
import { Practica3 } from "./routes/Practica3";
import { Practica4 } from "./routes/Practica4";
import { Practica5y6 } from "./routes/Practica5y6";
import { NotFoundPage } from "./components/NotFoundPage";
import { RepasoDOM } from './routes/RepasoDOM';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage></NotFoundPage>
  },
  {
    path: "/practicas/practica3",
    element: <Practica3 />
  },
  {
    path: "/practicas/practica4",
    element: <Practica4 />
  },
  {
    path: "/practicas/practica5&6",
    element: <Practica5y6 />
  },
  {
    path: "/calificaciones",
    element: <Calificaciones />
  },
  {
    path: "/repaso-dom",
    element: <RepasoDOM text="Google.com"/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);
