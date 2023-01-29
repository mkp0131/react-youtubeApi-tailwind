import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

const ChannelInfo = ({ id, name }) => {
  const { youtube } = useYoutubeApi();
  const { data: thumbnailUrl } = useQuery(
    ["channel", id],
    () => {
      return youtube.channelImageUrl(id);
    },
    {
      refetchOnWindowFocus: false, // 포커스 toggle 시 refetch
      refetchOnMount: false, // 컴포넌트 리랜더링시 refetch
    }
  );

  return (
    <div className="flex my-4 mb-8 items-center">
      {thumbnailUrl && (
        <img className="w-10 h-10 rounded-full" src={thumbnailUrl} alt={name} />
      )}
      <div className="text-lg font-medium ml-2">{name}</div>
    </div>
  );
};

export default ChannelInfo;
