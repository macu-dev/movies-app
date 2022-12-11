
import React, { useContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { CardCtx } from "@/context/Card";
import HeartSVG from '@/components/Icons/HeartSVG';
import { Movie } from '@/models/movieSection.interface';
import useIdToGenre from '@/hooks/useIdToGenre';
import { CardFooterContainer, FavoriteButton } from './styled';
import { isFavourite } from '@/helpers/isFavorite';


export const CardFooter = ({ description}: { description?: string}) => {

    const cardContext = useContext( CardCtx );
    
    const [moviesFavorites, setMoviesFavorites] = useLocalStorage<Movie[]>('moviesFavorites', []);

    const toogleMovieFavorite = (movie: Movie, event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
 
        setMoviesFavorites((prevValue: Movie[]) => {
            let newValue: Movie[] = [];
            if(moviesFavorites.find((m: Movie) => m.id === movie.id)!== undefined) {
                newValue = prevValue.filter((m: Movie) => m.id !== movie.id);
            }else{
                newValue = [...prevValue, movie];
            }
            return newValue;
        });
        
    }

    const idToGenre = useIdToGenre(cardContext?.item?.media_type || "movie");

    const stringCategories  = cardContext?.item?.genre_ids?.map(idToGenre)

    return (

        <CardFooterContainer>
            <p>
                {/* { description ? description : stringCategories?.join(', ') } */}
                { description ? description : stringCategories?.at(0) }
            </p>

            <FavoriteButton 
                onClick={(event: React.MouseEvent<HTMLElement>) =>{toogleMovieFavorite(cardContext?.item, event)}}
                className={isFavourite(cardContext?.item, moviesFavorites)? "active":""}
            >
                <HeartSVG />
            </FavoriteButton>
        </CardFooterContainer>
    );
}