import { useLoaderData } from "react-router-dom";
import banner from "../../assets/learning banner.png";

const StartLearning = () => {
  const lessons = useLoaderData();
  console.log(lessons);
  return (
    <div>
      {/* for banner  */}
      <div className="lg:mb-28 border-2">
        <img className="md:h-[250px] w-full" src={banner} alt="" />
      </div>
      {/* for lesson card  */}
      <h1 className="font-bold text-3xl md:text-[40px] underline mb-10  lg:w-11/12 mx-auto">
        Lessons:
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:w-11/12 mx-auto lg:gap-10 ">
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
  );
};

export default StartLearning;
