import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Videos from "../../Components/Videos/Videos";

import styles from "./Main.module.css";
import { useYoutubeApi } from "../../context/YoutubeApiContext";


export default function Main() {
  const { key } = useParams();
  const {youtube} = useYoutubeApi()
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", key], () => youtube.search(key));

  return (
    <>
      {isLoading && <p>Loading</p>}
      {error && <p>로딩중 에러가 발생하였음🌲</p>}
      <section className={styles.videosWrapper}>
        {videos &&
          videos.map((video) => {
            return (
              <Videos
                key={typeof video.id === "object" ? video.id.videoId : video.id}
                thumbnail={video.snippet.thumbnails.medium.url}
                date={video.snippet.publishedAt}
                title={video.snippet.title}
                nickname={video.snippet.channelTitle}
              />
            );
          })}
      </section>
    </>
  );
}
