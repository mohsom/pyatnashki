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
        this.solution = null;
        this.win = false;
    }

    componentWillMount() {
        this.props.fillGrid();
        document.addEventListener('keydown', this.keyPress);
    }

    keyPress(e) {
        if (this.props.data.gameStarted && !this.win) {
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
        let win = true;
        if(this.solution) {
            this.props.data.grid.forEach((row, i) => {
                row.forEach((tile, j) => {
                    if (tile !== this.solution[i][j]) {
                        win = false;
                    }
                });
            });
        }
        return win;
    };

    render() {
        let tiles = [];
        this.props.data.grid.forEach((row) => {
            tiles = tiles.concat(row);
        });
        tiles = tiles.map((tile, index) => (
            <Tile value={tile} key={index}/>
        ));

        if(!this.props.data.gameStarted) {
            this.solution = this.props.data.grid;
        }

        this.win = this.checkIfWin();

        let className = `Grid Grid_${this.props.data.size} ${this.win?'Grid_win':''}`;

        return (
            <div>
                {(this.props.data.gameStarted && this.win)?'win':''}
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
