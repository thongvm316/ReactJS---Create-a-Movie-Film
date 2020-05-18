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
        // console.log(this.props);
        this.setState({loading: true})
        // fetch the movie data
        const endPoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endPoint)
    }

    fetchItems = (endPoint) => {
        fetch(endPoint)
        .then(result => result.json())
        .then(result => {
            if (result.status_code) {
                this.setState({ loading: false })
            } else {
                this.setState({movie: result}, () => {
                    const endPoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;  
                    fetch(endPoint)
                        .then(result => result.json())
                        .then(result => {
                            console.log(result)
                            const directors = result.crew.filter(member => member.job === "Director");
                            this.setState({
                                actors: result.cast,
                                director: directors,
                                loading: false
                            })
                        })
                        .catch( err => console.error('Error:', err))
                })
            }
        })
        .catch( err => console.error('Error:', err))
    }

    render() {
        console.log(this.state);
        // console.log(this.props);
        return (
            <div className="rmdb-movie">
                {this.state.movie 
                ? <div>
                    <Navigation movie={this.props.location.moviename}/>
                    <MovieInfo movie={this.state.movie} directors={this.state.director}/>
                    <MovieInfoBar 
                        time={this.state.movie.runtime}
                        budget={this.state.movie.budget}
                        revenue={this.state.movie.revenue}    
                    />
                  </div>
                : null }
                
                {this.state.actors 
                ? <div className="rmdb-movie-grid">
                    <FourColGrid header={'Actors'}>
                        {this.state.actors.map((element, i) => {
                            return <Actor key={i} actor={element}/>
                        })}
                    </FourColGrid>
                  </div>
                : null }
                {!this.state.actors ? <h1>No Movie Found</h1> : null}
                {this.state.loading ? <Spinner/> : null}
            </div>
        );
    }
}

export default Movie;