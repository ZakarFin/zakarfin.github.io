import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Tile from './Tile';

function Teemakartta({onCancel, iconOnly=false, theme = {}}) {
    //const className = isOpen ? 'open' : '';
    return (
        <React.Fragment>
            <button onClick={() => onCancel()}>Takaisin</button>
            <Tile name="Aineistohaku" />
            <Tile name="Taulukko" />
            <Tile name="Diagrammi" />
        </React.Fragment>
    );
};

export default Teemakartta;
