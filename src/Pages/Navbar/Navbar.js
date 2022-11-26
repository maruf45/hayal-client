import React, { useContext } from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logo.png";
import { AuthProvider } from "../../AuthContext/AuthContext";

const Navbar = () => {
  const { SignOut, user } = useContext(AuthProvider);
  const signOut = () => {
    SignOut().then((result) => {});
  };
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "Blogs", path: "/blogs" },
  ];
  if(user?.uid){
    const dashboard= { name: "Dashboard", path: "/dashboard" }
    navigation.push(dashboard);
  }
  console.log(navigation)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="isolate bg-white">
        <div className="px-6 pt-3 lg:px-8">
          <div>
            <nav
              className="flex pb-3 items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <Link to="/" className="-m-1.5 p-1.5">
                  <img className="h-8" src={logo} alt="" />
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                {navigation.map((item) => (
                  <React.Fragment key={item.name}>
                    <NavLink
                      end
                      to={item.path}
                      className="font-semibold text-gray-900 hover:text-gray-900 "
                    >
                      {item.name}
                    </NavLink>
                  </React.Fragment>
                ))}
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                {user?.uid ? (
                  <Link
                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    onClick={signOut}
                  >
                    Log Out
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel
                focus="true"
                className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
              >
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <Link to="/" className="-m-1.5 p-1.5">
                      <img className="h-8" src={logo} alt="" />
                    </Link>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      {user?.uid ? (
                        <button
                          className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                          onClick={signOut}
                        >
                          Log Out
                        </button>
                      ) : (
                        <Link
                          to="/login"
                          className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                        >
                          Log in
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
