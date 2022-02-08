import { useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/MainLayout';
import Home from 'src/pages/Home';
import Blog from 'src/pages/Blog';
import Contact from 'src/pages/Contact';
import FAQ from 'src/pages/FAQ';

const RouteLayout = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'blog', element: <Blog /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faq', element: <FAQ /> },
      ],
    },
  ]);

  return routes;
};
export default RouteLayout;
