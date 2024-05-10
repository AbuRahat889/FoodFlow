import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Contex/AuthProvaider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContex);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.data;
        // alert("user create successfully!!!");
        Swal.fire({
            title: "Good job!",
            text: "Sign in successfully!",
            icon: "success"
          });
      })
      .catch((error) => {
        // alert(error);
        Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,
                footer: '<a href="#">Why do I have this issue?</a>'
              });
      });
  };

  return (
    <div>
      
      <div className="hero min-h-screen ">
        <div className="">
          <div className="card  w-96  shadow-2xl bg-base-100">
            <h1 className="text-4xl text-center font-semibold mt-5">sign up</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

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
                  value="sign up"
                />
              </div>
              <p>
                All ready have an account?{" "}
                <Link to="/signin" className="underline font-bold">
                  Please Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
