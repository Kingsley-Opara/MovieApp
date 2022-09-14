import { useState, useEffect } from "react";
import Movies from "./movies/movies";
import endpoint from "../utilis/request";
import Banner from "./banner/banner";
import Navbar from "./navbar/navbar";

const imgPath = 'https://image.tmdb.org/t/p/original/'

const Home = () => {
    return ( 
        <div className='home'>
          <Navbar/>
          <Banner imgLink = {imgPath}/>
          <Movies title={'Netflix Originals'} imgLink={imgPath} fetchUrl = {endpoint.fetchNetflixOriginals} isTrue/>
          <Movies title={'Trending'} imgLink={imgPath} fetchUrl = {endpoint.fetchTrending} />
          <Movies title={'Top Rated'} imgLink={imgPath} fetchUrl = {endpoint.fetchTopRated} />
          <Movies title={'Action Movies'} imgLink={imgPath} fetchUrl = {endpoint.fetchActionMovies} />
          <Movies title={'Comedy Movies'} imgLink={imgPath} fetchUrl = {endpoint.fetchComedyMovies} />
          <Movies title={'Horror'} imgLink={imgPath} fetchUrl = {endpoint.fetchHorrorMovies} />
          <Movies title={'Romance Movies'} imgLink={imgPath} fetchUrl = {endpoint.fetchRomanceMovies} />
          <Movies title={'Documentaries'} imgLink={imgPath} fetchUrl = {endpoint.fetchDocumentaries} />
        </div>
   

    );
        } 
export default Home;
