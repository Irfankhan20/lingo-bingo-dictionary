import Banner from "../../components/banner/Banner";
import CountDown from "../../components/countDown/CountDown";
import Faq from "../../components/faq/Faq";
import Flashcards from "../../components/flashCards/FlashCards";
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
      <CountDown></CountDown>
      <Flashcards></Flashcards>
      <Faq></Faq>
    </div>
  );
};

export default Home;
