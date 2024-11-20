const Youtubevideo = ({ embedId }) => {
  return (
    <div>
      <iframe
        className="lg:w-[560px] w-full px-5 md:px-0 lg:px-0"
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
