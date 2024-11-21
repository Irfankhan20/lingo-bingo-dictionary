import { useState } from "react";
import banner from "../../assets/about us banner.png";
import { useLoaderData, useNavigate } from "react-router-dom";
import Star from "../../utilities/Star";

const AboutUs = () => {
  const datas = useLoaderData();
  const navigate = useNavigate();
  console.log(datas);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const text = `
    Welcome to LingoBingo, your go-to platform for learning Hindi! Designed for learners of all levels, our website offers a comprehensive and engaging approach to mastering the language. Whether you’re a beginner or looking to refine your skills, we have tailored lessons to suit your needs. Our platform combines interactive exercises, vocabulary games, and audio-visual tools to ensure an enjoyable learning experience. From basic grammar to conversational fluency, LingoBingo focuses on practical skills that help you communicate confidently in real-life situations. What makes us unique is our cultural emphasis. By learning Hindi, you’ll also explore India’s rich heritage, traditions, and modern culture through specially curated content. With a user-friendly design and supportive learning environment, LingoBingo is perfect for travelers, professionals, or anyone passionate about this beautiful language. Start your journey with us today and embrace the joy of learning Hindi!
  `;

  const previewText = text.split(" ").slice(0, 80).join(" ") + "...";

  return (
    <div className=" mb-12 md:mb-24 lg:mt-[67px] md:mt-[60px] mt-[62px]">
      {/* for banner */}
      <div className="lg:mb-20 mb-12">
        <img
          className="md:h-[250px] w-full"
          src={banner}
          alt="About Us Banner"
        />
      </div>
      {/* for title-desc */}
      <div className="w-11/12 lg:pb-3 mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl md:text-[40px] underline">
          About OurSelf:
        </h1>
        <p className="text-green-600 lg:leading-7 text-lg mt-5 font-semibold mb-5 lg:mb-10">
          {isExpanded ? text : previewText}
          <button
            className="text-button underline ml-2 hover:bg-none"
            onClick={toggleReadMore}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </p>
      </div>
      {/* for card  */}
      <div>
        <h1 className="font-bold pb-5 w-11/12 mx-auto text-2xl md:text-3xl md:text-[40px] underline">
          Our services:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto ">
          {datas.map((data) => (
            <div
              className="card bg-sky-400/30 shadow-2xl shadow-button p-6 glass"
              key={data.id}
            >
              <img className="rounded-xl h-[250px]" src={data.image} alt="" />
              <div className="lg:space-y-2">
                <h1 className="text-2xl font-bold pt-2">Title: {data.title}</h1>
                <p className="text-green-600">
                  <span className="font-bold underline">Desc:</span>{" "}
                  {data.description}
                </p>
                <p className="flex gap-5">
                  <span className="font-bold">Ratings:</span>
                  {data.ratings}
                  <Star stars={data?.ratings}></Star>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* button  */}
      <div className="text-center lg:mt-7 md:mt-5">
        <button
          onClick={() => navigate("/startLearning")}
          className="btn px-16 bg-button text-white hover:bg-primary mt-10"
        >
          Back to Lesson
        </button>
      </div>

      {/* mail  */}
      <div className="w-11/12 mx-auto">
        <h1 className="font-bold text-2xl pb-6 lg:pb-10 mt-16 lg:mt-10 md:text-3xl md:text-[40px] underline">
          Mail Us for Contact:
        </h1>
        <div className="shadow-2xl p-10 border-2 rounded-2xl border-primary relative py-12 mx-auto ">
          <div className="grid md:grid-cols-12 items-center ">
            <div className="md:col-span-6">
              <img
                className="w-3/4"
                src="https://i.ibb.co/McqLNL3/gif.gif"
                alt=""
              />
            </div>

            <div className="md:col-span-6 md:px-0 px-6">
              <form className="mx-auto ">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-[#ABB2BF]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="block w-full px-4 py-2 border text-[#282C33] border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block  mb-2 text-sm font-medium text-[#ABB2BF]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="block w-full px-4 py-2 border text-[#282C33] border-gray-300  focus:outline-none focus:primary focus:border-primary sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-[#ABB2BF]"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    className="block w-full px-4 py-2 border text-[#282C33] border-gray-300  focus:outline-none focus:ring-primary focus:border-primary  sm:text-sm"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-[#ABB2BF]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full px-4 py-2 text-[#282C33] border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary  sm:text-sm"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-none border bg-button text-text font-bold border-primary px-3 py-2 mr-6 duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
