import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: "",
    });
  }

  videos(params) {
    return this.apiInstance.get("/data/videos/popular.json", params);
  }

  search(params) {
    return axios.get(
      `/videos/${params.relatedToVideoId ? "related" : "search"}.json`
    );
  }

  channels(params) {
    return this.apiInstance.get("/data/videos/channel.json", params);
  }
}
