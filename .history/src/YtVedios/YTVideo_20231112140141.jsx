import { useEffect, useState } from "react";

const api = 'AIzaSyBq8Lstm-AwCTWsaYsh31-QNMH0o1L1B1k';
const channelID ='@LearnwithSumit';

var fetchurl=`https://www.googleapis.com/youtube/v3/search?key=${api}&channelId=${channelID}&part=snippet,id`;
var fetchurl=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBq8Lstm-AwCTWsaYsh31-QNMH0o1L1B1k&channelId=${channelID}&part=snippet,id`;

const YTVideo = () => {   

    const [allvideos, setAllvideos] = useState([])
useEffect(( )=>{
    fetch(fetchurl)
    .then((response) => response.json())
    .then((resJson)=>{ const result = resJson.items.map(doc=> ({
        ...doc,
        Videolink: "https://www.youtube.com/embed/"+doc.id.videoId
    }))
    
    setAllvideos (result)})
}, [])
console.log(allvideos)


    return (
        <>
            
        </>
    );
};

export default YTVideo;