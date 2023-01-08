import axios from "axios";

export default class FakeYoutube {
  search(key) {
    return key ? this.#searchByKyeword() : this.#popularVideos();
  }

  async #searchByKyeword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((i) => ({ ...i, id: i.id.videoId })));
  }

  async #popularVideos() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
