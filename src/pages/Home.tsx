import React from 'react';
import MovieSection from '@/components/MovieSection'
import useSetActivate from '@/hooks/useSetActivated';
import { useLocalStorage } from 'usehooks-ts';
import { Movie } from '@/models/movieSection.interface';
import { useQuery } from 'react-query';
import { getAllMoviesTrending } from '@/services';


const Home = () => {
    // Queries
    const {data={results:[]}, error, isLoading} = useQuery('movies', getAllMoviesTrending);

    const favorites = {
        title: "Your liked stuff",
        categories: ["all", "movie", "tv"]
    }

    const tops = {
        title: "Top Movies and Shows",
        movies: [...data.results],
        categories: [
            "all",
            "movie",
            "tv"
        ]
    }
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    
    // movies  api
    const [moviesFavorites] = useLocalStorage<Movie[]>('moviesFavorites', []);
    const [filterTopSelected, setFilterTopSelected] = useSetActivate<number>(0);
    const [filterFavSelected, setFilterFavSelected] = useSetActivate<number>(0);

    return (
        <>  {   
                moviesFavorites?.length > 0 ?
                    <MovieSection item={{...favorites, movies: moviesFavorites}}>
                        <MovieSection.Title />
                        <MovieSection.Filter selected={filterFavSelected} setter={setFilterFavSelected}/>
                        <MovieSection.Carousel settings={settings} selected={filterFavSelected} />
                    </MovieSection>
                : null
 
            }

            <MovieSection item={tops}>
                <MovieSection.Title />
                <MovieSection.Filter selected={filterTopSelected} setter={setFilterTopSelected}/>
                <MovieSection.Carousel settings={settings} selected={filterTopSelected} />
            </MovieSection>
        </>

      
          
    );
}
 
export default Home;