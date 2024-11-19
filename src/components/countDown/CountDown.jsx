import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountDown = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="mt-16 md:mt-32">
      <h1 className="font-bold text-3xl md:text-[40px] underline  text-center mb-10">
        Overall Info
      </h1>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="w-11/12 md:w-full lg:w-11/12 mx-auto md:h-[182px] bg-text/30 backdrop-blur-lg lg:px-[100px] md:px-1 px-[100px] py-[60px] md:flex shadow-2xl items-center justify-between rounded-lg">
          {/* 1st div  */}
          <div className="flex gap-2 items-center pb-8 md:pb-0 lg:pb-0">
            <h1 className="text-[48px] text-black font-bold">
              {counterOn && (
                <CountUp start={0} end={2000} duration={5} delay={0}></CountUp>
              )}
              +
            </h1>
            <p className="text-button text-xl font-bold pt-2">
              User <br /> Count
            </p>
          </div>
          {/* 2nd div  */}
          <div className="flex gap-2 items-center pb-8 md:pb-0 lg:pb-0">
            <h1 className="text-[48px] text-black font-bold">
              {counterOn && (
                <CountUp start={0} end={200} duration={5} delay={0}></CountUp>
              )}
              +
            </h1>
            <p className="text-button text-xl font-bold pt-2">
              Lesson <br /> Count
            </p>
          </div>
          {/* 3rd div  */}
          <div className="flex gap-2 items-center pb-8 md:pb-0 lg:pb-0">
            <h1 className="text-[48px] text-black font-bold">
              {counterOn && (
                <CountUp start={0} end={800} duration={5} delay={0}></CountUp>
              )}
              +
            </h1>
            <p className="text-button text-xl font-bold pt-2">
              Vocabulary <br /> Count
            </p>
          </div>
          {/* 4th div  */}
          <div className="flex gap-2 items-center ">
            <h1 className="text-[48px] text-black font-bold">
              {counterOn && (
                <CountUp start={0} end={300} duration={5} delay={0}></CountUp>
              )}
              +
            </h1>
            <p className="text-button text-xl font-bold pt-2">
              Tutorial <br /> Count
            </p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default CountDown;
