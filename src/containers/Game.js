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
        if (this.props.data.gameStarted) {
            switch (e.keyCode) {
                case arrows.up: {
                    e.preventDefault();
                    this.props.tileMoveDown();
                    break;
                }
                case arrows.down: {
                    e.preventDefault();
                    this.props.tileMoveUp();
                    break;
                }

                case arrows.left: {
                    e.preventDefault();
                    this.props.tileMoveRight();
                    break;
                }

                case arrows.right: {
                    e.preventDefault();
                    this.props.tileMoveLeft();
                    break;
                }
            }
        } else {
            return false;
        }
    };

    checkIfWin() {

    };

    render() {
        let tiles = [];
        this.props.data.grid.forEach((row) => {
            tiles = tiles.concat(row);
        });
        tiles = tiles.map((tile, index) => (
            <Tile value={tile} key={index}/>
        ));

        let className = `Grid Grid_${this.props.data.size}`;

        return (
            <div>
                <div>
                    <button className="New-game" type="button" onClick={() => {this.props.shuffleGrid(); this.props.newGame()}}>Нова гра
                    </button>
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
        data: state.grid
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        tileMoveUp: () => {
            dispatch(actions.tileMoveUp())
        },
        tileMoveDown: () => {
            dispatch(actions.tileMoveDown())
        },
        tileMoveLeft: () => {
            dispatch(actions.tileMoveLeft())
        },
        tileMoveRight: () => {
            dispatch(actions.tileMoveRight())
        },
        fillGrid: () => {
            dispatch(actions.fillGrid())
        },
        shuffleGrid: () => {
            dispatch(actions.shuffleGrid())
        },
        newGame: () => {
            dispatch(actions.newGame())
        }
    }
};

const Game = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);

export default Game;
