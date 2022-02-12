import logo from 'src/assets/img/logo.jpg';

const Header = () => {
  return (
    <div class='navbar shadow-lg bg-white text-black-content sticky top-0 z-50'>
      <div class='flex-1 px-2 mx-2'>
        <div class='bg-indigo-300'>
          <img class='object-cover w-48' src={logo} />
        </div>
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
                <a class='font-semibold'  href='/destinations'>All Destinations</a>
              </li>
              <li>
                <a class='font-semibold'>Colombo</a>
              </li>
              <li>
                <a class='font-semibold'>Dambulla</a>
              </li>
              <li>
                <a class='font-semibold'>Sigiriya</a>
              </li>
              <li>
                <a class='font-semibold'>Anuradhapura</a>
              </li>
              <li>
                <a class='font-semibold'>Polonnaruwa</a>
              </li>
              <li>
                <a class='font-semibold'>Kandy</a>
              </li>
              <li>
                <a class='font-semibold'>Nuwara Eliya</a>
              </li>
              <li>
                <a class='font-semibold'>Ella</a>
              </li>
              <li>
                <a class='font-semibold'>Yala</a>
              </li>
              <li>
                <a class='font-semibold'>Tangalle</a>
              </li>
              <li>
                <a class='font-semibold'>Galle</a>
              </li>
              <li>
                <a class='font-semibold'>Bentota</a>
              </li>
              <li>
                <a class='font-semibold'>Negambo</a>
              </li>
              <li>
                <a class='font-semibold'>Jaffna</a>
              </li>
              <li>
                <a class='font-semibold'>Trincomalee</a>
              </li>
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
      <div class='flex-none'>
        <button class='btn btn-square btn-ghost'>
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
    </div>
  );
};

export default Header;
