import Container from '@/components/Container';
import { setPathImage } from '@/helpers/setPathImage';
import { getTvOrMovieId } from '@/services';
import React from 'react';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
const Movie = () => {
    let router = useParams();
    const location = useLocation();
    const { movieId="" } = router;
    const { search } = location;
    const isMovie = search.search("movie") !== -1;

    // Queries
   
    const {data, error} = useQuery(['movie', movieId], 
        () => getTvOrMovieId(movieId, isMovie)
    );

    if(error) {
        return(<p>Ocurrio un error</p>)
    }

    console.log(data)

 
    return (
        <section>
            <Container>
                <h2>{data?.original_title || data?.original_name}</h2>
                <picture>
                    <img src={setPathImage(data?.poster_path)} alt="" />
                </picture>
            </Container>
        </section>
    )
}

export default Movie