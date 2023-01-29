import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ["videos", keyword],
    () => {
      return youtube.search(keyword);
    },
    {
      refetchOnWindowFocus: false, // 포커스 toggle 시 refetch
      refetchOnMount: false, // 컴포넌트 리랜더링시 refetch
    }
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">
        {keyword ? `🔍 '${keyword}' 검색 결과` : "👋 인기 동영상"}
      </h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>에러가 발생 했습니다.</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
        {videos &&
          videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </ul>
    </div>
  );
};

export default Videos;
