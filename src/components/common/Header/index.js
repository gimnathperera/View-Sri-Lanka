import { useState } from 'react';
import { MobileView } from 'react-device-detect';

import logo from 'src/assets/img/logo.jpg';
import { places } from 'src/data/destinations';
import ModalComponent from 'src/components/common/Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const onModalOpen = () => {
    setIsOpen(true);
  };

  const ConfirmComponent = () => {
    return (
      <ul class='menu bg-base-100 menu-compact lg:menu-normal w-56 p-2 rounded-box'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/destinations'>Destinations</a>
        </li>
        <li>
          <a href='/faq'>FAQ</a>
        </li>
        <li>
          <a href='/about-us'>About</a>
        </li>
        <li>
          <a href='#'> Blog</a>
        </li>
        <li>
          <a href='/contact-us'>Contact</a>
        </li>
      </ul>
    );
  };

  return (
    <div class='navbar shadow-lg bg-white text-black-content sticky top-0 z-50 lg:px-60 md:px-60'>
      <div class='flex-1 px-2 mx-2'>
        <a class='bg-indigo-300 cursor-pointer' href='/'>
          <img class='object-cover w-36' src={logo} />
        </a>
      </div>
      <div class='flex-none hidden px-2 mx-2 lg:flex'>
        <div class='flex items-stretch'>
          <a class='btn btn-ghost btn-sm rounded-btn' href='/'>
            Home
          </a>
          <div class='dropdown dropdown-hover'>
            <a class='btn btn-ghost btn-sm rounded-btn'> Destinations 🔻</a>
            <ul
              tabindex='0'
              class='p-2 shadow menu dropdown-content backdrop-blur-xl rounded-box w-52'
            >
              <li>
                <a class='font-semibold hover:text-white' href='/destinations'>
                  All Destinations
                </a>
              </li>
              {places?.map(({ id, city }, index) => (
                <li key={index}>
                  <a
                    class='font-semibold hover:text-white'
                    href={`/destinations/${id}`}
                  >
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a class='btn btn-ghost btn-sm rounded-btn' href='/faq'>
            FAQ
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn' href='/about-us'>
            About
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn'>Blog</a>
          <a class='btn btn-ghost btn-sm rounded-btn' href='contact-us'>
            📞 Contact
          </a>
        </div>
      </div>
      <MobileView>
        <div class='flex-none'>
          <button class='btn btn-square btn-ghost' onClick={onModalOpen}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              class='inline-block w-6 h-6 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div>
      </MobileView>
      <ModalComponent
        isOpen={isOpen}
        modalContent={<ConfirmComponent />}
        handleClose={handleModalClose}
        showCloseIcon={false}
      />
    </div>
  );
};

export default Header;
