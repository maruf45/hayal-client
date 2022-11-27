import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { RegisterUser, UpdateProfile } = useContext(AuthProvider);
  const navigate = useNavigate();
  const loaction = useLocation();

  const from = loaction.state?.from?.pathname || "/";
  const formSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    RegisterUser(email, password)
      .then((result) => {
        updateProfile(name);
        toast.success(`${name} Succesfully Register`);
        event.target.reset();
        navigate(from, { replace: true });

      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const updateProfile = (name) => {
    const profile = {
      displayName: name,
    };
    UpdateProfile(profile).then((data) => {});
  };
  return (
    <div className="h-screen">
      <div className="h-max w-full max-w-sm mx-auto mt-20 p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={formSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Register Now
          </h5>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="abc@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Choose password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already Have Account{" "}
            <Link
              to="/login"
              className="text-slate-700 hover:underline dark:text-blue-500"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
