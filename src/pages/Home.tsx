import React from 'react';
import MovieSection from '@/components/MovieSection'


const example = {
    title: "Your liked stuff",
    movies: [
        {
            title: 'coffee Mug - Card',
            id: 344,
            media_type: "all",
            poster_path: "https://picsum.photos/200/300"
        },
        {
            title: 'coffee Mug - Card',
            id: 344,
            media_type: "tv show",
            poster_path: "https://picsum.photos/200/300"
        },
        {
            title: 'coffee Mug - Card',
            id: 344,
            media_type: "movies",
            poster_path: "https://picsum.photos/200/300"

        },
        {
            title: 'coffee Mug - Card',
            id: 344,
            media_type: "sdsdad",
            poster_path: "https://picsum.photos/200/300"
        },
        {
            title: 'coffee Mug - Card',
            id: 344,
            media_type: "sdsdad",
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
    //favorites:
    // movies  api
    return (
        //movies api
        <>  
            <MovieSection item={example}>
                <MovieSection.Title />
                <MovieSection.Filter />
                <MovieSection.Carousel settings={settings} />
            </MovieSection>
        </>

        //favorites
      
          
    );
}
 
export default Home;