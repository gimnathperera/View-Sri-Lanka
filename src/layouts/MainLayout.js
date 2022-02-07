import { Outlet } from 'react-router-dom';
import Header from 'src/components/common/Header';
import Footer from 'src/components/common/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
