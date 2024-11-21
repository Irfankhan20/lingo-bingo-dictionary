const Youtubevideo = ({ embedId }) => {
  return (
    <div>
      <iframe
        className="w-full h-[30vh] "
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtubevideo;
