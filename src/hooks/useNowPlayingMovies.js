import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/config';
import { useDispatch } from 'react-redux';
import { addMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        getNowPlaying();
    },[])
    const getNowPlaying = async () => {
        const data = await fetch("https://moviesdatabase.p.rapidapi.com/titles",API_OPTIONS);
        const json = await data.json();
        dispatch(addMovies(json));
    }
}

export default useNowPlayingMovies;