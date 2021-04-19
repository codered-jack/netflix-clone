import React,{ useState,useEffect} from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Requests'
import movieTrailer from 'movie-trailer';
function Banner() {

    const [movie,setMovie]=useState([]);
    const [url,setUrl]=useState("");


    useEffect(() =>{

        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);

            return request;
        }

        fetchData();
    },[]);

    function truncate(string,n){
        return string?.length > n?string.substr(0,n-1) + '...' :string;
    }

    const playMovie = (movie)=>{

        if(url)
        {
            setUrl("")
            return
        }
        movieTrailer(movie?.title || movie?.name || "")
        .then(url=>{
          const urlParams = new URLSearchParams(new URL(url).search);
          setUrl(urlParams.get("v"));
        })
        .catch(error=>console.log(error))
    }
    return (
        <>
        <header className="banner" style={{
            backgroundSize:'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:'center center'
        }}>
           <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button" onClick={()=>playMovie(movie)}>{url===''?'Play':'Pause'}</button>
                    <button className="banner__button">My List</button>
                </div> 
                <h1 className="banner__description">{truncate(movie?.overview,250)}</h1>  
            </div> 
            <div className="banner--fadeBottom"/>
        </header>
                <iframe width="400px" height="300px" style={{position:'absolute',top:'50px',right:'50px',display:url===''?'none':''}}
                    src={`https://www.youtube.com/embed/${url}?autoplay=1&mute=0`} >
                </iframe>
                </>
    )
}

export default Banner
