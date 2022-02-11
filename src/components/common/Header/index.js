import logo from 'src/assets/img/logo.jpg';

const Header = () => {
  return (
    <div class='navbar shadow-lg bg-white text-black-content'>
      <div class='flex-1 px-2 mx-2'>
        <div class='bg-indigo-300'>
          <img class='object-cover w-48' src={logo} />
        </div>
      </div>
      <div class='flex-none hidden px-2 mx-2 lg:flex'>
        <div class='flex items-stretch'>
          <a class='btn btn-ghost btn-sm rounded-btn' href='/'>
            🏠 Home
          </a>
          <div class='dropdown dropdown-hover'>
            <a class='btn btn-ghost btn-sm rounded-btn'>🚀 Destinations 🔻</a>
            <ul
              tabindex='0'
              class='p-2 shadow menu dropdown-content bg-white rounded-box w-52'
            >
              <li>
                <a>All Destinations</a>
              </li>
              <li>
                <a>Colombo</a>
              </li>
              <li>
                <a>Dambulla</a>
              </li>
              <li>
                <a>Sigiriya</a>
              </li>
              <li>
                <a>Anuradhapura</a>
              </li>
              <li>
                <a>Polonnaruwa</a>
              </li>
              <li>
                <a>Kandy</a>
              </li>
              <li>
                <a>Nuwara Eliya</a>
              </li>
              <li>
                <a>Ella</a>
              </li>
              <li>
                <a>Yala</a>
              </li>
              <li>
                <a>Tangalle</a>
              </li>
              <li>
                <a>Galle</a>
              </li>
              <li>
                <a>Bentota</a>
              </li>
              <li>
                <a>Negambo</a>
              </li>
              <li>
                <a>Jaffna</a>
              </li>
              <li>
                <a>Trincomalee</a>
              </li>
            </ul>
          </div>

          <a class='btn btn-ghost btn-sm rounded-btn' href='/faq'>
            ⁉️ FAQ
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn' href='/about-us'>
            💻 About
          </a>
          <a class='btn btn-ghost btn-sm rounded-btn'>❤️ Blog</a>
          <a class='btn btn-ghost btn-sm rounded-btn' href='contact-us'>
            ☎️ Contact
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
