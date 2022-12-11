
import { useQuery } from 'react-query';
import { getAllMovieGenre, getAllTVGenre } from "@/services";

const useIdToGenre = (media_type: string) => {
  // Queries
  const {data={genres:[]}} = useQuery(`genere-${media_type}`, media_type==='movie'? getAllMovieGenre: getAllTVGenre);
  
  const idToGenere = (id: number) => data.genres.find(genre => genre.id === id)?.name


  return idToGenere;
};


export default useIdToGenre;