import { useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/MainLayout';
import Home from 'src/pages/Home';
import Blog from 'src/pages/Blog';
import Contact from 'src/pages/Contact';
import FAQ from 'src/pages/FAQ';
import About from 'src/pages/About';
import Destination from 'src/pages/Destination';
import DetailedView from 'src/pages/Destination/DetailedView';
import Transport from 'src/pages/Transport';

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
        { path: 'about-us', element: <About /> },
        {
          path: 'destinations',
          element: <Destination />,
        },
        { path: '/destinations/:id', element: <DetailedView /> },
        { path: '/transport', element: <Transport /> },
      ],
    },
  ]);

  return routes;
};
export default RouteLayout;
