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
      <ScrollToTop showUnder={160} style={{ zIndex: 1000 }}>
        <img src='https://milosjanda.github.io/react-scroll-up/img/up_arrow_round.png' />
      </ScrollToTop>
    </>
  );
};

export default MainLayout;
