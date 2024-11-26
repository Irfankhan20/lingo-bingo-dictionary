import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import banner from "../../assets/lesson details banner.png";
import "./LessonDetails.css";

const LessonDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const datas = useLoaderData();
  const [selectedItem, setSelectedItem] = useState(null);
  const [lessonsData, setLessonsData] = useState([]);

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP";
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const remainingData = [...datas].filter((data) => data.Lesson_no == id);
    if (remainingData) {
      setLessonsData(remainingData);
    } else {
      setLessonsData([]);
    }
  }, [datas, id]);

  return (
    <div
      className={`lg:mb-20 mb-12 ${selectedItem ? "modal-open" : ""}`} // Add blur and overlay when modal is open
    >
      {/* banner  */}
      <div className="lg:mb-20 mb-12">
        <img className="md:h-[250px] w-full" src={banner} alt="" />
      </div>
      {/* title  */}
      <div className="w-11/12 mx-auto mb-5 lg:mb-10">
        <h1 className="font-bold text-2xl md:text-3xl md:text-[40px] underline">
          Lesson Details of Lesson No:- {id}
        </h1>
        <p className="text-green-600 mt-2 mb-2 font-semibold">
          [Note: Click on the card to hear the word pronounced by voice]
        </p>
        <div className=" font-semibold flex items-center gap-2">
          Easy Word Card{" "}
          <p className="w-[20px] h-[20px] bg-green-100 border border-green-400 text-green-700"></p>
        </div>
        <div className="mb-5 font-semibold lg:mb-10 mt-2 flex items-center gap-2">
          Medium Word Card{" "}
          <p className="w-[20px] h-[20px] bg-yellow-50 border border-yellow-500 text-yellow-700"></p>
        </div>
      </div>
      {/* card  */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-11/12 mx-auto ">
        {lessonsData.map((item) => (
          <div
            onClick={() => pronounceWord(item.pronunciation)}
            key={item.Id}
            className={`border p-6 rounded-xl cursor-pointer shadow-lg shadow-button ${
              item.difficulty === "easy"
                ? "bg-green-100 border border-green-400 text-green-700"
                : "bg-yellow-50 border border-yellow-500 text-yellow-700"
            }`}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-2">{item.word}</h3>
              <p className="text-sm mb-1">
                <span className="font-semibold">Meaning: </span> {item.meaning}
              </p>
              <p className="text-sm mb-1">
                <span className="font-semibold">Pronunciation: </span>{" "}
                {item.pronunciation}
              </p>
              <p className="text-sm mb-2">
                <span className="font-semibold">Part of Speech: </span>{" "}
                {item.part_of_speech}
              </p>
            </div>
            <button
              onClick={() => setSelectedItem(item)}
              className="mt-4 shadow-2xl w-full px-4 py-2 bg-button text-white text-sm font-medium rounded hover:bg-primary transition"
            >
              When to Say
            </button>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selectedItem && (
        <>
          <div className="modal-overlay"></div>
          <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box space-y-3">
              <h3 className="font-bold text-lg"> Word: {selectedItem.word}</h3>
              <p className="mb-1">
                <span className="font-semibold">Meaning: </span>{" "}
                {selectedItem.meaning}
              </p>
              <p className="mb-1">
                <span className="font-semibold">When to Say: </span>{" "}
                {selectedItem.when_to_say}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Example: </span>{" "}
                {selectedItem.example}
              </p>

              <div className="modal-action justify-center">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="btn px-52 bg-button text-white hover:bg-primary mt-6"
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </>
      )}

      {/* button  */}
      <div className="text-center">
        <button
          onClick={() => navigate("/startLearning")}
          className="btn px-16 bg-button text-white hover:bg-primary mt-10"
        >
          Back to Lesson
        </button>
      </div>
    </div>
  );
};

export default LessonDetails;
