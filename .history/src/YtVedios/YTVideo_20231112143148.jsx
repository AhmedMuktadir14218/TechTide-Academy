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