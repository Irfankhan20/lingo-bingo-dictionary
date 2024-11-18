import { Link } from "react-router-dom";
import dangerIcon from "../../assets/danger-removebg-preview.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img className="md:w-52 mb-5 md:h-52" src={dangerIcon} alt="" />
      <div className="flex mb-8">
        <div className="border-r-2 pr-4">
          <h1 className="text-6xl font-bold text-[#D872AC]">404</h1>
        </div>
        <div className="pl-4">
          <h1 className="text-6xl font-bold pb-5">Page not found</h1>
          <p className="text-[#85807C] font-medium text-lg">
            Please check the URL in the address bar and try again.
          </p>
        </div>
      </div>
      <Link
        to={"/"}
        className="px-5 py-4 text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold rounded-lg "
      >
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
