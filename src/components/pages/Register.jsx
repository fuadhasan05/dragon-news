import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const handelRegister = (e) => {
    
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5){
      setNameError("Name should be more than 5 charecter")
      return;
    }
    else{
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-10">
        <h2 className="font-semibold text-2xl py-5 text-center">
          Register your account
        </h2>
        <form onSubmit={handelRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

{nameError && <p className="text-red-400 text-xs">{nameError}</p>} {/* Display error */}

            {/* Photo Url */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <p className="font-semibold py-5 text-center">
              Alradey Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
