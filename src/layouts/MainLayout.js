import { Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import Header from 'src/components/common/Header';
import Footer from 'src/components/common/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop showUnder={160}>
        <span>UP</span>
      </ScrollToTop>
    </>
  );
};

export default MainLayout;
