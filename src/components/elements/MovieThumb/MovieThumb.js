import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css'

const MovieThumb = (props) => {
    // console.log(props);
    return (
        <div className="rmdb-moviethumb">
            {props.clickable ? // ???? chư hiểu dụng ý
                <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
                    <img src={props.image} alt="moviethumb"/>
                </Link>
                : <img src={props.image} alt="moviethumb"/>
            }
        </div>
    )
}

export default MovieThumb;