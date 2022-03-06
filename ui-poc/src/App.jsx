import React, { useState } from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import UserNavi from './UserNavi';
import Kartta, {BUNDLE_LIST, USER_BUNDLE_LIST} from './Kartta';
import UserDetails from './UserDetails';
import AppLogo from './ptilogo.svg';

import './App.css'
const Root = styled('div')`
  display: flex;
  height: 100%;
`;
const Navigation = styled('nav')`
  background-color: ${props => props.theme.bar || 'yellow'};
  width: 20vw;
  display: inline-block;
  &.icons {
    width: 50px;
  }
`;

const Logo = styled('div')`
  overflow: hidden;
  background-color: #000;
  width: 100%;
  min-height: 50px;
  margin: 0;
  padding: 10px;
  user-select: none;
  padding-bottom: 5px;
`;
function App() {
  const [isLogged, login] = useState(false);
  const [config, setConfig] = useState({
    bundles: BUNDLE_LIST,
    userBundles: USER_BUNDLE_LIST,
    theme: {
      tile: "#1ea8df",
      bar: "#aaaaaa"
    }
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
      <Navigation
        className={isOpen ? '' : 'icons'}
        theme={config.theme}
        >
        <Logo>
          <img src={AppLogo}/>
        </Logo>
        {config.bundles.map(name => {
          return (<Tile
            name={name}
            key={name}
            theme={config.theme}
            iconOnly={!isOpen}
            isOpen={name === tile}
            onClick={() => toggleTile(name)}
            />)
        })}
        <UserNavi
          userBundles={config.userBundles}
          theme={config.theme}
          isOpen={isOpen}
          onClick={toggleMydata} />
        <br /><br />
        <button onClick={() => setOpen(!isOpen)}>Toggle</button>
        <br /><br />
        
        <UserDetails isLogged={isLogged} login={login} />
        <div>
          <Tile name='Sovelluskohtaista' isOpen={true} 
            iconOnly={!isOpen}/>
          <Tile name='Käyttöohje'
            theme={config.theme}/>
        </div>
      </Navigation>
      <Kartta config={config} onChange={setConfig} />
    </Root>
  )
}

export default App
