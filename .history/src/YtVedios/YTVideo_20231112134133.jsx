import { useEffect } from "react";

const api = 'AIzaSyBq8Lstm-AwCTWsaYsh31-QNMH0o1L1B1k';
const channelID ='@LearnwithSumit';

var fetchurl=`https://www.googleapis.com/youtube/v3/playlists?key=${api}&channelId=${channelID}&part=snippet,id`;

const YTVideo = () => {
    useEffect(() => {
      fetch{fetchurl}
      .then(res => res.json())
      .then(res.json() => console.log(data))

    
      
    }, [])
    

    return (
        <>
            
        </>
    );
};

export default YTVideo;