'use client';
import React from "react"
import Header from "./components/Header"
import Game from "./components/Game"

export default function App(){

    const [todaysSong, setTodaysSong] = React.useState([])

    // '00s Hits' Playlist ID: 248297032
    // 'HITS 2023 - Today's Top Songs' Playlist ID: 9890417302
    // '2010s party hits' Playlist ID: 715215865

    // var playlist_ids = [248297032, 9890417302, 715215865]
    // var playlist = playlist_ids[Math.floor(Math.random() * playlist_ids.length)];
    var playlist = 522845202;

    async function getTodaysSong() {

        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };

        try {
            const url = 'https://deezerdevs-deezer.p.rapidapi.com/playlist/'+playlist;

            const response = await fetch(url, options);
            const result = await response.json();
            var random_song = result.tracks.data[Math.floor(Math.random() * result.tracks.data.length)];

            if (random_song != null){
                setTodaysSong(random_song)
            }

            console.log(random_song);

        } catch (error) {
            console.error(error);
        }

        // setTodaysSong({"id":3135553,"readable":true,"title":"One More Time","title_short":"One More Time","title_version":"","link":"https://www.deezer.com/track/3135553","duration":320,"rank":911914,"explicit_lyrics":false,"explicit_content_lyrics":0,"explicit_content_cover":0,"preview":"https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-11.mp3","md5_image":"2e018122cb56986277102d2041a592c8","time_add":1670506043,"artist":{"id":27,"name":"Daft Punk","link":"https://www.deezer.com/artist/27","tracklist":"https://api.deezer.com/artist/27/top?limit=50","type":"artist"},"album":{"id":302127,"title":"Discovery","cover":"https://api.deezer.com/album/302127/image","cover_small":"https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg","cover_medium":"https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg","cover_big":"https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg","cover_xl":"https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg","md5_image":"2e018122cb56986277102d2041a592c8","tracklist":"https://api.deezer.com/album/302127/tracks","type":"album"},"type":"track"});
    }

    React.useEffect(() => {
        getTodaysSong()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div>
            <Header />
            <Game todaysSong={todaysSong} />
            <footer>
                {/* <button onClick={()=>{prompt("",JSON.stringify(todaysSong))}}></button> */}
                <span>created by gavin (@gavingogaming on gh)</span>
            </footer>
        </div>
    )
}