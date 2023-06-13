import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./style/style.css";
import Logo from '../Source/LogoSignIn.png'
export default function Login({ onLogin, onLoginGoogle}) {
  const google = window.google;
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username);
    navigate("/");
  };
  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential)
    onLoginGoogle(userObject);
    navigate("/");
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "737092693967-4cifopdok6gbiessp69nqejfn6b0t2o6.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
      )
      // eslint-disable-next-line
    }, []);
    return (
    <>
      <div className="flex min-h-full flex-1 blur-bg2 flex-col justify-center px-6 py-12 lg:px-8">
        <br />
        <br />
        <br />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-[30%] w-[30%]"
            src={Logo}
            alt="Minko"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  id="password"
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/uas"
                    className="font-semibold text-gray-600 hover:text-gray-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#675D50] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                <a href="/">Sign In</a>
              </button>
            </div>
          </form>
          <p className="text-center font-[500] m-4">Or</p>
            <div id="signInDiv" className="flex justify-center"></div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="https://www.instagram.com/inosensiusdwi/"
              className="font-semibold leading-6 text-gray-600 hover:text-gray-500"
            >
              Please register to our customer service.
            </a>
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
