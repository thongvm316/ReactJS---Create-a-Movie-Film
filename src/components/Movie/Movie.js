import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

class Movie extends Component {
    constructor () {
        super()
        this.state = {
            movie: null,
            actors: null,
            director: [],
            loading: false
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.setState({loading: true})
        // fetch the movie data
        const endPoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endPoint)
    }

    fetchItems = (endPoint) => {
        fetch(endPoint)
        .then(result => result.json()) // ham json de lam gi??
        .then(result => {
            console.log(result);
            if (result.status_code) {
                this.setState({ loading: false })
            } else {
                this.setState( {movie: result }, () => {
                    // ... then fetch actors in the setState callback function
                    const endPoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;  
                    console.log(endPoint); 
                    fetch(endPoint)
                        .then(result => result.json())
                        .then(result => {
                            console.log(result);
                            const directors = result.crew.filter(member => member.job === "Director");
                            console.log(directors);
                            this.setState({
                                actors: result.cast,
                                director: directors,
                                loading: false
                            })
                        })
                })
            }
        })
        .catch( err => console.error('Error:', err))
    }

    render() {
        console.log(this.state);
        return (
            <div className="rmdb-movie">
                <Navigation/>
                <MovieInfo/>
                <MovieInfoBar/>
                {/* <FourColGrid/> */}
                <Spinner/>
            </div>
        );
    }
}

export default Movie;