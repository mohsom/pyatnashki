/*eslint-disable*/
import React, {Component} from 'react';
import './App.css';

const arrows = {
    up: 38,
    down: 40,
    left: 37,
    right: 39
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            size: 5,
            grid: [],
            emptyPos: {
                x: 4,
                y: 4
            }
        };
        this.keyPress = this.keyPress.bind(this);
    };


    componentWillMount() {
        document.addEventListener('keydown', this.keyPress);
    };

    componentDidMount() {
        this.fillGrid();

    };

    fillGrid() {
        let grid = [], val = 1;
        for (let i = 0; i < this.state.size; i++) {
            grid[i] = new Array(this.state.size);
            for (let j = 0; j < this.state.size; j++) {
                grid[i][j] = val;
                val++;
            }
        }
        grid[this.state.size - 1][this.state.size - 1] = null;
        this.setState({
            grid
        });
    };

    keyPress(e) {
        switch (e.keyCode) {
            case arrows.up: {
                this.moveTile('up');
                break;
            }
            case arrows.down: {
                this.moveTile('down');
                break;
            }

            case arrows.left: {
                this.moveTile('left');
                break;
            }

            case arrows.right: {
                this.moveTile('right');
                break;
            }
        }
    };

    moveTile(key) {
        let x = this.state.emptyPos.x;
        let y = this.state.emptyPos.y;
        let grid = this.state.grid;
        switch (key) {
            case 'up': {
                if (x > 0) {
                    grid[x][y] = grid[x - 1][y];
                    grid[x - 1][y] = null;
                    x--;
                }
                console.log('up!');
                break;
            }

            case 'down': {
                if (x < this.state.size - 1) {
                    grid[x][y] = grid[x + 1][y];
                    grid[x + 1][y] = null;
                    x++;
                }
                console.log('down!');
                break;
            }
            case 'left': {
                if (y > 0) {
                    grid[x][y] = grid[x][y - 1];
                    grid[x][y - 1] = null;
                    y--;
                }
                console.log('left!');
                break;
            }
            case 'right': {
                if (y < this.state.size - 1) {
                    grid[x][y] = grid[x][y + 1];
                    grid[x][y + 1] = null;
                    y++;
                }
                console.log('right!');
                break;
            }
        }
        this.setState({
            grid,
            emptyPos: {
                x,
                y
            }
        })
    };


    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    reshuffleTiles() {
        for (let i = 1; i <= 10; i++) {
            switch (this.getRandomInt(1, 4)) {
                case 1:
                    this.moveTile('up');
                    break;
                case 2:
                    this.moveTile('down');
                    break;
                case 3:
                    this.moveTile('left');
                    break;
                case 4:
                    this.moveTile('right');
                    break;
            }

            console.log(this.state.grid, this.state.emptyPos)
        }
    };

    render() {
        let tiles = [];
        this.state.grid.forEach((row) => {
            tiles = tiles.concat(row);
        });
        tiles = tiles.map((tile, index) => (
            <div key={index} className={tile ? "Grid__Tile" : "Grid__Tile Grid__Tile_empty"}>
                {tile ? tile : ''}
            </div>
        ));

        return (
            <div className="Game-container">
                <span>Розмір поля</span>
                <br/>
                <label>
                    <span>5 на 5</span>
                    <input name="size" type="radio" checked={this.state.size === 5}/>
                </label>

                <label>
                    <span>6 на 6</span>
                    <input name="size" type="radio" checked={this.state.size === 6}/>
                </label>

                <div>
                    <button type="button" onClick={()=>this.reshuffleTiles()}>Нова гра</button>
                </div>

                <div className="Grid">
                    {tiles}
                </div>
            </div>
        );
    };
}

export default App;
