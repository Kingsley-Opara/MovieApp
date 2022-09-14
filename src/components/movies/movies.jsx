import {useState, useEffect} from 'react';
import axios from 'axios';
import './movies.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Movies = ({title, imgLink, fetchUrl, isTrue}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, SetTrailerUrl] = useState('')
    const request = async () =>{
        const response = await axios.get(fetchUrl)
        const data = response.data
        setMovies(data.results)
    }
    const handleClick = (movie)=>{
        if (trailerUrl){
            SetTrailerUrl('')
        }
        else{
            movieTrailer(movie?.name || '')
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search)
                const id = urlParams.get('v')
                SetTrailerUrl(id)
            }) 
        }
    }
    useEffect (()=>{
        request()
    }, [fetchUrl])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    }
    return ( 
        <>
            <div className='row'>
                <h2>{title}</h2>
                <div className='row_posters'>
                    {movies.map((movie)=>{
                        return(
                            <div className={`row_poster ${isTrue && 'row_posterLarge'}`} key={movie.id}>
                             <img src={`${imgLink}${isTrue ? movie.poster_path : movie.backdrop_path}`} alt=""
                             onClick={()=>{handleClick(movie)}}
                             />
                            </div>
                        )
                    })}
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
        </>
     );
}
 
export default Movies;