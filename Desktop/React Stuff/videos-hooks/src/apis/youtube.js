import axios from "axios";

const KEY = "AIzaSyDJ8QekEdBN2i-wNEUkRZVcZfD2GBO9zMM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
