import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { singIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password }); 
    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state? location.state : "/"}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-10">
        <h2 className="font-semibold text-2xl py-5 text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <p className="font-semibold py-5 text-center">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
