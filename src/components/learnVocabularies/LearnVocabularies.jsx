import { Link } from "react-router-dom";

const LearnVocabularies = () => {
  return (
    <div className="md:mt-24 my-10 md:mb-24 md:w-11/12 mx-auto">
      <h1 className="font-bold text-3xl md:text-[40px] underline  text-center mb-10">
        Explore Us
      </h1>
      <div className="md:flex md:gap-20 justify-center px-5 w-full">
        <div className="md:w-1/2 border p-5 bg-primary/80 md:h-[400px] mt-10 backdrop-blur-lg rounded-xl shadow-2xl">
          <img
            className="rounded-xl md:h-[355px] w-full mx-auto"
            src="https://i.ibb.co.com/bBXjNsw/Dark-Blue-White-Lines-Modern-Business-Consultant-Business-Card.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0 lg:mt-0">
          <h1 className="font-bold text-2xl md:text-3xl">
            mission of <span className="text-text">LingoBingo</span>
          </h1>
          <p className="mt-3 lg:leading-8 text-lg">
            Our mission is to make language learning and understanding
            accessible and enjoyable for everyone. By combining comprehensive
            dictionaries with engaging learning tools{" "}
            <span className="hidden lg:block">
              , we aim to bridge communication gaps and celebrate linguistic
              diversity.
            </span>
          </p>
          <div className="hidden md:block">
            <h1 className="font-bold mt-3 md:mt-5 lg:mt-8 text-2xl md:text-3xl">
              how users can learn vocabularies
            </h1>
            <div className="mt-3">
              <p className="text-lg lg:leading-8">
                1. Use the search feature to find word meanings, pronunciations,
                and usage examples.
              </p>
              <p className="text-lg lg:leading-8">
                2. Use flashcards to test yourself on meanings and spellings in
                an interactive way.
              </p>
              <p className="text-lg lg:leading-8">
                3. Monitor your vocabulary growth through progress charts and
                personalized feedback.
              </p>
              <span className="hidden lg:block">
                <p className="text-lg lg:leading-8">
                  4. Practice listening and speaking with audio pronunciation
                  guides.
                </p>
                <p className="text-lg lg:leading-8">
                  5. Learn how words are used in context through example
                  sentences and phrases.
                </p>
                <p className="text-lg lg:leading-8">
                  6. Deepen understanding by learning related words and
                  opposites.
                </p>
              </span>
            </div>
          </div>
          <Link to="/aboutUs">
            <button className="text-text bg-button hover:bg-primary mt-8 px-5 py-4 rounded-xl font-bold">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnVocabularies;
