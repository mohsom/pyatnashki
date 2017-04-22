/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/Switch.actions';
import '../styles/Switch.css';

class SwitchContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.switchSize(5);
    }

    render() {
        return (
            <div className="Game__Switch">
                <span>Розмір поля</span>
                <br/>
                <label>
                    <span>3 на 3</span>
                    <input name="size" type="radio" onClick={()=>this.props.switchSize(3)} checked={this.props.size.size === 3}/>
                </label>

                <label>
                    <span>5 на 5</span>
                    <input name="size" type="radio" onClick={()=>this.props.switchSize(5)} checked={this.props.size.size === 5}/>
                </label>

                <label>
                    <span>6 на 6</span>
                    <input name="size" type="radio" onClick={()=>this.props.switchSize(6)} checked={this.props.size.size === 6}/>
                </label>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        size: state.size
    }
}

function mapDispatchToProps(dispatch) {
    return {
        switchSize: (size)=>{dispatch(actions.switchSize(size))}
    }
}

const Switch = connect(
    mapStateToProps,
    mapDispatchToProps
)(SwitchContainer);

export default Switch;