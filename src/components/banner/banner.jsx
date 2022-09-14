import { useState, useEffect } from "react";
import endpoint from '../../utilis/request'
import axios from "axios";
import './banner.css'
const Banner = ({imgLink}) => {
    const [movie, setMovie] = useState([])
    const [showmore, setShowmore] = useState(false)
    const requestData = async () =>{
        const response = await axios.get(endpoint.fetchNetflixOriginals)
        const data = response.data.results
        // console.log(data)
        const random_movie = Math.floor(Math.random() * data.length-1) 
        console.log(random_movie)
        setMovie(data[random_movie])
    }
    const text = movie?.overview || ''
    
    useEffect(()=>{
        requestData()

    }, [])
    return ( 
        <header className="banner" style={{
            backgoundSize: 'cover',
            backgroundImage: `url(${imgLink}${movie?.backdrop_path})`,
            backgroundPosition: 'center center',
            color: 'white',
            objectFit: 'contain',
            height: '448px',

        }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie.original_name} </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My list</button>
                </div>
                <div className="banner_description">
                    <p>{showmore ? text : `${text.substring(0, 100)}...`}</p>
                </div>
                
            </div>
            <div className="banner-fadeBottom"></div>
        </header>
     );
}
 
export default Banner;