import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideo from "../components/RelatedVideo";

const VideoDetail = () => {
  // 1. useLocation 훅 취득
  const location = useLocation();
  // 2. state 에서 전달된 video
  const { video } = location.state;

  const { title, channelTitle, channelId, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          width="100%"
          height="640"
          type="text/html"
          src={`//www.youtube.com/embed/${video.id}`}
          title={title}
        ></iframe>
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideo id={video.id} />
      </section>
    </section>
  );
};

export default VideoDetail;
