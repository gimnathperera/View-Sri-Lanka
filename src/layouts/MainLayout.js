import { Outlet } from 'react-router-dom';
import Header from 'src/components/common/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
