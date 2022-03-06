import styled from 'styled-components';
import Tile from './Tile';

const Root = styled('div')`
  background-color: ${props => props.theme.bar || 'yellow'};
  width: 100%;
  display: block;
  &.icons {
    width: 50px;
  }
`;

function UserNavi({userBundles = [], isOpen=true, onClick, theme={}}) {
  if (!userBundles.length) {
    return null;
  }

  return (
    <Root theme={theme} className={isOpen ? '' : 'icons'}>
      User data:<br/>
        {userBundles.map(name => {
          return (<Tile
            theme={theme}
            name={name}
            key={name}
            iconOnly={!isOpen}
            onClick={() => onClick(name)}
            />)
        })}
    </Root>
  )
}

export default UserNavi
