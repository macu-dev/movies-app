import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
const Movie = () => {
    let router = useParams();
    const location = useLocation();
    console.log(location);

    return (
        <div>movies</div>
    )
}

export default Movie