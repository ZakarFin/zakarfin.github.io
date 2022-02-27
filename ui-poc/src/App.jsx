import React, { useState } from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import UserNavi from './UserNavi';
import Kartta from './Kartta';

import './App.css'
const Root = styled('div')`
  display: flex;
  height: 100%;
`;
const Navigation = styled('nav')`
  background-color: yellow;
  width: 20%;
  display: inline-block;
  &.icons {
    width: 50px;
  }
`;

const Logo = styled('div')`
overflow: hidden;
  background-color: #8df5a7;
  width: 100%;
  min-height: 50px;
  margin: 0;
  user-select: none;
  padding-bottom: 5px;
`;
function App() {
  const [config, setConfig] = useState({
    bundles: [],
    userBundles: []
  });
  const [tile, openTile] = useState(false);
  const [isOpen, setOpen] = useState(true);
  const toggleTile = (name) => {
    if (name == tile) {
      openTile(false);
    } else {
      openTile(name);
    }
  }
  const toggleMydata = (name) => {
    alert('open: ' + name)
  }

  return (
    <Root>
      <Navigation className={isOpen ? '' : 'icons'}>
        <Logo>
          Paikkatietoikkuna
        </Logo>
        {config.bundles.map(name => {
          return (<Tile
            name={name}
            key={name}
            iconOnly={!isOpen}
            isOpen={name === tile}
            onClick={() => toggleTile(name)}
            />)
        })}
        <UserNavi userBundles={config.userBundles} isOpen={isOpen} onClick={toggleMydata} />
        <br /><br />
        <button onClick={() => setOpen(!isOpen)}>Toggle</button>
        <br /><br />
        <div>
          Etunimi<br />
          Sukunimi<br />
          <a href="#">Kirjaudu ulos</a><br /><br />
        </div>
        <div>
          <input placeholder="tunnus"/><br />
          <input placeholder="passu"/><br />
          <a href="#">Kirjaudu sisään</a><br /><br />
        </div>
        <div>
          <Tile name='Käyttöohje' isOpen={true} 
            iconOnly={!isOpen}/>
        </div>
      </Navigation>
      <Kartta config={config} onChange={setConfig} />
    </Root>
  )
}

export default App
