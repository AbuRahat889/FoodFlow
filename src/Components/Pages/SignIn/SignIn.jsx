import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Contex/AuthProvaider";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from "../../firebase";
import Swal from "sweetalert2";


const SignIn = () => {
  const { user, signIn } = useContext(AuthContex);
  const googleprovider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[])

  //sign in email and password
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
            title: "Good job!",
            text: "Sign in successfully!",
            icon: "success"
          });
          navigate('/')
      })
      .catch((error) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
      });
  };

  //signn in witn googgle
  const handleGoogle = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const user = result.user;
        // alert('sign in successfully!! usin google')
        Swal.fire({
          title: "Good job!",
          text: "Sign in successfully!",
          icon: "success",
        });
        navigate('/')
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire({
          title: "Good job!",
          text: "Sign in successfully!",
          icon: "success",
        });
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="">
          <div className="card  w-96  shadow-2xl bg-base-100">
          <h1 className="text-4xl text-center font-semibold mt-5">sign in</h1>
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                 name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#febb00] text-white font-bold text-xl"
                  type="submit"
                  value="sign in"
                />
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={handleGoogle}
                  className="text-red-600 w-10 mr-3"
                >
                  <img src="https://i.ibb.co/RjhSfHz/googlelogo.jpg" alt="" />
                </button>

                <button>
                  <img
                    className="text-red-600 w-10"
                    src="https://i.ibb.co/1ztV5Pf/Facebook-icon-svg.webp"
                    alt=""
                  />
                </button>
              </div>

              <p>
                If you new to this website?{" "}
                <Link to="/signup" className="underline font-bold">
                  Please Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
