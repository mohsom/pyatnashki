/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/Switch.actions';
import '../styles/Switch.css';
import {fillGrid, resetGame} from '../actions/Game.actions';

class SwitchContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.switchSize(3);
    }

    render() {
        return (
            <div className="Game__Switch">
                <span>Розмір поля</span>
                <br/>
                <label>
                    <span>3 на 3</span>
                    <input name="size" type="radio" onChange={()=>this.props.switchSize(3)} checked={this.props.data.size === 3}/>
                </label>
                <br/>
                <label>
                    <span>5 на 5</span>
                    <input name="size" type="radio" onChange={()=>this.props.switchSize(5)} checked={this.props.data.size === 5}/>
                </label>
                <br/>
                <label>
                    <span>6 на 6</span>
                    <input name="size" type="radio" onChange={()=>this.props.switchSize(6)} checked={this.props.data.size === 6}/>
                </label>
                <br/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.size
    }
}

function mapDispatchToProps(dispatch) {
    return {
        switchSize: (size)=>{dispatch(actions.switchSize(size)); dispatch(fillGrid()); dispatch(resetGame())}
    }
}

const Switch = connect(
    mapStateToProps,
    mapDispatchToProps
)(SwitchContainer);

export default Switch;