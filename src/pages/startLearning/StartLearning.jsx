import { Link, useLoaderData, useNavigate } from "react-router-dom";
import banner from "../../assets/learning banner.png";
import Youtubevideo from "../../components/youtubeVideo/Youtubevideo";
import "animate.css";

const StartLearning = () => {
  const lessons = useLoaderData();
  const navigate = useNavigate();
  // console.log(lessons);
  return (
    <div className="lg:mt-[67px] md:mt-[60px] mt-[62px]">
      {/* for banner  */}
      <div className="lg:mb-20 mb-12">
        <img className="md:h-[250px] w-full" src={banner} alt="" />
      </div>
      {/* for lesson card  */}
      <div className="w-11/12 mx-auto">
        <h1 className="font-bold  animate__animated animate__fadeInDown text-2xl md:text-3xl md:text-[40px] underline ">
          All Lessons:
        </h1>
        <p className="text-green-600  mt-3 font-semibold  animate__animated animate__fadeInDown mb-5 lg:mb-10">
          [Note: Click on the card to see details of each lesson]
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3  lg:gap-10 ">
          {lessons.map((lesson) => (
            <div
              onClick={() => navigate(`/lessonDetails/${lesson.Lesson_no}`)}
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
      <div className="lg:mt-32 mt-16 w-11/12 mx-auto">
        <h1 className="font-bold text-2xl animate__animated animate__fadeInDown md:text-3xl md:text-[40px] underline mb-5 lg:mb-10  ">
          Youtube Video for Learn Alphabet:
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:space-y-0 space-y-8 lg:gap-5 ">
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
