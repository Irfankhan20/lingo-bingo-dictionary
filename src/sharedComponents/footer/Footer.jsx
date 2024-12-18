import { GoArrowRight } from "react-icons/go";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { IoLocationSharp, IoChatboxEllipses } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className=" bg-[#1A1A1A]  lg:block">
      <ScrollToTop smooth width="41px" height="22px" top="250" color="green" />
      <div className="w-11/12 mx-auto md:h-[290px]  lg:h-[345px]  md:flex md:gap-6 justify-between items-center py-4 md:py-0 lg:py-0 px-10 md:px-0 lg:px-0">
        {/* 1st part  */}
        <div className="pb-8 md:pb-0">
          {/* logo */}
          <div className="flex gap-1 items-center">
            <h2 className="text-white text-2xl lg:text-3xl font-semibold">
              Lingo<span className="text-text">Bingo</span>
            </h2>
          </div>
          {/* text  */}
          <p className="text-text pt-3 pb-5">
            What’s inside: New Arrivals, Exclusive Sales,{" "}
            <br className="md:hidden" /> News & Mores
          </p>
          {/* input box  */}
          <div className="bg-white flex pr-1 py-1 rounded-lg w-[315px] md:w-[250px] lg:w-[321px]">
            <input
              className="lg:w-[400px] lg:h-[45px] md:pl-3 pl-[58px] lg:pl-5"
              type="search"
              placeholder="Email Address"
              name=""
              id=""
            />
            <button className="flex gap-1 bg-primary text-white px-5 py-2 items-center rounded-lg font-semibold hover:bg-[#2C3C28]">
              <span className="pt-1 font-medium">
                <GoArrowRight />
              </span>
            </button>
          </div>
          {/* social icon  */}
          <div className="flex md:gap-9 gap-9 lg:gap-[55px] pt-4 md:pt-10 text-xl">
            <Link className="text-text hover:text-primary">
              <FaFacebookF />
            </Link>
            <Link className="text-text hover:text-primary">
              <FaTwitter />
            </Link>
            <Link className="text-text hover:text-primary">
              <FaLinkedinIn />
            </Link>
            <Link className="text-text hover:text-primary">
              <FaYoutube />
            </Link>
            <Link className="text-text hover:text-primary">
              <FaInstagramSquare />
            </Link>
          </div>
        </div>
        {/* 2nd part  */}
        <div className=" pb-8 md:pb-0">
          <h2 className="text-white text-xl font-bold">Our Stores</h2>

          <div className="flex flex-row md:flex-col  leading-7 md:pt-2 lg:pt-8">
            <Link className="text-text hover:text-primary cursor-pointer">
              Delivery Information
            </Link>
            <Link className="text-text hover:text-primary cursor-pointer">
              Privacy Policy
            </Link>
            <Link className="text-text hover:text-primary cursor-pointer">
              Terms & Conditions
            </Link>
            <Link className="text-text hover:text-primary cursor-pointer">
              Support Center
            </Link>
            <Link className="text-text hover:text-primary cursor-pointer">
              Careers
            </Link>
          </div>
        </div>
        {/* 3rd part  */}
        <div className=" md:pb-0 pb-8">
          <h2 className="text-white text-xl font-bold">Shop Categories</h2>

          <div className="flex flex-row gap-3 md:gap-0 lg:gap-0 md:flex-col leading-7 md:pt-2 lg:pt-8">
            <Link className="text-text hover:text-primary cursor-pointer">
              Contact Us
            </Link>
            <Link className="text-text hover:text-primary cursor-pointer">
              Information
            </Link>
            <Link className="text-text hover:text-primary cursor-pointer">
              About Us
            </Link>
            <Link className="text-text hover:text-primary cursor-pointer">
              Careers
            </Link>
            <Link className="text-text hover:text-primary cursor-pointer">
              Nest Stories
            </Link>
          </div>
        </div>
        {/* 4th part  */}
        <div className=" lg:mt-3">
          <h2 className="text-white text-xl font-bold">
            Need Help ? / Contact Us
          </h2>
          {/* 1st div  */}
          <div className="flex gap-2 text-text md:pt-2 lg:pt-6">
            <span className="text-primary text-3xl">
              <IoLocationSharp />
            </span>
            <div className="">
              <h2 className="md:hidden">258 Daniel Street, 2589 Phones Line</h2>
              <p>Berlin, Germany</p>
            </div>
          </div>
          {/* 2nd div  */}
          <div className="flex gap-2 text-text pt-6">
            <span className="text-primary text-3xl">
              <FaPhone />
            </span>
            <div>
              <h2>Call us between 8:00 AM - 12PM</h2>
              <p className="text-primary">+25896 3158 3228</p>
            </div>
          </div>
          {/* 3rd div  */}
          <div className="flex gap-2 text-text pt-6">
            <span className="text-primary text-3xl">
              <IoChatboxEllipses />
            </span>
            <div>
              <h2>Live Chat</h2>
              <p className="md:hidden">Chat With an Experts</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px]  border-[#515949]"></div>
      <div className="items-center py-5  md:flex justify-between w-11/12 mx-auto">
        <p className="text-white py-1 ">
          Copyright 2024 ©Ekomart. All rights reserved.
        </p>
        <p className="text-white font-bold py-1">
          Developed by: MD.IRFAN KHAN PATHAN
        </p>
        <div className="flex md:gap-3 items-center py-1">
          <p className="text-white font-medium">Payment Accepts: </p>
          <div className="">
            <img
              src="https://i.ibb.co/DrbH2mT/Screenshot-2024-08-01-201101.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
