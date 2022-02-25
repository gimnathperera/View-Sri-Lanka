import { Outlet } from 'react-router-dom';
// import ScrollUpButton from 'react-scroll-up-button';

import Header from 'src/components/common/Header';
import Footer from 'src/components/common/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <ScrollUpButton EasingType='linear' /> */}
    </>
  );
};

export default MainLayout;
