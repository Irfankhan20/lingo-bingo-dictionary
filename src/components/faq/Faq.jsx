import { useState } from "react";
import faq from "../../assets/faq logo.jpg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" mt-16 md:mt-32 mb-16 md:mb-32 w-11/12 mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-3xl md:text-[40px] underline  text-center mb-10">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center">
        <figure className="flex justify-center">
          <img className="w-8/12 lg:w-full" src={faq} />
        </figure>

        <div className="flex justify-center w-2/3">
          <div className="space-y-6">
            {[
              {
                question: "1. How can I effectively memorize new words?",
                answer:
                  "To effectively memorize new words, start by learning in small batches, such as 5–10 words per day. Use flashcards or apps to practice active recall and make connections with the words by creating sentences or stories that include them.",
              },
              {
                question:
                  "2. How often should I practice vocabulary to see improvement?",
                answer:
                  "Consistency is key to improving vocabulary. Dedicate at least 15–30 minutes daily to learning and practicing new words. Additionally, review previously learned words on a weekly basis to ensure long-term retention.",
              },
              {
                question: "3. What is the best way to improve pronunciation?",
                answer:
                  "Improving pronunciation starts with listening to native speakers and practicing along with them. Use online tools or language learning apps that provide audio examples of words. Break the words into syllables and practice them slowly, focusing on the correct sound.",
              },
              {
                question:
                  "4. Can I learn vocabulary even if I don’t have much time?",
                answer:
                  "Absolutely! If you’re short on time, you can still learn vocabulary by using mobile apps or flashcards during commutes or breaks. Focus on a word of the day and practice using it throughout your day. Incorporating vocabulary learning into your daily routine, such as reading or listening to short podcasts, can also be highly effective.",
              },
              {
                question:
                  "5. How can I stay motivated while learning vocabulary?",
                answer:
                  "To stay motivated, set realistic goals, such as learning 50 new words in a month, and track your progress to celebrate small milestones. Make learning fun by engaging in quizzes, games, or challenges.",
              },
            ].map((item, index) => (
              <div key={index} className="collapse collapse-plus bg-primaryBg">
                <input
                  type="radio"
                  name="my-accordion-3"
                  checked={activeIndex === index}
                  onChange={() => handleChange(index)}
                />
                <div className="collapse-title text-xl font-medium">
                  {item.question}
                </div>
                <div className="collapse-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
