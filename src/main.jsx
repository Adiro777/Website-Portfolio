// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop.jsx';
import Footer from './components/footer.jsx';

import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Resume from './pages/Resume.jsx';

// --- Layout that shows the navbar on every page ---
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className='pt-28'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

// --- PAGES THAT CAN BE ROUTED TO ---
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Projects /> },
      { path: '/resume', element: <Resume /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
], {
  basename: '/Website-Portfolio'  // Added this for GitHub Pages
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);