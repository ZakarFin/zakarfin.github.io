import styled from 'styled-components';
import logo from './logo.svg';

const TileRoot = styled('div')`
    background-color: #cccccc;
    width: 100%;
    min-height: 50px;
    margin: 0;
    user-select: none;
    border: 1px black dotted;
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
background-color: green;
min-height: 100%;
    width:50px;
`;
const Title = styled('span')`
padding-left: 7px;
`;

function Tile({name = 'N/A', icon = logo, isOpen = false, onClick, iconOnly=false}) {
    const className = isOpen ? 'open' : '';
    return (
        <TileRoot className={className} onClick={onClick}>
            <Icon src={icon} />
            {!iconOnly && <Title>{name}</Title> }
        </TileRoot>
    );
};

export default Tile;
