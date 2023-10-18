import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LogIn = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return toast("Enter a valid email address.");
    }
    if (!/^(?=.*?[!@#$&*~])(?=.*[A-Z]).{6,}$/.test(password)) {
      return toast("Password invalid.");
    }
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Login successful.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        toast(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast("Login by Google successful.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        toast(err.message);
      });
  };
  return (
    <div>
      <ToastContainer limit={1}></ToastContainer>
      <section className="pt-10     ">
        <div className="flex flex-col items-center pt-40 px-6  mx-auto md:h-screen lg:py-0 ">
          <div className="w-full bg-gray-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0    ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                >
                  Sign in
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 py-6">
                  Don’t have an account yet?
                  <Link
                    to="/register"
                    className="font-medium  text-blue-600 hover:underline dark:text-blue-500 ml-2 "
                  >
                    Sign up
                  </Link>
                </p>
              </form>
              <button
                onClick={handleGoogleLogin}
                className="text-gray-900  border border-gray-900 hover:bg-gray-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign In With Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

LogIn.propTypes = {};

export default LogIn;
