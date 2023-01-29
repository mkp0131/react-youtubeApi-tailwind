import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  videos(params) {
    return this.apiInstance.get("/videos", params);
  }

  search(params) {
    return this.apiInstance.get("/search", params);
  }

  channels(params) {
    return this.apiInstance.get("/channels", params);
  }
}
