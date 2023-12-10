import ReactPlayer from "react-player";

const IntroVideo = () => {
  return (
    <div className="intro-video-wrapper" style={{ width: "100%" }}>
      <div className="sec-heading">
        <span>Why</span>
        <span>Join</span>
        <span className="highlight-me">Us ?</span>
      </div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=bgTJl8nL2tw"
        width={"100%"}
        // height={"400px"}
        muted={true}
        playing={true}
        controls={true}
        className="react-player"
      />
    </div>
  );
};

export default IntroVideo;
