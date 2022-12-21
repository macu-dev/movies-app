import axios from 'axios';
import { GetGenreResponse, GetMovieResponse, GetMoviesResponse, GetTvResponse } from '@/models/apiResponse.interface';


export const getAllMoviesTrending = async () => {
  const { data } = await axios.get<GetMoviesResponse>(`${process.env.REACT_APP_API_URL}trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
  return data;
}


export const getMovieById = async (movieId: number | string) => {
    const { data } = await axios.get<GetMovieResponse>(`${process.env.REACT_APP_API_URL}movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
    return data;
}


export const getTvById = async (tvId: number | string) => {
    const { data } = await axios.get<GetTvResponse>(`${process.env.REACT_APP_API_URL}tv/${tvId}?api_key=${process.env.REACT_APP_API_KEY}`)
    return data;
}



export const getAllTVGenre = async () => {
    const { data } = await axios.get<GetGenreResponse>(`${process.env.REACT_APP_API_URL}genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`)
    return data;
}

export const getAllMovieGenre = async () => {
    const { data } = await axios.get<GetGenreResponse>(`${process.env.REACT_APP_API_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
    return data;
}
  
export const getTvOrMovieId = async (tvMovieId: number | string, isMovie: boolean) => {
    if(isMovie){
        return getMovieById(tvMovieId);
    }else{
        return getTvById(tvMovieId);
    }
    
}
