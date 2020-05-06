import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css'

const MovieThumb = (props) => {
    // console.log(props);
    return (
        <div className="rmdb-moviethumb">
            {props.clickable ? // ???? dùng để click --> show more info which film did you clicked
                <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}> {/* movieName: `${props.movieName} ??? chưa hiểu dụng ý  */}
                    <img src={props.image} alt="moviethumb"/>
                </Link>
                : <img src={props.image} alt="moviethumb"/>
            }  
        </div>
    )
}

export default MovieThumb;