import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  search(key) {
    return key ? this.#searchByKyeword(key) : this.#popularVideos();
  }

  async #searchByKyeword(key) {
    return this.httpClient
      .get(`search`, {
        params: {
          part: "snippet",
          maxResults: 25 ,
          q: key,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((i) => ({ ...i, id: i.id.videoId })));
  }

  async #popularVideos() {
    return this.httpClient
      .get(`videos`, {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
