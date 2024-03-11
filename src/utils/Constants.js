const GOOGLE_API_KEY = "AIzaSyB2i3M6Cn9FtSCA9sLM7uCWrPAa5TerBM8";

export const LIVE_CHAT_COUNT = 15

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

  export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="