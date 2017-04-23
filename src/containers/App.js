import React, { Component } from 'react';
import {createStore } from 'redux';
import { Provider } from 'react-redux';
import Root from './RootContainer';
import reducers from '../reducers';

export const store = createStore(reducers);

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Root/>
                </Provider>

            </div>
        );
    }
}