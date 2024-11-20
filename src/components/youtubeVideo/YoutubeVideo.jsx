const Youtubevideo = ({ embedId }) => {
  return (
    <div className="border  mx-5 md:mx-20 lg:mx-0">
      <iframe
        className="lg:w-[560px] w-full"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtubevideo;
