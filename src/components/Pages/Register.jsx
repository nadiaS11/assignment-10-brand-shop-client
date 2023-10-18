import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Authentications/firebase.config";
import { AuthContext } from "../Authentications/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, googleLogin } = useContext(AuthContext);

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
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    if (!/^(?=.*?[!@#$&*~])(?=.*[A-Z]).{6,}$/.test(password)) {
      return toast(
        "Your Password must have at least 6 characters, one capital letter and one special character."
      );
    }

    createUser(email, password)
      .then((result) => {
        result.user.displayName = name;
        console.log(result.user);

        toast("Successfully registered.");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            // Profile updated!
            // ...
            console.log("Profile Updated");
          })
          .catch((error) => {
            console.log(error.message);
          });
        navigate("/ ");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="  dark:bg-gray-900 pt-12">
        <div className="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-gray-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  ">
                Register
              </h1>
              <form onSubmit={handleRegister}>
                <div className="mb-6">
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
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="e.g. John Smith"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="url"
                    id="url"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="https://example.com/john-smith-user/profile.jpg"
                    required
                  />
                </div>
                <div className="mb-6">
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
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="text"
                    id="password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  />
                </div>

                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>

                <div className="flex gap-5 flex-col">
                  <button
                    type="submit"
                    className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Register new account
                  </button>
                </div>
              </form>
              <button
                onClick={handleGoogleLogin}
                className="text-gray-900 w-full border border-gray-900 hover:bg-gray-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign Up With Google
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 py-6">
                Already have an account yet?
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500 ml-2  "
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Register.propTypes = {};

export default Register;
