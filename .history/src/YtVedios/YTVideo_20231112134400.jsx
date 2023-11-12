import { useEffect } from "react";

const api = 'AIzaSyBq8Lstm-AwCTWsaYsh31-QNMH0o1L1B1k';
const channelID ='@LearnwithSumit';

var fetchurl=`https://www.googleapis.com/youtube/v3/playlists?key=${api}&channelId=${channelID}&part=snippet,id`;

const YTVideo = () => {
    // useEffect(() => {
    //   fetch{fetchurl}
    //   .then(res => res.json())
    //   .then(data => console.log(data))

    
      
    // }, [])
    

    const [allvideos, setAllvideos] = useState([])
useEffect(( )=>{
}, [])

}));
...doc,
Videolink: "https://www.youtube.com/embed/"+doc.id.videoId
setAllvideos (result)
    return (
        <>
            
        </>
    );
};

export default YTVideo;