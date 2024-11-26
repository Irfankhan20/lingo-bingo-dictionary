import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ForgotPassword = () => {
  const { resetPassword, email } = useContext(AuthContext);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    resetPassword(email)
      .then(() => {
        setMessage(
          "A password reset email has been sent to your email address."
        );
        window.open("https://gmail.com", "_blank");
        setError("");
      })
      .catch(() => {
        setMessage("");
        setError(
          "Failed to send reset email. Please check your email address."
        );
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[44vh] py-12">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="my-4 px-4 md:px-0">
          <label className="font-medium text-lg">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={email || ""}
            placeholder="Enter Your Email"
            className="input input-bordered input-info w-full"
            required
          />
        </div>
        <div className="px-4 md:px-0">
          <button
            type="submit"
            className="btn bg-primary rounded-md w-full text-white py-2 hover:bg-button"
          >
            Reset Password
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
