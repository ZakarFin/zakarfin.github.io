import styled from 'styled-components';

const Root = styled('main')`
  user-select: none;
  background-color: '#c5c5c5';
  width: 100%;
  display: 'inline-block';
  padding: 20px;
  text-align: 'center'
`;

const Button = styled('button')`
  color: green;
    &::before {
      content: '[+] '
    }
  &.inUse {
    color: red;
    &::before {
      content: '[X] '
    }
  }
`;

export const BUNDLE_LIST = [
  'Haku',
  'Karttatasot',
  'Karttaselitteet',
  'Karttajulkaisu',
  'Teemakartat',
  'Analyysi',
  'Käyttöohje',
  'Koordinaattimuunnos',
  'Inspire'
];

export const USER_BUNDLE_LIST = [
  'Lisää kohde',
  'Lisää näkymä',
  'Lisää aineisto',
  'Lisää analyysi',
  'Lisää tilasto',
  'Omat tiedot'
];

function Kartta({config = {}, onChange}) {
  const updateBundle = (name) => {
    const idx = config.bundles.indexOf(name);
    if (idx === -1) {
      onChange({
        ...config,
        bundles: [...config.bundles, name]
      });
    } else {
      onChange({
        ...config,
        bundles: config.bundles.filter(item => item !== name)
      });
    }
  };
  const updateUserBundle = (name) => {
    const idx = config.userBundles.indexOf(name);
    if (idx === -1) {
      onChange({
        ...config,
        userBundles: [...config.userBundles, name]
      });
    } else {
      onChange({
        ...config,
        userBundles: config.userBundles.filter(item => item !== name)
      });
    }
  };
  const changeColor = (thing, color) => {
    //console.log(thing, color);
    
      onChange({
        ...config,
        theme: {
          ...config.theme,
          [thing]: color
        }
      });
  }
  
  return (
    <Root>
    <h2>Käynnistä/sammuta bundleja</h2>
        {BUNDLE_LIST.map(name => {
          const inUse = config.bundles.includes(name);
          return (<div><Button key={name}
             className={inUse ? 'inUse': ''}
             onClick={() => updateBundle(name)}>
            {name}
          </Button></div>)
        })}
    <h2>Käynnistä/sammuta käyttäjäsisältötoiminnallisuuksia</h2>
        {USER_BUNDLE_LIST.map(name => {
          const inUse = config.userBundles.includes(name);
          return (<div><Button key={name}
             className={inUse ? 'inUse': ''}
             onClick={() => updateUserBundle(name)}>
            {name}
          </Button></div>)
        })}

    <h2>Vaihda värejä</h2>
    Palkki: <input type="color" onChange={(e) => changeColor('bar', e.target.value)} value={config.theme.bar} /><br/>
    Tile: <input type="color" onChange={(e) => changeColor('tile', e.target.value)} value={config.theme.tile} />
    </Root>
  )
}

export default Kartta
