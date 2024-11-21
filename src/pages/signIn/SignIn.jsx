import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { signInUser, signupWihtGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const googleSignIn = () => {
    signupWihtGoogle()
      .then((result) => {
        console.log("Google Sign-In successful:", result.user);
        navigate(from, { replace: true });
        toast.success("Successfully logged in with Google!");
      })
      .catch((err) => {
        console.error("Google Sign-In error:", err.message);
        toast.error("Google sign-in failed. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    // Create user
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login failed. Please check your email and password.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  return (
    <div className="lg:min-h-[70vh]  lg:mt-[67px] md:mt-[60px] mt-[62px] md:my-10 md:px-8 lg:px-0 md:flex justify-center lg:gap-10 items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl mt-8 md:mt-0 lg:mt-0 md:mb-8 md:text-start text-center">
          Login to{" "}
          <span className="text-text font-bold italic">LINGOBINGO</span>
        </h1>
      </div>
      <div className="bg-base-100 w-full px-2 max-w-lg shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Email</span>
            </label>
            <div className="indicator w-full flex-col">
              <span className="indicator-item mr-3 badge bg-primary text-white border-none">
                Required
              </span>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered shadow-lg"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Password</span>
            </label>
            <div className="indicator w-full flex-col">
              <span className="indicator-item mr-3 badge bg-primary text-white border-none">
                Required
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your Password"
                className="input input-bordered shadow-lg"
                required
              />
              <span className="relative w-[30px] text-xl flex justify-end -top-8 left-[90%] ">
                {showPassword ? (
                  <FaEye
                    className="hover:cursor-pointer"
                    onClick={handleShowPassword}
                  ></FaEye>
                ) : (
                  <FaEyeSlash
                    className="hover:cursor-pointer"
                    onClick={handleShowPassword}
                  ></FaEyeSlash>
                )}
              </span>
            </div>
            <label className="label">
              <a href="#" className="text-base label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="py-3 rounded-lg bg-button text-white">
              Login
            </button>
          </div>
          <div className="text-center mt-6">
            <p className="text-lg divider ">Or Connect With</p>
            <div className="my-4">
              <button onClick={googleSignIn} className="px-4">
                <img
                  className="w-10"
                  src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png"
                  alt="Google"
                />
              </button>
              <button className="px-4">
                <img
                  className="w-10"
                  src="https://i.ibb.co/VxKN3Mg/github.png"
                  alt="GitHub"
                />
              </button>
              <button className="px-4">
                <img
                  className="w-10"
                  src="https://i.ibb.co.com/TYk9y2B/Facebook-Logo-2023-removebg-preview.png"
                  alt="Facebook"
                />
              </button>
            </div>
            <div>
              <p className="text-sm">
                New to{" "}
                <span className="font-semibold text-primary">LingoBingo</span> ?
                <Link to="/signup">
                  <button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">
                    SignUp Here
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
