import styled from 'styled-components';
import logo from './logo.svg';

const TileRoot = styled('div')`
    background-color: ${props => props.theme.tile || '#cccccc'};
    width: 100%;
    min-height: 50px;
    margin: 0;
    user-select: none;
    border-bottom: 1px black dotted;
    &:hover {
        background-color: #555555;
        color: white

    }
    &.open {
        background-color: red;
    }
`;
const Icon = styled('img')`
margin: 0;
padding: 0;
background-color: black;
min-height: 100%;
    width:50px;
`;
const Title = styled('span')`
padding-left: 7px;
`;

function Tile({name = 'N/A', icon = logo, isOpen = false, onClick, iconOnly=false, theme = {}}) {
    const className = isOpen ? 'open' : '';
    return (
        <TileRoot theme={theme} className={className} onClick={onClick}>
            <Icon src={icon} />
            {!iconOnly && <Title>{name}</Title> }
        </TileRoot>
    );
};

export default Tile;
