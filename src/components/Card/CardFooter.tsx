
import React, { useContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { CardCtx } from "@/context/Card";
import HeartSVG from '@/components/Icons/HeartSVG';
import { Movie } from '@/models/movieSection.interface';


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

    return (

        <div>
            <p>
                { description ? description : cardContext?.item?.description }
            </p>

            <button 
                onClick={(event: React.MouseEvent<HTMLElement>) =>{toogleMovieFavorite(cardContext?.item, event)}}
            >
                <HeartSVG />
            </button>
        </div>
    );
}