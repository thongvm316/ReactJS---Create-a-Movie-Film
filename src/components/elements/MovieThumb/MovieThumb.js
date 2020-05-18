import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css'

const MovieThumb = ({movieId, movieName, image, clickable}) => {
    // console.log(props);
    return (
        <div className="rmdb-moviethumb">
            {clickable ? // ???? dùng để click --> show more info which film did you clicked
                <Link to={{ pathname: `/${movieId}`, moviename: `${movieName}` }}> {/* movieName: `${props.movieName} --> đẩy dữ liệu qua component Movie  */}
                    <img src={image} alt="moviethumb"/>
                </Link>
                : <img src={image} alt="moviethumb"/>
            }  
        </div>
    )
}

export default MovieThumb;