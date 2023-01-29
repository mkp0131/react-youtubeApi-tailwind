import { useNavigate } from "react-router-dom";
import { dateFormat } from "../utils/data";

const VideoCard = ({ video, type }) => {
  const {
    title,
    thumbnails: {
      high: { url: thumnail },
    },
    channelTitle,
    publishedAt,
  } = video.snippet;

  const navigate = useNavigate();

  const isList = type === "list";

  return (
    <li
      onClick={() =>
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }
      className={isList ? "flex gap-1 m-2" : ""}
    >
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumnail}
        alt={title}
      />
      <div>
        <div className="font-semiold my-2 line-clamp-2">{title}</div>
        <div className="text-sm opacity-80">{channelTitle}</div>
        <div className="text-sm opacity-80">{dateFormat(publishedAt)}</div>
      </div>
    </li>
  );
};

export default VideoCard;
