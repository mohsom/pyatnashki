/**
 * Created by Volodya Skalskyi on 4/23/2017.
 */
import React, {Component} from 'react';
import Game from './Game';
import Switch from './SwitchSize';

export default class Root extends Component {
    render() {
        return (
            <div>
                <Switch/>
                <Game />
            </div>
        );
    }
}