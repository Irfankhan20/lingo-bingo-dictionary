import { Link } from "react-router-dom";
import banner from "../../assets/tutorail banner.png";
import Youtubevideo from "../../components/youtubeVideo/Youtubevideo";

const Tutorials = () => {
  return (
    <div className="lg:mt-[67px] md:mt-[60px] mt-[62px]">
      {/* image  */}
      <div className="lg:mb-20 mb-12">
        <img className="md:h-[250px] w-full" src={banner} alt="" />
      </div>
      {/* title */}
      <div className="w-11/12 mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl md:text-[40px] underline ">
          Videos for learn:{" "}
        </h1>
        <p className="text-green-600  mt-3 font-semibold mb-5 lg:mb-10">
          [Note: Click the learn vocabularies button below to learn the meaning
          of the words.]
        </p>
      </div>
      {/* videos  */}
      <div className="grid w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-20">
        {/* vd 1 */}
        <div className="">
          <Youtubevideo embedId={"1lrz11BbqCA"}></Youtubevideo>
        </div>
        {/* vd 2 */}
        <div>
          <Youtubevideo embedId={"28h2yVI_bxo"}></Youtubevideo>
        </div>
        {/* vd 3 */}
        <div>
          <Youtubevideo embedId={"NLlEKIMM7yQ"}></Youtubevideo>
        </div>
        {/* vd 4 */}
        <div>
          <Youtubevideo embedId={"l-B22lPrGTo"}></Youtubevideo>
        </div>
        {/* vd 5 */}
        <div>
          <Youtubevideo embedId={"MLpvXcR4g_4"}></Youtubevideo>
        </div>
        {/* vd 6 */}
        <div>
          <Youtubevideo embedId={"Ps0OiTpCZD8"}></Youtubevideo>
        </div>
      </div>
      {/* for button  */}
      <div className="w-11/12 mx-auto text-center mt-10 mb-12 lg:mb-28">
        <Link to={"/startLearning"}>
          <button className="px-10 py-4 text-text font-bold bg-button rounded-xl shadow-lg">
            Learn Vocabularies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tutorials;
