import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "./style/style.css";
import Logo from "../../Source/Logo.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ picture, username, isLoggedIn }) {
  const navigate = useNavigate();
  console.log(picture);
  const handleSubmit = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };
  const handleSubmitProduct = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/product");
  };
  const handleSubmitAbout = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about");
  };
  const handleSubmitContact = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact");
  };
  const handleCart = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/cart");
  };
  const handleSignOut = () => {
    window.location.reload();
  };
  const handleLogin = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/login");
  };
  return (
    <Disclosure as="nav" className="nav-bg shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 menu-button"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 menu-button"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={Logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-10 absolute lg:block"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block flex-grow">
                  <div className="flex justify-center space-x-4">
                    <a
                      href="/"
                      onClick={handleSubmit}
                      className={
                        "rounded-md px-4 py-2 text-gray-100 font-[1000] text-sm hover:text-[1rem] transition duration-1000 w-[80px]"
                      }
                    >
                      Home
                    </a>
                    <a
                      href="/product"
                      onClick={handleSubmitProduct}
                      className="rounded-md px-4 py-2 text-gray-100 font-[1000] text-sm hover:text-[1rem] transition duration-1000 w-[80px]"
                    >
                      Product
                    </a>
                    <a
                      href="/about"
                      onClick={handleSubmitAbout}
                      className="rounded-md px-4 py-2 text-gray-100 font-[1000] text-sm hover:text-[1rem] transition duration-1000 w-[80px]"
                    >
                      About
                    </a>
                    <a
                      href="/contact"
                      onClick={handleSubmitContact}
                      className="rounded-md px-4 py-2 text-gray-100 font-[1000] text-sm hover:text-[1rem] transition duration-1000 w-[80px]"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a onClick={handleCart} href="/cart">
                  <button type="button" className="p-1">
                    <span className="sr-only">View notifications</span>
                    <ShoppingCartIcon
                      strokeWidth={1}
                      className="h-6 w-6 mr-2 text-white hover:text-gray-800"
                      aria-hidden="true"
                    ></ShoppingCartIcon>
                  </button>
                </a>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={
                          picture ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTovdtHgXYBL44jJ64aeGsENmKpR_Is80PA&usqp=CAU"
                        }
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ">
                      {isLoggedIn && (
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={handleSubmit}
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Hello, <b>{username}!</b>
                            </a>
                          )}
                        </Menu.Item>
                      )}
                      {!isLoggedIn && (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={handleLogin}
                                href="/login"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Login
                              </a>
                            )}
                          </Menu.Item>
                        </>
                      )}
                      {isLoggedIn && (
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/uas"
                              onClick={handleSignOut}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign Out
                            </a>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="sm:hidden menu-items">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <Disclosure.Button
                    href="/"
                    onClick={handleSubmit}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white  hover:text-[1rem] transition duration-1000"
                  >
                    Home
                  </Disclosure.Button>
                  <Disclosure.Button
                    href="/product"
                    onClick={handleSubmitProduct}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white  hover:text-[1rem] transition duration-1000"
                  >
                    Product
                  </Disclosure.Button>
                  <Disclosure.Button
                    href="/about"
                    onClick={handleSubmitAbout}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white  hover:text-[1rem] transition duration-1000"
                  >
                    About
                  </Disclosure.Button>
                  <Disclosure.Button
                    href="/contact"
                    onClick={handleSubmitContact}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white  hover:text-[1rem] transition duration-1000"
                  >
                    Contact
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  );
}
