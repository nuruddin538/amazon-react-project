import { Footer } from 'flowbite-react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
const MainLayout = () => {
  const navigation = useNavigate();
  console.log(navigation);
  return (
    <div className="w-11/12 mx-auto">
      <section className="flex justify-between px-5 shadow-lg py-7">
        <div>
          <h1 className="text-xl font-bold">Amazon</h1>
        </div>
        <nav>
          <ul className="flex justify-between px-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-green-400' : ''
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-green-400' : ''
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'bg-green-400' : ''
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
