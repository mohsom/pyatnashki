/**
 * Created by Volodya Skalskyi on 4/22/2017.
 */
import React from 'react';

const Tile = (props) => {
    let value = props.value;
    return (
        <div className={value ? "Grid__Tile" : "Grid__Tile Grid__Tile_empty"}>
            {value ? value : ''}
        </div>
    )
};

export default  Tile;