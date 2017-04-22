import React, { Component } from 'react';
import {createStore } from 'redux';
import { Provider } from 'react-redux';

import Game from './Game';
import reducers from '../reducers';

const store = createStore(reducers);

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Game />
                </Provider>

            </div>
        );
    }
}