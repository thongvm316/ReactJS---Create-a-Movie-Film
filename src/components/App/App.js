import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Movie from '../Movie/Movie';

const App = () => (
    <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact /> {/* exact: khi url = / thi render page, khi /abc... nok render */}
                <Route path="/:movieId" component={Movie} exact /> {/* /:movieId: lấy Id từ component MovieThumb, giống như cách lấy của NodeJs */}
                <Route component={NotFound} />
            </Switch>
    </BrowserRouter>
)

export default App 
