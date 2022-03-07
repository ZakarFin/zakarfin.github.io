import styled from 'styled-components';
import logo from './logo.svg';
import Tile from './Tile';

const ToolRow = styled('div')`
border-top: 1px solid;
line-height: 10px;
padding: 0 10px;
`;

const ToolBtn = styled('div')`
display: inline-block;
cursor: pointer;
width: 32px;
height: 32px;
&:hover {
    background-color: black;
}
`;


function Toolbar({name = 'N/A', icon = logo, isOpen = false, onCancel, iconOnly=false, theme = {}}) {
    //const className = isOpen ? 'open' : '';
return (<div id="toolbar" class="toolbar_default">
    <ToolRow>
        <ToolBtn title="Palaa alkutilaan" id="oskari_toolbar_history_reset" data-icon="tool-reset"><img src={logo} /></ToolBtn>
        <ToolBtn title="Siirry edelliseen näkymään" id="oskari_toolbar_history_history_back" data-icon="tool-history-back"><img src={logo} /></ToolBtn>
        <ToolBtn title="Siirry seuraavaan näkymään" id="oskari_toolbar_history_history_forward" data-icon="tool-history-forward"><img src={logo} /></ToolBtn>
    </ToolRow>
    <ToolRow>
        <ToolBtn title="Lähennä karttaa" id="oskari_toolbar_basictools_zoombox" data-icon="tool-zoombox"><img src={logo} /></ToolBtn>
        <ToolBtn title="Siirrä karttaa hiirellä raahaamalla" id="oskari_toolbar_basictools_select" data-icon="tool-pan"><img src={logo} /></ToolBtn>
        <ToolBtn title="Mittaa etäisyys pisteiden välillä" id="oskari_toolbar_basictools_measureline" data-icon="tool-measure-line"><img src={logo} /></ToolBtn>
        <ToolBtn title="Mittaa alueen pinta-ala" id="oskari_toolbar_basictools_measurearea" data-icon="tool-measure-area"><img src={logo} /></ToolBtn>
        <ToolBtn title="Maastoprofiili" id="oskari_toolbar_basictools_TerrainProfile" data-icon="tool-terrainprofile"><img src={logo} /></ToolBtn>
        <ToolBtn title="Vertaa ylintä karttatasoa alempiin karttatasoihin" id="oskari_toolbar_basictools_LayerSwipe" data-icon="tool-layer-swipe"><img src={logo} /></ToolBtn>
    </ToolRow>
    <ToolRow>
        <ToolBtn title="Tallenna näkymä" id="oskari_toolbar_viewtools_save_view" data-icon="tool-save-view"><img src={logo} /></ToolBtn>
        <ToolBtn title="Tee linkki karttanäkymään" id="oskari_toolbar_viewtools_link" data-icon="tool-link"><img src={logo} /></ToolBtn>
        <ToolBtn title="Tulosta nykyinen karttanäkymä png-kuvaksi tai pdf-tiedostoon." id="oskari_toolbar_viewtools_print" data-icon="tool-print"><img src={logo} /></ToolBtn>
    </ToolRow>
    <ToolRow>
        <ToolBtn title="Tee karttamerkintä" id="oskari_toolbar_selectiontools_addMarker" data-icon="marker-share"><img src={logo} /></ToolBtn>
        <ToolBtn title="Piirrä geometria ja valitse sen avulla kohteet." id="oskari_toolbar_selectiontools_dialog" data-icon="tool-feature-selection"><img src={logo} /></ToolBtn>
        <ToolBtn title="Klikkaa pistettä kartalla. Hakutuloksena saat pisteen koordinaatit ja pistettä lähimmän osoitteen." id="oskari_toolbar_selectiontools_findbycoordinates" data-icon="icon-find-nearest-address"><img src={logo} /></ToolBtn>
    </ToolRow>
    <ToolRow>
        <ToolBtn title="Piirrä piste ja lisää se omiin kohteisiin. Voit liittää saman kohteeseen useampia pisteitä. - Kirjaudu sisään, jotta voit lisätä kohteita." id="oskari_toolbar_myplaces_point" data-icon="myplaces-draw-point"><img src={logo} /></ToolBtn>
        <ToolBtn title="Piirrä viiva ja lisää se omiin kohteisiin. - Kirjaudu sisään, jotta voit lisätä kohteita." id="oskari_toolbar_myplaces_line" data-icon="myplaces-draw-line"><img src={logo} /></ToolBtn>
        <ToolBtn title="Piirrä alue ja lisää se omiin kohteisiin. - Kirjaudu sisään, jotta voit lisätä kohteita." id="oskari_toolbar_myplaces_area" data-icon="myplaces-draw-area"><img src={logo} /></ToolBtn>
        <ToolBtn title="Omien aineistojen tuonti" id="oskari_toolbar_myplaces_import" data-icon="upload-material"></ToolBtn>
    </ToolRow>
    <ToolRow>
        <ToolBtn title="Siirry 3D-näkymään. Käytettävissä vain osa karttatasoista ja työkaluista." id="oskari_toolbar_dimensionviews_DimensionChange" data-icon="dimension-tool"><img src={logo} /></ToolBtn>
    </ToolRow>
</div>);
};

export default Toolbar;
