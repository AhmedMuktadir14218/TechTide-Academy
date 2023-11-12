import React, { useEffect, useState } from "react";

const API = "";
const channelId = "UCpgnh4y4rPc9jc_xpKBDm6Q";

const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

const YTVideo = () => {
  const [allvideos, setAllvideos] = useState([]);

  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
        }));
        setAllvideos(result);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  console.log(allvideos);

  return (
    <>
      {allvideos.map((video, index) => (
        <div key={index}>
          <iframe
            width="560"
            height="315"
            src={video.Videolink}
            title={YouTube video player ${index}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      ))}
    </>
  );
};

export default YTVideo;