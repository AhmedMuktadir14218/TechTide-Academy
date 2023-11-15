import   { useEffect, useState } from "react";

const API = "AIzaSyBq8Lstm-AwCTWsaYsh31-QNMH0o1L1B1k";
const channelId = "PLf3qsnGljClRUPUS1HpAItd_p2X0HKpEn";


const fetchurl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${channelId}&part=snippet,id&order=date&maxResults=20`;
// const fetchurl = `https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBq8Lstm-AwCTWsaYsh31-QNMH0o1L1B1k&playlistId=PLf3qsnGljClRUPUS1HpAItd_p2X0HKpEn&part=snippet,id&order=date&maxResults=20`;

const YTVideo = () => {
    const [allVideos, setAllVideos] = useState([]);

    useEffect(() => {
      fetch(fetchurl)
        .then((response) => response.json())
        .then((resJson) => {
          const result = resJson.items.map((item) => ({
            ...item,
            videoLink: "https://www.youtube.com/embed/" + item.snippet.resourceId.videoId,
          }));
          setAllVideos(result);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    }, []);
  
    console.log(allVideos);

  return (
    <>
       {allVideos.map((video, index) => (
        <div key={index}>
          <iframe
            width="560"
            height="315"
            src={video.videoLink}
            // title={YouTube video player ${index}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      ))}
    </>
  );
};

export default YTVideo;