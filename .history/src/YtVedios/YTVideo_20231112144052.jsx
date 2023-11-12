import   { useEffect, useState } from "react";

const API = "AIzaSyBq8Lstm-AwCTWsaYsh31-QNMH0o1L1B1k";
const channelId = "PLf3qsnGljClRUPUS1HpAItd_p2X0HKpEn";

const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&playlistId=${channelId}&part=snippet,id&order=date&maxResults=20`;

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
         <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=3xWUqkf6kyS1lYvt&amp;list=PLHiZ4m8vCp9NfppyV7QSPjO92Z96VE1O4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      ))}
    </>
  );
};

export default YTVideo;
// import { useEffect, useState } from "react";

// const api = 'AIzaSyBq8Lstm-AwCTWsaYsh31-QNMH0o1L1B1k';
// const channelID ='UCFM3gG5IHfogarxlKcIHCAg';

// var fetchurl=`https://www.googleapis.com/youtube/v3/search?key=${api}&channelId=${channelID}&part=snippet,id`;
// // var fetchurl=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBq8Lstm-AwCTWsaYsh31-QNMH0o1L1B1k&channelId=@LearnwithSumit&part=snippet,id`;

// const YTVideo = () => {   

//     const [allvideos, setAllvideos] = useState([])
// useEffect(( )=>{
//     fetch(fetchurl)
//         .then((response) => response.json())
//         .then((resJson) => {
//             const result = resJson.items?.map((doc) => ({
//                 ...doc,
//                 Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
//             }));

//             setAllvideos(result || []); // Set to an empty array if result is falsy
//         })
//         .catch((error) => {
//             console.error("Error fetching YouTube videos:", error);
//         });
// }, [])
// console.log(allvideos)


//     return (
//         <>
            
//         </>
//     );
// };

// export default YTVideo;