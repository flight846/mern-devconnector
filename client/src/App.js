import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';
import Footer from './components/layout/Footer';
import NotFound from './components/layout/NotFound';
import Routes from './components/Routing/Routes';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser())
    }, []) // run once

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route component={Routes} />
                    </Switch>
                    <Footer />
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
