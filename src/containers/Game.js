/*eslint-disable*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/Game.actions';
import '../styles/Game.css';
import Tile from '../components/Tile';


const arrows = {
    up: 38,
    down: 40,
    left: 37,
    right: 39
};

class GameContainer extends Component {
   constructor(props) {
       super(props);
       this.keyPress = this.keyPress.bind(this);
   }

    componentWillMount() {
       this.props.fillGrid();
       document.addEventListener('keydown', this.keyPress);
    }

    keyPress(e) {
        switch (e.keyCode) {
            case arrows.up: {
                this.props.tileMoveUp();
                break;
            }
            case arrows.down: {
                this.props.tileMoveDown();
                break;
            }

            case arrows.left: {
                this.props.tileMoveLeft();
                break;
            }

            case arrows.right: {
                this.props.tileMoveRight();
                break;
            }
        }
    };

    render() {
        let tiles = [];
        this.props.grid.grid.forEach((row) => {
            tiles = tiles.concat(row);
        });
        tiles = tiles.map((tile, index) => (
            <Tile value={tile} key={index}/>
        ));

        let className = `Grid Grid_${this.props.size.size}`; //ddddddddddddd

        return (
            <div className="Game-container">
                <div>
                    <button type="button" onClick={()=>this.props.shuffleGrid()}>Нова гра</button>
                </div>

                <div className={className}>
                    {tiles}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        grid: state.grid,
        x: state.x,
        y: state.y,
        size: state.size
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        tileMoveUp: () => {dispatch(actions.tileMoveUp())},
        tileMoveDown: () => {dispatch(actions.tileMoveDown())},
        tileMoveLeft: () => {dispatch(actions.tileMoveLeft())},
        tileMoveRight: () => {dispatch(actions.tileMoveRight())},
        fillGrid: ()=>{dispatch(actions.fillGrid())},
        shuffleGrid: ()=>{dispatch(actions.shuffleGrid())}
    }
};

const Game = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);

export default Game;
