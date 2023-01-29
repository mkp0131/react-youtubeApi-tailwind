import { createContext, useContext } from "react";
// import FakeYoutubeClient from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

// 컨텍스트 생성
export const YoutubeApiContext = createContext();

const youtube = new Youtube(new YoutubeClient());

export const YoutubeApiProvider = ({ children }) => {
  // 생성한 컨텍스트의 Provider 로 하이오더 컴포넌트를 생성
  // value 속성을 통해 사용하고 싶은 값(state)을 전달
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

export const useYoutubeApi = () => {
  return useContext(YoutubeApiContext);
};
