import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { UsePhoto } from "../../utilities/ImageHosting";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.files[0];
    const imageUrl = await UsePhoto(photo);
    const password = form.password.value;
    console.log({ name, email, imageUrl, password });
  };
  return (
    <div className="lg:min-h-[70vh] md:my-10 md:px-8 lg:px-0 md:flex justify-center lg:gap-10 items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl mt-8 md:mt-0 lg:mt-0 md:mb-8 md:text-start text-center">
          Singup to{" "}
          <span className="text-text font-bold italic">LINGOBINGO</span>
        </h1>
      </div>
      <div className=" bg-base-100 w-full px-2 max-w-lg shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          {/* name div  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Name</span>
            </label>
            <div className="indicator w-full flex-col">
              <span className="indicator-item mr-3 badge bg-primary text-white border-none">
                Required
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered shadow-lg"
                required
              />
            </div>
          </div>
          {/* email div  */}
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
          {/* photo-url div  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Photo URL</span>
            </label>
            <div className="indicator w-full flex-col">
              <input
                type="file"
                name="photo"
                className="file-input file-input-bordered file-input-info w-full"
              />
            </div>
          </div>
          {/* password div  */}
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
          </div>
          {/* button div  */}
          <div className="form-control mt-6">
            <button className="py-3 rounded-lg bg-button text-white">
              Signup
            </button>
          </div>
          {/* social login  */}
          <div className="text-center">
            <div>
              <p className="text-sm">
                Already have an account to{" "}
                <span className="font-semibold text-primary">LingoBingo</span> ?
                <Link to="/signin">
                  <button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">
                    SignIn Here
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
