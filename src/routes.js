import { useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/MainLayout';
import Home from 'src/pages/Home';
import Blog from 'src/pages/Blog';
import Contact from 'src/pages/Contact';
import FAQ from 'src/pages/FAQ';
import About from 'src/pages/About';
import Destination from 'src/pages/Destination';
import DestinationDetailedView from 'src/pages/Destination/DetailedView';
import Transport from 'src/pages/Transport';
import TourPackage from 'src/pages/TourPackage';
import TourDetailedView from 'src/pages/TourPackage/DetailedView';
import SpecialPackage from 'src/pages/SpecialPackage';

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
        { path: '/destinations/:id', element: <DestinationDetailedView /> },
        { path: '/transport', element: <Transport /> },
        { path: '/tours', element: <TourPackage /> },
        { path: '/tours/:id', element: <TourDetailedView /> },
        { path: '/special-packages', element: <SpecialPackage /> },

      ],
    },
  ]);

  return routes;
};
export default RouteLayout;
