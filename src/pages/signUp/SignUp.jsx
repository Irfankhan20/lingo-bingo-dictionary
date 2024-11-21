import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { UsePhoto } from "../../utilities/ImageHosting";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUppercase) {
      return "Password must include at least one uppercase letter.";
    }
    if (!hasLowercase) {
      return "Password must include at least one lowercase letter.";
    }
    if (!isValidLength) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.files[0];
    const password = form.password.value;

    // Validate password
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }

    setPasswordError("");
    const imageUrl = await UsePhoto(photo);

    // Create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        handleUpdateProfile(name, imageUrl);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  // Update user profile
  const handleUpdateProfile = (name, imageUrl) => {
    const profile = { displayName: name, photoURL: imageUrl };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="lg:min-h-[70vh]  lg:mt-[67px] md:mt-[60px] mt-[62px] md:my-10 md:px-8 lg:px-0 md:flex justify-center lg:gap-10 items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl mt-8 md:mt-0 lg:mt-0 md:mb-8 md:text-start text-center">
          Signup to{" "}
          <span className="text-text font-bold italic">LINGOBINGO</span>
        </h1>
      </div>
      <div className="bg-base-100 w-full px-2 max-w-lg shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered shadow-lg"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered shadow-lg"
              required
            />
          </div>

          {/* Photo Upload */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Photo URL</span>
            </label>
            <input
              type="file"
              name="photo"
              className="file-input file-input-bordered file-input-info w-full"
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your Password"
                className="input input-bordered shadow-lg w-full"
                required
              />
              <span
                className="absolute top-2 right-3 text-xl cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {/* Password Error Message */}
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="py-3 rounded-lg bg-button text-white">
              Signup
            </button>
          </div>

          {/* Redirect to SignIn */}
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account on{" "}
              <span className="font-semibold text-primary">LingoBingo</span>?
              <Link to="/signin">
                <button className="btn btn-link normal-case text-sky-700">
                  SignIn Here
                </button>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
