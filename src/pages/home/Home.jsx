import Banner from "../../components/banner/Banner";
import LearnVocabularies from "../../components/learnVocabularies/LearnVocabularies";
import SliderFlag from "../../components/sliderFlag/SliderFlag";
import WelcomeSms from "../../components/welcomeSms/WelcomeSms";

const Home = () => {
  return (
    <div>
      <WelcomeSms></WelcomeSms>
      <Banner></Banner>
      <SliderFlag></SliderFlag>
      <LearnVocabularies></LearnVocabularies>
    </div>
  );
};

export default Home;
