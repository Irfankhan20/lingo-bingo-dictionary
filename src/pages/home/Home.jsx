import Banner from "../../components/banner/Banner";
import SliderFlag from "../../components/sliderFlag/SliderFlag";
import WelcomeSms from "../../components/welcomeSms/WelcomeSms";

const Home = () => {
  return (
    <div>
      <WelcomeSms></WelcomeSms>
      <Banner></Banner>
      <SliderFlag></SliderFlag>
    </div>
  );
};

export default Home;
