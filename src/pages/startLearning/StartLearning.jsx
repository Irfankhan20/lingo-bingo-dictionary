import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/learning banner.png";
import Youtubevideo from "../../components/youtubeVideo/Youtubevideo";

const StartLearning = () => {
  const lessons = useLoaderData();
  console.log(lessons);
  return (
    <div>
      {/* for banner  */}
      <div className="lg:mb-28 mb-12 border-2">
        <img className="md:h-[250px] w-full" src={banner} alt="" />
      </div>
      {/* for lesson card  */}
      <div>
        <h1 className="font-bold text-2xl md:text-3xl md:text-[40px] underline mb-5 lg:mb-10  lg:w-11/12 mx-auto">
          Lessons:
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 lg:w-11/12 mx-auto lg:gap-10 ">
          {lessons.map((lesson) => (
            <div
              className="bg-button rounded-2xl text-center shadow-2xl shadow-button cursor-pointer"
              key={lesson.Lesson_no}
            >
              <img className="rounded-2xl" src={lesson.image} alt="" />
              <h1 className="font-bold text-text py-3 text-2xl">
                Lesson No: {lesson.Lesson_no}
              </h1>
            </div>
          ))}
        </div>
      </div>
      {/* for yt video  */}
      <div className="lg:mt-32 mt-16 lg:w-11/12 mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl md:text-[40px] underline mb-5 lg:mb-10  ">
          Youtube Video for Learn Alphabet:
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:space-y-0 space-y-8 lg:gap-5">
          <Youtubevideo embedId={"Zv55AD9yZKc"}></Youtubevideo>
          <Youtubevideo embedId={"-I7iUUp-cX8"}></Youtubevideo>
          <Youtubevideo embedId={"Yvb3we9HMFo"}></Youtubevideo>
        </div>
      </div>
      {/* for button  */}
      <div className="lg:w-11/12 mx-auto text-center mt-10 mb-12 lg:mb-28">
        <Link to={"/tutorials"}>
          <button className="px-10 py-4 text-text font-bold bg-button rounded-xl shadow-lg">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartLearning;
