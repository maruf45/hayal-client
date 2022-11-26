import React, { useContext } from "react";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = ({ location }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");
  const { NewPassword } = useContext(AuthProvider);
  const navigate = useNavigate();
  const formSubmit = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    NewPassword(oobCode, password)
      .then((succes) => {
        toast.success(`Succesfully Rest Password`);
        event.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="w-full max-w-sm mx-auto mt-20 p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={formSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Reset Password
          </h5>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="**********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Set Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
