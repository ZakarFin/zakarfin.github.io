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

const BUNDLE_LIST = [
  'Karttatasot',
  'Metadatahaku',
  'Julkaisija',
  'jee'
];

const USER_BUNDLE_LIST = [
  'Lisää kohde',
  'Lisää näkymä',
  'Lisää aineisto',
  'Lisää analyysi',
  'Lisää tilasto',
  'Omat tiedot'
];
/*
Config:
{
    bundles: ["jee", "moi", "moi2"],
    userBundles: ["personal", "addview"]
}
*/

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
    </Root>
  )
}

export default Kartta
