import { useState } from "react";
import "./FlashCards.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Flashcards = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const questions = [
    {
      question: "What does 'Ameliorate' mean?",
      options: ["To worsen", "To improve", "To delay"],
      answer: "To improve",
    },
    {
      question: "What is the synonym of 'Tenacious'?",
      options: ["Persistent", "Lazy", "Timid"],
      answer: "Persistent",
    },
    {
      question: "What does 'Exuberant' mean?",
      options: ["Joyful", "Tired", "Angry"],
      answer: "Joyful",
    },
    {
      question: "What is the antonym of 'Humble'?",
      options: ["Arrogant", "Kind", "Generous"],
      answer: "Arrogant",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");

  const handleSubmit = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setCurrent((prev) => prev + 1);
    setSelected("");
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="quizzes mt-16 md:mt-32 lg:w-11/12 mx-auto text-center"
    >
      <h2 className="font-bold text-3xl md:text-[40px] underline  text-center mb-10">
        Quizzes Games
      </h2>
      <div className="md:flex md:p-6 justify-center gap-20 border-2 border-button rounded-2xl shadow-2xl lg:h-[300px] items-center p-5 lg:p-0">
        <div>
          <img
            className="md:h-[250px] md:w-[300] mx-auto rounded-3xl"
            src="https://i.ibb.co.com/0JCR6F5/quizz-banner.jpg"
            alt=""
          />
        </div>
        <div className=" lg:h-[200px]">
          {current < questions.length ? (
            <div className="quiz-question">
              <h3 className="font-bold text-2xl">
                {questions[current].question}
              </h3>
              <p className="text-green-600">
                (Select the correct answer and submit. 1 mark for each <br />{" "}
                correct answer. 0 marks for wrong answers.)
              </p>
              <div className="options my-5">
                {questions[current].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelected(option)}
                    className={
                      selected === option
                        ? "selected border px-6 py-3"
                        : "border px-6 py-3"
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                className="px-10 py-3 cursor-pointer text-text bg-button font-bold rounded-xl"
                onClick={handleSubmit}
                disabled={!selected}
              >
                Submit
              </button>
            </div>
          ) : (
            <div>
              <h3>
                Your Score: {score}/{questions.length}
              </h3>
              <button
                className="px-10 py-3 cursor-pointer text-text bg-button font-bold rounded-xl"
                onClick={() => window.location.reload()}
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
