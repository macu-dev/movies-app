import React from 'react';
import MovieSection from '@/components/MovieSection'
import useSetActivate from '@/hooks/useSetActivated';
import { useLocalStorage } from 'usehooks-ts';
import { Movie } from '@/models/movieSection.interface';

const favorites = {
    title: "Your liked stuff",
    categories: ["all", "movie", "tv"]
}

const tops = {
    title: "Top Movies and Shows",
    movies: [
        {
            title: 'coffee Mug - Card',
            id: 344,
            media_type: "tv",
            poster_path: "https://picsum.photos/200/300"
        },
        {
            title: 'coffee Mug - Card',
            id: 344,
            media_type: "tv",
            poster_path: "https://picsum.photos/200/300"
        },
        {
            title: 'coffee Mug - Card',
            id: 344,
            media_type: "movie",
            poster_path: "https://picsum.photos/200/300"

        },
        {
            title: 'coffee Mug - Card',
            id: 344,
            media_type: "tv",
            poster_path: "https://picsum.photos/200/300"
        },
        {
            title: 'coffee Mug - Card',
            id: 344,
            media_type: "tv",
            poster_path: "https://picsum.photos/200/300"
        }

    ],
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


const Home = () => {
    
    // movies  api
    const [moviesFavorites] = useLocalStorage<Movie[]>('moviesFavorites', []);
    const [filterTopSelected, setFilterTopSelected] = useSetActivate<number>(0);
    const [filterFavSelected, setFilterFavSelected] = useSetActivate<number>(0);




    return (
        <>   
            <MovieSection item={{...favorites, movies: moviesFavorites}}>
                <MovieSection.Title />
                <MovieSection.Filter selected={filterFavSelected} setter={setFilterFavSelected}/>
                <MovieSection.Carousel settings={settings} selected={filterFavSelected} />
            </MovieSection>

            <MovieSection item={tops}>
                <MovieSection.Title />
                <MovieSection.Filter selected={filterTopSelected} setter={setFilterTopSelected}/>
                <MovieSection.Carousel settings={settings} selected={filterTopSelected} />
            </MovieSection>
        </>

      
          
    );
}
 
export default Home;