const VideoGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-2 gap-6 mb-10">
      {videos.map((video, index) => (
        <div
          key={index}
          className="border rounded-xl shadow-md p-4 flex justify-center items-center"
        >
          <video
            controls
            className="w-full h-auto rounded-lg"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
